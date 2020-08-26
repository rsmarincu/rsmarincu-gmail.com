<template>
    <v-textarea
        auto-grow
        rows=22
        label="Text"
        :value="value"  
        @input="change($event)" 
    ></v-textarea>
</template>

<script>
export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],

    data() {
        return {
            value: '',
        }
    },
    methods: {
        change(e){
            this.value = e.target.value;
            this.update();
        },
        update() {
            if (this.ikey)
                this.putData(this.ikey, this.value)
            this.emitter.trigger('process');
        }
    },
    mounted() {
        this.value = this.getData(this.ikey);
    }
};
</script>

<style scoped>
    textarea {
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
</style>
