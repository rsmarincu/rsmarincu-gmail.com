<template>
  <v-container>
    <v-checkbox v-model="pause" :label="Pause"></v-checkbox>
  </v-container>

</template>

<script>
import Papa from 'papaparse'
import Axios from 'axios';


export default {
  props: ["readonly", "emitter", "ikey", "getData", "putData"],

  data() {
    return {
      pause: false
    };
  },
  methods: {
    update() {
      if (this.ikey) {
        this.putData(this.ikey, this.value);
      }
      this.emitter.trigger("process");
    },

    mounted() {
      this.value = this.getData(this.ikey);
    }
  }
};
</script>
