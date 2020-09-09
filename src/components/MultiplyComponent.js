import Rete from 'rete'
import { numSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class MultiplyComponent extends Rete.Component {
    constructor(){
        super("Multiply");
        this.data.component = component;
        this.data.props = {icon: "mdi-multiplication" }
    }

    builder(node) {
        var inp1 = new Rete.Input('multInp1',"Number", numSocket, true);
        var inp2 = new Rete.Input('multInp2', "Number2", numSocket, true);
        var out = new Rete.Output('multOut', "Number", numSocket);

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {
        var n1 = inputs['multInp1'].flat()
        var n2 = inputs['multInp2'].flat()
        let sum = null;

        try {
            const resp = await Axios.get('http://fluxusml.com/math/multiply/', {
                as: n1,
                bs: n2
            })
            sum = resp.data
        } catch (error){
            outputs['multOut'] = null
        }
        
        outputs['multOut'] = sum;
    }
}
