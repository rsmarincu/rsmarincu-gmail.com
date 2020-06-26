<template>
  <v-container>
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
</template>

<script>
import Papa from 'papaparse'


export default {
  props: ["readonly", "emitter", "ikey", "getData", "putData"],

  data() {
    return {
      value: null,
      file: null,
      overlay: false
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
      console.log(columns)
      for (let i in columns) {
          let header = { text: columns[i], value: columns[i]}
          headers.push(header)
      }
      console.log(headers)
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
            this.parseDataset(this.value, this.populateData)
            this.update();
        }    
    },

  },
  mounted() {
    this.value = this.getData(this.ikey);
  }
};
</script>
