const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
var a = document.getElementById("container");
let character = document.getElementById('x')



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

/*function draw(){
    if (character => 2){
        fill(51)
        rect(10,10,10,10);
    }
}*/





const textNodes = [
{
    id: 1,
    
    x:1,
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
    x:2,
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
    
    text: '"Oh shoot. My bad. I thought you were tryna rob me"',
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
    id: 5, 
    text: '"hmmmmm I\'m not sure I trust you"',
    options: [
        {
            text: 'You gotta be more trusting',
            nextText:6 
        }
        ,
        {
            text: 'maybe you shouldn\'t',
            nextText: 8
        }
        ,

        {
            text:"(Attempt to kick his shins)",
            requiredState: (currentState) => currentState.wallet,
            nextText: 9
        }
    ] 

},
{
    id: 6,
    text: '"YOU DON\'T KNOW ME!! I\'M DR. BOB!!!"',
    options: [
    {
        text: 'weird...',
        nextText: 10
    }
]
},
{
    id: 7,
    text: '(he runs away and hides, clearly behind a bush 10 yards to your left)',
    options: [
        {
            text:'...',
            nextText: 10
        },
        {
            text:'I can see you...',
            nextText: 6
        }
    ]
},
{
    id: 8,
    text: '"hmm, good point..."',
    options: [
    {
        text:'I know',
        nextText: 11
    },
    {
        text:'(give his wallet back silently)',
        requiredState: (currentState) => currentState.wallet,
        setState: { wallet:false},
    }
    ]
}



]


startGame()