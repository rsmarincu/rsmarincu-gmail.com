import Rete from "rete";
import VueImageControl from "./ImageControl.vue";

export class ImageControl extends Rete.Control {

    constructor(emitter, key, readonly) {
      super(key);
      this.render = 'vue';
      this.component = VueImageControl;
      this.props = { emitter, ikey: key, readonly };
    }
  
    setValue(val) {
      this.vueContext.value = val;
    }
    setImageUrl(val) {
        this.vueContext.imageUrl = URL.createObjectURL(val)
    }
}