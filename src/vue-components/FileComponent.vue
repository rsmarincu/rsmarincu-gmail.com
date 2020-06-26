<template>
  <div class="node" :class="[selected(), node.name] | kebab">
    <div class="title">{{node.name}}</div>
    <div class="col_">
      <div class="output" v-for="output in outputs()" :key="output.key">
        <div class="output-title">{{output.name}}</div>
        <Socket v-socket:output="output" type="output" :socket="output.socket" :used="() => output.connections.length"></Socket>
      </div>
    </div>

    <div class="control" v-bind:key="control.key" v-for="control in controls()" v-control="control"></div>
    <div class="col_">
        <div class="input" v-for="input in inputs()" :key="input.key" style="text-align: left">
        <Socket v-socket:input="input" type="input" :socket="input.socket" :used="() => input.connections.length"></Socket>
        <div class="input-title" v-show="!input.showControl()">{{input.name}}</div>
        <div class="input-control" v-show="input.showControl()" v-control="input.control"></div>
    </div>
    </div>

  </div>
</template>

<script>
import VueRender from 'rete-vue-render-plugin';
export default {
  mixins: [VueRender.mixin],
  components: {
    Socket: VueRender.Socket
  }
}
</script>

<style scoped lang="sass">
$node-color: white
$color-active: darken($node-color,5%)
$title-light: grey
$title-light-transparent: rgba(0, 255, 0,0.0)
$group-color: rgba(15,80,255,0.2)
$group-handler-size: 40px
$group-handler-offset: -10px
$socket-size: 20px
$socket-margin: 10px
$context-menu-round: 7px
$light-grey: #E0E6ED
$path-color: #0084FF
.node-editor
  .node
    background: $node-color
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    transition: all 0.3s cubic-bezier(.25,.8,.25,1)
    border: 1px solid darken($light-grey, 10%)
    border-radius: 5px
    cursor: pointer
    display: inline-block
    height: auto
    padding-bottom: 6px
    box-sizing: content-box
    min-width: 350px
    position: static
    &:hover
      background: $node-color
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    &.active
      background: $color-active
    .title
      color: black
      text-align: center
      font-weight: bold
      font-family: sans-serif
      font-size: 18px
      border-radius: 5px 5px 0 0
      padding: 8px
      overflow: hidden
      background: $light-grey
    .output
      text-align: right
    .input
      text-align: left
    .content
      display: table
      width: 100%
      .col_
        display: table-cell
        white-space: nowrap
        &:not(:last-child)
          padding-right: 20px
    .socket
      display: inline-block
      cursor: pointer
      border: 2px solid darken($light-grey, 25%)
      border-radius: $socket-size/2.0
      width: $socket-size
      height: $socket-size
      margin: $socket-margin
      vertical-align: middle
      background: white
      z-index: 2
      box-sizing: border-box
      &:hover
        border: solid $path-color
        border-width: 4px
      &.multiple
        border-color: yellow
      &.output
        margin-right: - $socket-size / 2
      &.input
        margin-left: - $socket-size / 2
    .input-title,.output-title
      vertical-align: middle
      color: black
      display: inline-block
      font-family: sans-serif
      font-size: 14px
      margin: $socket-margin 0
      line-height: $socket-size
    .input-control
      z-index: 1
      vertical-align: middle
      display: inline-block
    .control
      width: 100%
      padding: $socket-margin $socket-size/2 + $socket-margin
</style>