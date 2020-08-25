<template>
  <div>
    <v-col cols="12" sm="12">
    <v-select
        v-model="value"
        :items="options"
        label="Select"
        chips
        outlined
        dense
    ></v-select>
    </v-col>
  </div>
</template>

<script>

export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
    data () {
        return {
            value: [],
            options: ['Predict', 'Classify'],
        }
    },
    methods:{
        update() {
            if (this.ikey)
                this.putData(this.ikey, this.value)
            this.emitter.trigger('process');
            }
        }
};
</script>

<style>
</style>
