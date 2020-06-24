import { Socket } from 'rete'

var numSocket = new Socket("Number Value")
var textSocket = new Socket("Text")
var packageSocket = new Socket("Package")
var datasetSocket = new Socket("Dataset")
var listSocket = new Socket("List")

listSocket.combineWith(textSocket, numSocket, datasetSocket)
textSocket.combineWith(listSocket, numSocket, datasetSocket)
textSocket.combineWith(datasetSocket)
datasetSocket.combineWith(numSocket)
datasetSocket.combineWith(textSocket)
numSocket.combineWith(datasetSocket, listSocket)

export { numSocket, textSocket, packageSocket, datasetSocket, listSocket }; 