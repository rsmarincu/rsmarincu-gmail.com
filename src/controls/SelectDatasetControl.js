import Rete from "rete";
import VueSelectDatasetControl from "./SelectDatasetControl.vue";

export class SelectDatasetControl extends Rete.Control {

    constructor(emitter, key, readonly) {
      super(key);
      this.render = 'vue';
      this.component = VueSelectDatasetControl;
      this.props = { emitter, ikey: key, readonly };
    }
  
    setValue(val) {
      this.vueContext.value = val;
    }

    getValue() {
        return this.vueContext.value;
      }
}