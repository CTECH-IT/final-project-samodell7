const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
var a = document.getElementById("container");

let state = {}

function startGame() {
 state = {}
 showTextNode(1)
}

function showTextNode(textNodeIndex) {
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
textElement.innerText = textNode.text
while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}
textNode.options.forEach(option => {
    if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
    }
})
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
const nextTextNodeId = option.nextText
if (nextTextNodeId <=0){
    return startGame()
}
state = Object.assign(state, option.setState)
showTextNode(nextTextNodeId)
}

const textNodes = [
{
    id: 1,
    text: 'Waking up on a park bench, you notice a wallet next to you',
    options: [
        {
            text:'Take the wallet',
            setState: {wallet: true},

            nextText: 2
        },
        {
            text:'Leave it for the owner to find',
            nextText: 2
        },
    ]

},
{
    id: 2,
    text: '"DID YOU JUST TAKE MY WALLET??????"',
    options: [
        {
            text:"What? I'm sorry I just found it here and was looking for the owner! Here.",
            requiredState: (currentState) => currentState.wallet,
            setState: { wallet:false},

            nextText: 3
        },
        {
            text:'ye',
            nextText: 4
        },
        {
            text:'no',
            nextText: 5
        }
    ]
},
{
    id: 3,
    text: 'Oh shoot. My bad. I thought you were tryna rob me',
    options: [
        {
            text:'I was tho',
            nextText: 4
        },
        {
            text:"It's all good man!",
            nextText:7
        },
        {
            text:"You gotta be more trusting",
            nextText:6
        }
        
    ]
},
{
    id: 4,
    text: 'He literally picks you up and heaves you into oncoming traffic',
    options: [
        {
            text:'Retry',
            nextText: -1
        }
          
    ]
    
},
{


   
}


]


startGame()