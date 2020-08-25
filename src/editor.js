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
import { LabelsComponent } from "./components/LabelsComponent";
import { ListComponent } from "./components/ListComponent";
import { HistogramComponent } from "./components/HistogramComponent";
import { MultiplyComponent } from "./components/MultiplyComponent";
import { SubtractComponent } from "./components/SubtractComponent";
import { ColumnsComponent } from "./components/ColumnsComponent";
import { TasksComponent } from "./components/TasksComponent";
import { PredictComponent } from "./components/PredictComponent";

import Vuetify from "vuetify/lib";
import store from "@/store"


export async function createFlowEditor (){
    var container = document.querySelector('#rete');
    var components = [
        new NumComponent(), 
        new AddComponent(), 
        new DivideComponent(), 
        new MultiplyComponent(),
        new SubtractComponent(),
        new TextComponent(),  
        new GetComponent(),
        new PanelComponent(),
        new FileComponent(),
        new LabelsComponent(),
        new ListComponent(),
        new HistogramComponent(),
        new ColumnsComponent(),
        new TasksComponent(),
        new PredictComponent()
    ];
    var reader = new FileReader()
    
    var editor = new Rete.NodeEditor('demo@0.1.0', container);
    editor.use(ConnectionPlugin);
    editor.use(VueRenderPlugin, {
        options: {
            vuetify: new Vuetify(),
            store
        }
    });    
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


    var dataset = await new FileComponent().createNode()


    dataset.position = [0,0]
 

    editor.addNode(dataset)


    editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
      console.log('process');
        await engine.abort();
        await engine.process(editor.toJSON());
        store.commit("SAVE_EDITOR", editor)
    });

    editor.view.resize();
    AreaPlugin.zoomAt(editor);

    store.subscribe((mutation, state) => {
        if (mutation.type === "SET_FLUX") {
            let file = state.flux_file
            reader.readAsText(file, "UTF-8")
            reader.onloadend = function () {
                editor.fromJSON(JSON.parse(reader.result))
                editor.trigger('process')
            }
        }
    })

    editor.trigger('process');

}