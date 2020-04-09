import { Socket } from 'rete'

var numSocket = new Socket("Number Value")
var textSocket = new Socket("Text")
var packageSocket = new Socket("Package")
var datasetSocket = new Socket("Dataset")
var listSocket = new Socket("List")

listSocket.combineWith(textSocket)
textSocket.combineWith(listSocket)

export { numSocket, textSocket, packageSocket, datasetSocket, listSocket };