import Rete from 'rete'
import { numSocket, datasetSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import { SelectDatasetControl } from '../controls/SelectDatasetControl'
import Axios from 'axios';


export class SelectDatasetComponent extends Rete.Component {
    constructor() {
      super("Select dataset");
      this.data.component = component;
      this.data.props = {icon: "mdi-format-list-bulleted"}
    }
  
    builder(node){
      let dataset = new Rete.Output("selected", "Dataset", datasetSocket);
      let did = new Rete.Output("current_did", "Dataset ID", numSocket)

      return node
        .addOutput(dataset)
        .addOutput(did)
        .addControl(new SelectDatasetControl(this.editor, 'selector'))
      }

    async worker(node, inputs, outputs) {
      
      let did_ = this.editor.nodes.find(n => n.id == node.id).controls.get('selector').getValue()

      if (Number.isInteger(did_)){
        console.log("Requesting")
        try{
          const resp = await Axios.get("http://fluxusml.com/pandas/load/", 
          { 
            params:{
              "did":did_
            },
            responseType:'blob'
          })
          let output_file = new File([resp.data], "export.csv")
          
          outputs['selected'] = output_file
          outputs['current_did'] = did_
        }
        catch (error) {
          outputs['selected'] = null
          outputs['current_did'] = null
        }
      }
    }
}