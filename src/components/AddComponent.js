import Rete from 'rete'
import { NumControl } from '../controls/NumControl'
import { numSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class AddComponent extends Rete.Component {
    constructor(){
        super("Add");
        this.data.component = component;
    }

    builder(node) {
        var inp1 = new Rete.Input('addInp1',"Number", numSocket);
        var inp2 = new Rete.Input('addInp2', "Number2", numSocket);
        var out = new Rete.Output('addOut', "Number", numSocket);

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addControl(new NumControl(this.editor, 'preview', true))
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {
        let n1 = inputs['addInp1'].length?inputs['addInp1'][0]:node.data.addInp1;
        let n2 = inputs['addInp2'].length?inputs['addInp2'][0]:node.data.addInp2;
        let sum = null;
        try {
            const resp = await Axios.get("localhost/math/add/", {
                params: {
                    'as': n1,
                    'bs': n2  
                }
            })
            sum = resp.data
        }
        catch (error) {
            sum = null
        }

        
        
        this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setValue(sum);
        outputs['addOut'] = sum;
    }
}
