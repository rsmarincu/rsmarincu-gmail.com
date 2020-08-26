import Rete from 'rete'
import { datasetSocket, numSocket, textSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';
import { PredictControl } from '../controls/PredictControl'


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function checkForEmpty(obj) {
    for (var key in obj) {
        if (obj[key] === "" || obj[key] == null) {
            return false
        }
    }
    return true
}

export class PredictComponent extends Rete.Component {
    constructor(){
        super("Predict");
        this.data.component = component;
        this.data.props = {icon:"mdi-file-table"}
    }

    builder(node) {
        let dataset_id = new Rete.Input("did", "Dataset ID", numSocket);
        let task_type = new Rete.Input("ttid", "Task type", numSocket)
        let target = new Rete.Input('target', "Target", textSocket)
        let predict = new Rete.Input('predict', "Row to predict", datasetSocket);
        let result = new Rete.Output('result', 'Result', datasetSocket)
        let control =  new PredictControl(this.editor, 'pause', true)

        return node
            .addInput(dataset_id)
            .addInput(task_type)
            .addInput(target)
            .addInput(predict)
            .addOutput(result)
            .addControl(control)
    }

    async worker(node, inputs, outputs) { 
        let did = inputs['did'][0]
        let task = inputs['ttid'][0]
        let target = inputs['target'].flat()[0]
        let predict = inputs['predict'][0]
        predict = JSON.parse(predict)
        let session_id = getRandomInt(1, 100000)
        let ttid = null

        if (task == 'Predict') {
            ttid = 1
        }
        else  {
            ttid = 2
        }

        let to_check = {
            'did':did,
            'ttid':ttid,
            'target':target,
            'predict':predict,
            'session_id': session_id
        }

        console.log(to_check)

        let pause = this.editor.nodes.find(n => n.id == node.id).controls.get('pause').isPaused()
        console.log(pause)
        if (checkForEmpty(to_check) && pause) {

            console.log("Posting")
            
            try {
                const resp = await Axios.post('http://fluxusml.com/compute/load/', to_check)
                outputs['result'] = JSON.stringify(resp.data)
                console.log(resp.data)
            } catch (error){
                outputs['result'] = JSON.stringify(to_check)

            }
        }
        else {
            console.log("Not complete or paused")
            outputs['result'] = JSON.stringify(to_check)

        }

    }

}
