<template>
  <v-container>
    <v-container v-if="completed == false && inProgress == false">
      <v-row justify="center">
        <v-file-input
          id="to_upload"
          ref="to_upload"
          outlined
          dense
          chips
          v-model="file"
          label="Upload your dataset"
        ></v-file-input>
      </v-row>
      <v-row justify="space-between">
        <v-btn @click="handleFileUpload()" text>Upload</v-btn>
      </v-row>
    </v-container>

    <v-container v-if="inProgress == true && completed == false">
      <div class="text-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="accent"
        indeterminate
      >
      </v-progress-circular>
      </div>
    </v-container>

    <v-container v-if="completed == true && inProgress == false">
      <div class="text-center">
        <h1>Done!</h1>
      </div>
    </v-container>
  </v-container>

</template>

<script>
import Papa from 'papaparse'
import Axios from 'axios';


export default {
  props: ["readonly", "emitter", "ikey", "getData", "putData"],

  data() {
    return {
      value: null,
      file: null,
      overlay: false,
      did: null,
      completed: false,
      inProgress: false
    };
  },
  methods: {
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger("process");
    },

    populateData(data, file){
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
      this.$store.commit("ADD_FILE", dataset)
    },

    parseDataset(file, callback){
      this.view = !this.view
      Papa.parse(file, {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function(results) {
          callback(results.data, file)
        }
      })
    },

    handleFileUpload() {
        this.value = this.file;
        if (this.value != null){

          let formData = new FormData();
          formData.append('file', this.value);
          this.parseDataset(this.value, this.populateData)
          this.inProgress = true
          Axios.post('http://fluxusml.com/pandas/upload/', formData)
          .then((resp) => {
            const data = resp.data
            console.log(data)
            this.did = data.add_dataset.dataset.did
            this.inProgress = false
            this.completed = true
            this.update();

          })  
        }    
    }

  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
};
</script>
