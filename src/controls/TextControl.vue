<template>
    <textarea 
    :readonly="readonly" 
    :value="value"
    @input="change($event)" 
    />
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

<style scoped lang="sass">

$light-grey: #E0E6ED

textarea 
    height: 100%
    width: 100%
    border: 1px solid $light-grey
    border-radius: 5px

</style>
