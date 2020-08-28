import Rete from 'rete'
import { FileControl } from '../controls/FileControl'
import { datasetSocket, numSocket } from '../sockets'
import component from '../vue-components/FileComponent.vue';

export class FileComponent extends Rete.Component {
    constructor(){
        super("Dataset");
        this.data.component = component;
        this.data.props = {icon:"mdi-file-table"}
    }

    builder(node) {
        let out = new Rete.Output('fileOut', "Dataset", datasetSocket);
        let did = new Rete.Output('did', "Dataset ID", numSocket);

        return node
            .addControl(new FileControl(this.editor, 'fileOut', true))
            .addOutput(out)
            .addOutput(did)
    }

    worker(node, inputs, outputs) {     
        outputs['fileOut'] = node.data.fileOut;
        let did = this.editor.nodes.find(n => n.id == node.id).controls.get('fileOut').getDid()
        outputs['did'] = did
    }
}
