<template>
    <div id="app">
        <div id="rete" ref="rete"></div>
    </div>
</template>

<script>
import { createFlowEditor } from './editor.js'

export default {
    mounted(){
        createFlowEditor();
    }
}
</script>

<style scoped>
    #app { 
        width: 100%;
        height: 100%;
    }

    #rete {
        height: 100em;
    }
</style>