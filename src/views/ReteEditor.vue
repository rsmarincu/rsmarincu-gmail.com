<template>
    <div id="rete-app">
        <div id="rete" ref="rete" class="node-editor"></div>
    </div>
</template>

<script>
import { createFlowEditor } from '../editor.js'
export default {
    mounted(){
        createFlowEditor();
    }
}
</script>

<style scoped>
    #rete-app { 
        width: 100%;
        height: 100%;
    }
    #rete {
        height: 100em;
    }
</style>