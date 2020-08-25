import Rete from 'rete'
import { numSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class SubtractComponent extends Rete.Component {
    constructor(){
        super("Subtract");
        this.data.component = component;
        this.data.props = {icon: "mdi-minus"}
    }

    builder(node) {
        var inp1 = new Rete.Input('subInp1',"Number", numSocket, true);
        var inp2 = new Rete.Input('subInp2', "Number2", numSocket, true);
        var out = new Rete.Output('subOut', "Number", numSocket);

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {
        var n1 = inputs['subInp1'].flat()
        var n2 = inputs['subInp2'].flat()
        let sum = null;

        try {
            const resp = await Axios.post('http://fluxusml.com/math/subtract/', {
                as: n1,
                bs: n2
            })
            sum = resp.data
        } catch (error){
            outputs['subOut'] = null
        }
        
        outputs['subOut'] = sum;
    }
}
