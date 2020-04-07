<template>
    <form method="post" enctype="multipart/form-data">
        <div>
            <label for="file">Choose file to upload</label>
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
        </div>
        <div>
            <button v-on:click.prevent="submitFile()">Submit</button>
        </div>
    </form>
</template>

<script>
import Axios from 'axios';

export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],

    data() {
        return {
            value: 0,
            file: ''
        }
    },
    methods: {
        update() {
        if (this.ikey)
            this.putData(this.ikey, this.value)
        this.emitter.trigger('process');
        },
        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            Axios.post( '/single-file',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function(){
            console.log('SUCCESS!!');
            })
            .catch(function(){
            console.log('FAILURE!!');
            });
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }

    },
    mounted() {
        this.value = this.getData(this.ikey);
    }
};
</script>
