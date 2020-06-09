import Rete from 'rete'
import { listSocket, datasetSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import { ImageControl } from '../controls/ImageControl'
import Axios from 'axios';

export class HistogramComponent extends Rete.Component {
    constructor() {
      super("Histogram");
      this.data.component = component;
    }
  
    builder(node){
      let dataset = new Rete.Input("dataset", "Dataset", datasetSocket);
      let x_axis = new Rete.Input("x_axis", "X Axis", listSocket);
      let out = new Rete.Output("selected", "Selected", listSocket);
  
      return node
        .addInput(dataset)
        .addInput(x_axis)
        .addControl(new ImageControl(this.editor, 'preview', true))
        .addOutput(out)
      }
  
      async worker(node, inputs, outputs) {
        
        let file = inputs['dataset'][0]
        let x_axis = inputs['x_axis'][0]

        let formData = new FormData();
        formData.append('file', file);
        formData.append('x-axis', x_axis)

        try {
            const resp = await Axios.post('https://fluxusml.azurewebsites.net/visualisation/histogram/', formData, {
                responseType: 'blob'
            })            
            this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setImageUrl(resp.data)
            outputs['result'] = URL.createObjectURL(resp.data)
        } catch (error){
            outputs['result'] = null
        }        

    }
}