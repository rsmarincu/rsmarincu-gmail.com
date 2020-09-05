import Rete from 'rete'
import { listSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import { ListControl } from '../controls/ListControl'


export class ListComponent extends Rete.Component {
    constructor() {
      super("Select items");
      this.data.component = component;
      this.data.props = {
        icon: "mdi-format-list-bulleted",
        description: `This component takes in a list of items and outputs another list.\n
        Users can select which items to output using the dropdown list.`
      }

    }
  
    builder(node){
      var inp = new Rete.Input("items", "Items", listSocket, true);
      var out = new Rete.Output("selected", "Selected", listSocket);
  
      return node
        .addInput(inp)
        .addControl(new ListControl(this.editor, 'preview', true))
        .addOutput(out)
      }
  
      worker(node, inputs, outputs) {
        const items = inputs['items']
        this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setOptions(items.flat())
        
        outputs['selected'] = this.editor.nodes.find(n => n.id == node.id).controls.get('preview').getValue()

    }
}