import Rete from 'rete'
import { FileControl } from '../controls/FileControl'
import { datasetSocket } from '../sockets'
import component from '../vue-components/Custom.vue';

export class FileComponent extends Rete.Component {
    constructor(){
        super("Dataset");
        this.data.component = component;
    }

    builder(node) {
        var out = new Rete.Output('fileOut', "Dataset", datasetSocket);

        return node
            .addControl(new FileControl(this.editor, 'fileOut'))
            .addOutput(out)
    }

    worker(node, inputs, outputs) {     
        outputs['fileOut'] = node.data.fileOut;
    }
}
