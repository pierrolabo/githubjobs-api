import {parse} from 'node-html-parser';


const githubjobsDataParser = (data) => {
    let accTitle = [];
    const root = parse(data)
    let accNodes = []
    const parsedRoot = root.childNodes.map((node) => {
        let acc = []
        if(node.childNodes[0]?.rawTagName === "strong") {
            accTitle.push(node.childNodes[0].childNodes[0].rawText)
            console.log("strong: ", node)
            //node.childNodes[0].rawTagName = "h3"       
            //node.rawTagName = ""
            const masterNode = node;
            const newNode = {}
            if(masterNode.childNodes.length < 2) {
                let firstChildNode = node.childNodes[0];
                firstChildNode.rawTagName = "h3" 
                //node = firstChildNode
                acc.push(firstChildNode)
                console.log("final node: ", node)
            } else {
                let firstChildNode = node.childNodes[0];
                firstChildNode.rawTagName = "h3" 
                acc.push(firstChildNode)
                let secondChild = node.childNodes[1];
                //delete node.childNodes[0]
                let masterNode = node
                delete masterNode.childNodes[0]
                acc.push(masterNode)
                //delete node.childNodes[1]

            }

        }
        if(node.rawTagName === "p" && node.childNodes[0]?.rawText.slice(node.childNodes[0]?.rawText.length - 1, node.childNodes[0]?.rawText.length) === ":") {
            accTitle.push(node.childNodes[0].rawText)
        }
        if(node.rawTagName === "p" && node.childNodes[0] !== undefined) {
            const isValid = stringIsAllUpperCase(node.childNodes[0].rawText)
            if(isValid) {
                accTitle.push(node.childNodes[0].rawText)
            }
        }
        if(acc.length !== 0) {
            accNodes.push(acc)
        } else {
            accNodes.push(node)
        }
        return node;
    })
    console.log("finished parsing: ", accTitle)
    console.log("parsednew: ", accNodes.toString())
    //return parsedRoot.toString()
   //return accNodes.toString()
   //return parse(data)
}

const stringIsAllUpperCase = (str) => {
    const string = str.split("");
    let isAllUpperCase = true;
    for(const char of string) {
        const isValid = char === char.toUpperCase();
        if(!isValid) {
            isAllUpperCase = false;
            break;
        }
    }
    if(isAllUpperCase) {
        return true;
    }
    return false;
}
export default githubjobsDataParser;