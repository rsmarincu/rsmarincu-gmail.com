import Rete from 'rete'
import { datasetSocket, listSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class ColumnsComponent extends Rete.Component {
    constructor(){
        super("Columns");
        this.data.component = component;
        this.data.props = {icon:"mdi-view-column-outline"}
    }

    builder(node) {
        let inp = new Rete.Input('fileIn', "Dataset", datasetSocket);
        let inp1 = new Rete.Input('labels', "Labels", listSocket)
        let out = new Rete.Output('result', "Columns", datasetSocket);

        return node
            .addInput(inp)
            .addInput(inp1)
            .addOutput(out)
    }

    async worker(node, inputs, outputs) {
     
        let file = inputs['fileIn'].length?inputs['fileIn'][0]:node.data.fileIn;
        let labels = inputs['labels'].flat()

        if (file)
        {
            let formData = new FormData();
            formData.append('file', file);
            formData.append('labels', labels)
            try {
                const resp = await Axios.post('http://fluxusml.com/pandas/columns/',
                    formData,
                    {responseType:'blob'})
                let output_file = new File([resp.data], "export.csv")
                outputs['result'] = output_file
            } catch (error){
                outputs['result'] = ""
            }
        }
    }
}
