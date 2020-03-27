import Rete from 'rete'
import { textSocket } from '../sockets'
import { TextControl } from '../controls/TextControl'



export class TextViewComponent extends Rete.Component {
    constructor(){
        super("Text View");
    }

    builder(node) {

        var inp1 = new Rete.Input('str',"Text", textSocket);
        inp1.addControl(new TextControl(this.editor, 'str'))

        return node
            .addInput(inp1)
            .addControl(new TextControl(this.editor, 'preview', true))
    }

    worker(node, inputs) {
        var text = inputs['str'].length ? inputs['str'][0]:node.data.str
        this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setValue(text);
    }
}
