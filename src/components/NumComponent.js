import Rete from "rete"
import { NumControl } from '../controls/NumControl'
import { numSocket } from '../sockets'
import component from '../vue-components/Custom.vue';

export class NumComponent extends Rete.Component {
    constructor(){
        super("Number");
        this.data.component = component;
        this.data.props = {icon: "mdi-numeric"}
    }

    builder(node) {
        var out1 = new Rete.Output('num', "Number", numSocket);

        return node
            .addControl(new NumControl(this.editor, 'num'))
            .addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs['num'] = node.data.num;
    }
}