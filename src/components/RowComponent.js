import Rete from 'rete'
import { numSocket, datasetSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class RowComponent extends Rete.Component {
    constructor(){
        super("Row");
        this.data.component = component;
        this.data.props = { icon:"mdi-table-row" }
    }

    builder(node) {
        var index = new Rete.Input('index',"Row Index", numSocket);
        var dataset = new Rete.Input('dataset', "Dataset", datasetSocket);
        var out = new Rete.Output('result', "Row", datasetSocket);

        return node
            .addInput(index)
            .addInput(dataset)
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {

        let i = inputs['index'].length?inputs['index'][0]:node.data.fileIn;
        let file = inputs['dataset'].length?inputs['dataset'][0]:node.data.fileIn;

        if (typeof file !== "undefined" && typeof i !== "undefined")
        {   
            let formData = new FormData();
            formData.append('file', file);
            formData.append('index', i)
            try {
                const resp = await Axios.post('http://fluxusml.com/pandas/row/',
                    formData,
                    {
                        responseType:'blob',
                    }
                )
                outputs['result'] = resp.data
            } catch (error){
                outputs['result'] = ""
            }
        }
    }
}
