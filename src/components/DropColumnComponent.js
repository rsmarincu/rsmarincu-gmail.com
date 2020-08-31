import Rete from 'rete'
import { listSocket, datasetSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class DropColumnComponent extends Rete.Component {
    constructor(){
        super("Drop column");
        this.data.component = component;
        this.data.props = { icon:"mdi-table-column-remove" }
    }

    builder(node) {
        var labels = new Rete.Input('labels',"Columns", listSocket);
        var dataset = new Rete.Input('dataset', "Dataset", datasetSocket);
        var out = new Rete.Output('result', "Dataset", datasetSocket);

        return node
            .addInput(labels)
            .addInput(dataset)
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {

        let labels_ = inputs['labels']
        let file = inputs['dataset'].length?inputs['dataset'][0]:node.data.fileIn;

        if (typeof file !== "undefined" && typeof labels_ !== "undefined")
        {   
            let formData = new FormData();
            formData.append('file', file);

            for (let i=0; i<labels_.length; i++) {
                formData.append('labels', labels_[i])
            }

            try {
                const resp = await Axios.post('http://fluxusml.com/pandas/dropcolumns/',
                    formData,
                    {
                        responseType:'blob',
                    }
                )
                outputs['result'] = resp.data
                console.log(resp.data)
            } catch (error){
                outputs['result'] = ""
            }
        }
    }
}
