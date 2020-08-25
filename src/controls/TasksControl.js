import Rete from "rete";
import VueTasksControl from "./TasksControl.vue";

export class TasksControl extends Rete.Control {

    constructor(emitter, key, readonly) {
      super(key);
      this.render = 'vue';
      this.component = VueTasksControl;
      this.props = { emitter, ikey: key, readonly };
    }
  
    setValue(val) {
      this.vueContext.value = val;
    }

    getValue() {
        return this.vueContext.value;
      }
}