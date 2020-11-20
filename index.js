//import Node from './classes/Node.js';
const Node = require('./classes/Node.js')
const fs = require('fs');
const cloudFunctions = require('./cloudFunctions.js');
const lookups = require('./lookups.js')

//read JSON and parse to JS object, in the real app this should be extracted from database
let rawdata = fs.readFileSync('data/flowData.json');
let flowData = JSON.parse(rawdata);

//this function takes the raw "flowData" and returns a data object that contains all Nodes with referential links as a tree structure (see Node class)
let nodeExtractor = (flowData) => {
    let extractedData = {};
    let count = 0;
    while(flowData[count].data){
        let newNode = new Node(flowData[count]);
        extractedData[flowData[count].id] = newNode;
        count++;
    }
    for(i = count; i < flowData.length; i++){
        extractedData[flowData[i].source].rightNodes.push(extractedData[flowData[i].target]);
        extractedData[flowData[i].target].leftNodes.push(extractedData[flowData[i].source]);
    }
    return extractedData;
}

// this recursive function takes a node object and recursively parses the data to output execution "chains" as a 2-dimensional array of Node id's
let chainBuilder = (node, chain, chainList) => {
    chain.push(node.data.id);
    if (node.rightNodes.length){
        for (n of node.rightNodes){
            chainList = chainBuilder(n, chain.slice(0), chainList);
        }
    }
    else{
        chainList.push(chain)
    }
    return chainList;
}

//starting point for the chain Builder
let chainBuilderStart = (extractedData) => {
    let chainList = [];
    for (node in extractedData){
        if (extractedData[node].data.data.nodeType == 'Source'){
            chainBuilder(extractedData[node],[],chainList);
        }
    }
    return chainList;
}

console.log(chainBuilderStart(nodeExtractor(flowData)));

console.log(cloudFunctions.TransformVIDEO('url1'));