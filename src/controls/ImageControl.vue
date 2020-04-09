<template>
    <div>
      <img :src="imageUrl" class="uploading-image" />
    </div>
</template>

<script>

export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],

    data () {
        return {
            value: null,
            imageUrl: null,
            image:null
        }
    }
};
</script>
