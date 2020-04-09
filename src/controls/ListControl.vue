<template>
  <div>
    <multiselect 
        v-model="value" 
        :options="options"
        :multiple="true"
        :hide-selected="true"
        @select="update"
        @remove="update">
    <template 
        slot="selection" 
        slot-scope="{ values, search, isOpen }">
    <span 
        class="multiselect__single" 
        v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span>
    </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
    components: {
        Multiselect
    },
    data () {
        return {
            value: [],
            options: []
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
