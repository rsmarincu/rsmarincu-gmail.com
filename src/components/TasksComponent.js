import Rete from 'rete'
import { numSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import { TasksControl } from '../controls/TasksControl'


export class TasksComponent extends Rete.Component {
    constructor() {
      super("Select task");
      this.data.component = component;
      this.data.props = {icon: "mdi-format-list-bulleted"}

    }
  
    builder(node){
      var out = new Rete.Output("task", "Task", numSocket);
  
      return node
        .addControl(new TasksControl(this.editor, 'preview', true))
        .addOutput(out)
      }
  
      worker(node, inputs, outputs) {
        
        outputs['task'] = this.editor.nodes.find(n => n.id == node.id).controls.get('preview').getValue()

    }
}