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
      let dataset = new Rete.Output("dataset", "Dataset", datasetSocket);
      let did = new Rete.Output("did", "Dataset ID", numSocket)

      return node
        .addControl(new SelectDatasetControl(this.editor, 'selector'))
        .addOutput(dataset)
        .addOutput(did)

      }
      async worker(node, outputs) {
        
        let did = this.editor.nodes.find(n => n.id == node.id).controls.get('selector').getValue()
        if (Number.isInteger(did)){
          let dataset = await Axios.get("http://fluxusml.com/pandas/load/", 
          { 
            params:{
              "did":did
            }
          })
          console.log(dataset)
          outputs['dataset'] = dataset
          outputs['did'] = did
        }
        else {
          outputs['dataset'] = null
          outputs['did'] = null
        }
    }
}