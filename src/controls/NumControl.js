import Rete from "rete";
import VueNumControl from "./NumberControl.vue";

export class NumControl extends Rete.Control {

    constructor(emitter, key, readonly) {
      super(key);
      this.render = 'vue';
      this.component = VueNumControl;
      this.props = { emitter, ikey: key, readonly };
    }
  
    setValue(val) {
      this.vueContext.value = val;
    }
}