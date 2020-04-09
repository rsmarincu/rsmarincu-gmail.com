import Rete from 'rete'
import { listSocket, datasetSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import { ImageControl } from '../controls/ImageControl'
import Axios from 'axios';

export class BarPlotComponent extends Rete.Component {
    constructor() {
      super("BarPlot");
      this.data.component = component;
    }
  
    builder(node){
      var dataset = new Rete.Input("dataset", "Dataset", datasetSocket);
      var x_axis = new Rete.Input("x_axis", "X Axis", listSocket);
      var y_axis = new Rete.Input("y_axis", "Y Axis", listSocket);

      var out = new Rete.Output("selected", "Selected", listSocket);
  
      return node
        .addInput(dataset)
        .addInput(x_axis)
        .addInput(y_axis)
        .addControl(new ImageControl(this.editor, 'preview', true))
        .addOutput(out)
      }
  
      async worker(node, inputs, outputs) {
        // const dataset = inputs['dataset']
        // const x_axis = inputs['x_axis']
        // const y_axis = input['y_axis']

        try {
            const resp = await Axios.get('https://picsum.photos/id/237/200/300', {
                responseType: 'blob'
            })
            console.log(resp)

            this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setImageUrl(resp.data)
            outputs['result'] = URL.createObjectURL(resp.data)
        } catch (error){
            outputs['result'] = null
        }        

    }
}