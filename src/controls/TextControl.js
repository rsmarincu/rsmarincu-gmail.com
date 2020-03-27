import Rete from "rete";
import VueTextControl from "./TextControl.vue";

export class TextControl extends Rete.Control {

    constructor(emitter, key, readonly) {
      super(key);
      this.render = 'vue';
      this.component = VueTextControl;
      this.props = { emitter, ikey: key, readonly };
    }
  
    setValue(val) {
      this.vueContext.value = val;
    }
}