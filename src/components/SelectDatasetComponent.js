import Rete from 'rete'
import { numSocket, datasetSocket } from '../sockets'
import component from '../vue-components/Custom.vue';
import { SelectDatasetControl } from '../controls/SelectDatasetControl'
import Axios from 'axios';
import Papa from 'papaparse'
import store from "@/store"

function populateData(data, file){
  let headers = []
  let columns = Object.keys(data[0])
  
  for (let i in columns) {
      let header = { text: columns[i], value: columns[i]}
      headers.push(header)
  }
  let items = data
  let id = file.name
  let dataset = {
      id: id,
      file: file,
      headers: headers,
      items: items
  }
  store.commit("ADD_FILE", dataset)
}

function parseDataset(file, callback){
  console.log(file)
  Papa.parse(file, {
      download: true,
      dynamicTyping: true,
      header: true,
      complete: function(results) {
      callback(results.data, file)
      }
  })
}




export class SelectDatasetComponent extends Rete.Component {
    constructor() {
      super("Select dataset");
      this.data.component = component;
      this.data.props = {icon: "mdi-format-list-bulleted"}
    }
  
    builder(node){
      let dataset = new Rete.Output("selected", "Dataset", datasetSocket);
      let did = new Rete.Output("current_did", "Dataset ID", numSocket)

      return node
        .addOutput(dataset)
        .addOutput(did)
        .addControl(new SelectDatasetControl(this.editor, 'selector'))
      }

    async worker(node, inputs, outputs) {
      
      let did_ = this.editor.nodes.find(n => n.id == node.id).controls.get('selector').getValue()

      if (Number.isInteger(did_)){
        try{
          const resp = await Axios.get("http://fluxusml.com/pandas/load/", 
          { 
            params:{
              "did":did_
            },
            responseType:'blob'
          })
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          
          var graphql = JSON.stringify({
            query: `query($did_: Int){
          \n    dataset(did: $did_){
          \n        name
          \n    }
          \n}`,
            variables: {"did_":did_}
          })
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
          };

          var fileName;
          var resp_ = await fetch("http://fluxusml.com/graphql/interface", requestOptions)
          var respJson = await resp_.json()
          fileName = respJson.data.dataset.name
          let output_file = new File([resp.data], `${fileName}.csv`)
          parseDataset(output_file, populateData)

          outputs['selected'] = output_file
          outputs['current_did'] = did_
        }
        catch (error) {
          outputs['selected'] = null
          outputs['current_did'] = null
        }
      }
    }
}