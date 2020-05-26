import Rete from "rete";
import VueRenderPlugin from "rete-vue-render-plugin";
import ConnectionPlugin from "rete-connection-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
import AreaPlugin from "rete-area-plugin";
import CommentPlugin from "rete-comment-plugin";
import HistoryPlugin from "rete-history-plugin";
import ConnectionMasteryPlugin  from 'rete-connection-mastery-plugin';
import KeyboardPlugin from 'rete-keyboard-plugin';

import { NumComponent } from './components/NumComponent'
import { AddComponent } from './components/AddComponent'
import { DivideComponent } from './components/DivideComponent'
import { TextComponent } from "./components/TextComponents";
import { GetComponent } from "./components/GetComponent";
import { PanelComponent } from "./components/PanelComponent";
import { FileComponent } from "./components/FileComponent";
import { GetLabelsComponent } from "./components/GetLabelsComponent";
import { ListComponent } from "./components/ListComponent";
import { HistogramComponent } from "./components/HistogramComponent";


export async function createFlowEditor (){
    var container = document.querySelector('#rete');
    var components = [
        new NumComponent(), 
        new AddComponent(), 
        new DivideComponent(),
        new TextComponent(),  
        new GetComponent(),
        new PanelComponent(),
        new FileComponent(),
        new GetLabelsComponent(),
        new ListComponent(),
        new HistogramComponent()
    ];
    
    var editor = new Rete.NodeEditor('demo@0.1.0', container);
    editor.use(ConnectionPlugin);
    editor.use(VueRenderPlugin);    
    editor.use(AreaPlugin);
    editor.use(CommentPlugin);
    editor.use(HistoryPlugin);
    editor.use(ConnectionMasteryPlugin);
    editor.use(KeyboardPlugin);
    editor.use(ContextMenuPlugin);


    var engine = new Rete.Engine('demo@0.1.0');
    
    components.map(c => {
        editor.register(c);
        engine.register(c);
    });

    var n1 = await components[0].createNode({num: 2});
    var n2 = await components[0].createNode({num: 0});
    var add = await components[1].createNode();

    var dataset = await new FileComponent().createNode()
    var labels = await new GetLabelsComponent().createNode()

    n1.position = [80, 200];
    n2.position = [80, 400];
    add.position = [500, 240];
    dataset.position = [0,0]
    labels.position = [100,150]
 

    editor.addNode(n1);
    editor.addNode(n2);
    editor.addNode(add);
    editor.addNode(dataset)
    editor.addNode(labels)


    editor.connect(n1.outputs.get('num'), add.inputs.get('addInp1'));
    editor.connect(n2.outputs.get('num'), add.inputs.get('addInp2'));


    editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
      console.log('process');
        await engine.abort();
        await engine.process(editor.toJSON());
    });

    editor.view.resize();
    AreaPlugin.zoomAt(editor);
    editor.trigger('process');
}