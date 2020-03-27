import Rete from 'rete'
import { textSocket } from '../sockets'
import { TextControl } from '../controls/TextControl'

export class TextComponent extends Rete.Component {
    constructor(){
        super("Text");
    }

    builder(node) {
        var out = new Rete.Output('str', 'Text', textSocket)

        return node
            .addControl(new TextControl(this.editor, 'str'))
            .addOutput(out)
    }

    worker(node, inputs, outputs) {
        outputs['str'] = node.data.str;
    }
}
