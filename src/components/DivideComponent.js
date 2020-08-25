import Rete from 'rete'
import { numSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';

export class DivideComponent extends Rete.Component {
    constructor(){
        super("Divide");
        this.data.component = component;
        this.data.props = {icon:"mdi-division"}

    }
    builder(node) {
        var inp1 = new Rete.Input('divInp1',"Number", numSocket, true);
        var inp2 = new Rete.Input('divInp2', "Number2", numSocket, true);
        var out = new Rete.Output('divOut', "Number", numSocket);

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {
        var n1 = inputs['divInp1'].flat()
        var n2 = inputs['divInp2'].flat()
        let sum = null;

        try {
            const resp = await Axios.post('http://fluxusml.com/math/divide/', {
                as: n1,
                bs: n2
            })
            sum = resp.data
        } catch (error){
            outputs['divOut'] = null
        }
        
        outputs['divOut'] = sum;
    }
}
