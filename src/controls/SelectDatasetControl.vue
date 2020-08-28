<template>
  <div>
    <v-col cols="12" sm="12">
    <v-select
        v-model="value"
        :items="options"
        item-text="name"
        item-value="did"
        label="Select"
        @change="update"
    ></v-select>
    </v-col>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
    data () {
        return {
            value: null,
            options: [],
        }
    },
    methods:{
        update() {
            if (this.ikey)
                this.putData(this.ikey, this.value)
            this.emitter.trigger('process');
        }
    },
    mounted() {
        Axios.get("http://fluxusml.com/pandas/datasets/")
            .then((resp) => {
                console.log("Got datasets")
                this.options = resp.data
            } )
        this.update()
        },
};
</script>

<style>
</style>
