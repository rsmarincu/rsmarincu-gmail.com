import Rete from 'rete'
import { datasetSocket } from '../sockets'
import { textSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class LabelsComponent extends Rete.Component {
    constructor(){
        super("Labels");
        this.data.component = component;
    }

    builder(node) {
        var inp = new Rete.Input('fileIn', "Dataset", datasetSocket);
        var out = new Rete.Output('result', "Labels", textSocket);

        return node
            .addInput(inp)
            .addOutput(out)
    }

    async worker(node, inputs, outputs) {
     
        var file = inputs['fileIn'].length?inputs['fileIn'][0]:node.data.fileIn;
        if (file)
        {
            let formData = new FormData();
            formData.append('file', file);
            try {
                const resp = await Axios.post('https://fluxusml.azurewebsites.net/pandas/labels/',
                    formData)
                outputs['result'] = resp.data
            } catch (error){
                outputs['result'] = ""
            }
        }
    }
}
