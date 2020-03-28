import Rete from 'rete'
import { textSocket } from '../sockets'
import Axios from 'axios';
import component from '../vue-components/Custom.vue';


export class GetComponent extends Rete.Component {
    constructor() {
      super("Get Request");
      this.data.component = component;

    }
  
    builder(node){
      var inp = new Rete.Input("url", "URL", textSocket);
      var out = new Rete.Output("response", "Response", textSocket);
  
      return node
        .addInput(inp)
        .addOutput(out)
      }
  
    async worker(node, inputs, outputs){
      var address = inputs['url'].length?inputs['url'][0]:node.data.url;
      if (address) {
        try {
          const resp = await Axios.get(`${address}`);
          outputs['response'] = JSON.stringify(resp.data, undefined, 4);
        } catch (error) { 
          outputs['response'] = ""
        }
      }
    }
}