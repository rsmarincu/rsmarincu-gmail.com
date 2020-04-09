import Rete from 'rete'
import { textSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import { ListControl } from '../controls/ListControl'


export class ListComponent extends Rete.Component {
    constructor() {
      super("Select items");
      this.data.component = component;

    }
  
    builder(node){
      var inp = new Rete.Input("items", "Items", textSocket, true);
      var out = new Rete.Output("selected", "Selected", textSocket);
  
      return node
        .addInput(inp)
        .addControl(new ListControl(this.editor, 'preview', true))
        .addOutput(out)
      }
  
      worker(node, inputs, outputs) {
        const items = inputs['items']
        this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setOptions(items)
        
        outputs['selected'] = this.editor.nodes.find(n => n.id == node.id).controls.get('preview').getValue()

    }
}