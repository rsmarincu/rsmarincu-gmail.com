import Rete from "rete";
import VueListControl from "./ListControl.vue";

export class ListControl extends Rete.Control {

    constructor(emitter, key, readonly) {
      super(key);
      this.render = 'vue';
      this.component = VueListControl;
      this.props = { emitter, ikey: key, readonly };
    }
  
    setValue(val) {
      this.vueContext.value = val;
    }
    setOptions(val) {
        this.vueContext.options = val;
      }
    getValue() {
        return this.vueContext.value;
      }
}