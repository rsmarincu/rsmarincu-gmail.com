import Rete from 'rete';
import component from '../vue-components/PanelComponent.vue';
import { textSocket } from '../sockets'
import { PanelControl } from '../controls/PanelControl'


export class PanelComponent extends Rete.Component {

    constructor() {
        super("Panel");
        this.data.component = component;
    }
    builder(node) {

        var inp = new Rete.Input('panelInput',"Text", textSocket, true);
        var out = new Rete.Output('panelOut',"Text", textSocket);

        return node
            .addInput(inp)
            .addControl(new PanelControl(this.editor, 'preview', true))
            .addOutput(out)
    }

    worker(node, inputs, outputs) {
        var text = inputs['panelInput'].length ? inputs['panelInput'][0]:node.data.panelInput
        this.editor.nodes.find(n => n.id == node.id).controls.get('preview').setValue(text);
        outputs['panelOut'] = text;

    }

}
