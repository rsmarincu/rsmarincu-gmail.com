import Rete from 'rete'
import { numSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import Axios from 'axios';


export class AddComponent extends Rete.Component {
    constructor(){
        super("Add");
        this.data.component = component;
    }

    builder(node) {
        var inp1 = new Rete.Input('addInp1',"Number", numSocket, true);
        var inp2 = new Rete.Input('addInp2', "Number2", numSocket, true);
        var out = new Rete.Output('addOut', "Number", numSocket);

        return node
            .addInput(inp1)
            .addInput(inp2)
            .addOutput(out);
    }

    async worker(node, inputs, outputs) {
        let n1 = inputs['addInp1'].flat()
        let n2 = inputs['addInp2'].flat()
        let sum = null;
        if (n1[0].constructor === File)
        {         
            console.log("not array")
            try {
                let formData = new FormData();
                formData.append('file', n1[0]);
                formData.append('bs', n2);
                const resp = await Axios.post('https://fluxusml.azurewebsites.net/math/add/',
                                            formData, 
                                            {responseType: 'blob'})
                sum = new File([resp.data], "export.csv")
            } catch (error){
                outputs['addOut'] = null
            }
        }
        else 
        {
            try {
                const resp = await Axios.post('https://fluxusml.azurewebsites.net/math/add/', {
                    as: n1,
                    bs: n2
                })
                sum = resp.data
            } catch (error){
                outputs['addOut'] = null
            }
        }
        outputs['addOut'] = sum;
    }
}
