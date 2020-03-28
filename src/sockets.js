import { Socket } from 'rete'

var numSocket = new Socket("Number Value")
var textSocket = new Socket("Text")
var packageSocket = new Socket("Package")

export { numSocket, textSocket, packageSocket };