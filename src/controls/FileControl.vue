<template>
    <form method="post" enctype="multipart/form-data">
        <div>
            <label for="file">Choose file to upload</label>
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" >
        </div>
    </form>
</template>

<script>
export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],

    data() {
        return {
            value: null,
            file: null
        }
    },
    methods: {
        update() {
        if (this.ikey)
            this.putData(this.ikey, this.value)
        this.emitter.trigger('process');
        },

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            this.value = this.file
            this.update()
        }

    },
    mounted() {
        this.value = this.getData(this.ikey);
    }
};
</script>
