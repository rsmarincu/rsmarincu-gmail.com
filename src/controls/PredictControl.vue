<template>
  <v-container>
    <v-row justify="center">
      <v-switch v-model="pause" :label="`${switch1}`" @change="swap"></v-switch>
    </v-row>
  </v-container>
</template>

<script>

export default {
  props: ["readonly", "emitter", "ikey", "getData", "putData"],

  data() {
    return {
      pause: false,
      switch1: "PAUSE"
    };
  },
  methods: {
    update() {
      if (this.pause){
        if (this.ikey) {
          this.putData(this.ikey, this.value);
        }
        this.emitter.trigger("process");
        }
    },

    mounted() {
      this.value = this.getData(this.ikey);
    },

    swap() {
      console.log(this.pause)
      if (this.pause) {
        this.switch1 = "RUNNING" 
      } 
      else {
        this.switch1 = "PAUSE"
      }
      this.update()
    }
  }
};
</script>
