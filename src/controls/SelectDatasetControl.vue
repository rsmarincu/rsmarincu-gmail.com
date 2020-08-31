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

export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
    data () {
        return {
            value: null,
            options: [],
            paused: false
        }
    },
    methods:{
        update() {
            
            if (this.ikey)
                this.putData(this.ikey, this.value)
            this.emitter.trigger('process');
            this.paused = false
            
        }
    },
    mounted() {
        this.options = this.$store.getters.openml_datasets
        this.update()
        },
};
</script>

<style>
</style>
