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
//1
{
    id: 1,
    
    x:1,
    text: 'Waking up on a park bench, you notice a wallet next to you',
    options: [
        {
            text:'Take the wallet',
            setState: {wallet: true},
            
            nextText: 1.01


        },
        {
            text:'Leave it for the owner to find',
            
            
            nextText: 1.01
        },
    ]

},
//1.01
{
    id: 1.01,
    x:2,
    text: '"DID YOU JUST TAKE MY WALLET??????"',
    options: [
        {
            text:"What? I'm sorry I just found it here and was looking for the owner! Here.",
            requiredState: (currentState) => currentState.wallet,
            setState: { wallet:false},

            nextText: 1.02
        },
        {
            text:'ye',
            nextText: 1.03
        },
        {
            text:'no',
            nextText: 1.04
        }
    ]
},
//1.02
{
    id: 1.02,
    
    text: '"Oh shoot. My bad. I thought you were tryna rob me"',
    options: [
        {
            text:'I was tho',
            nextText: 1.03
        },
        {
            text:"It's all good man!",
            nextText:1.06
        },
        {
            text:"Dude I promise, what\'s your issue?",
            nextText:1.05
        }
        
    ]
},
//1.03
{
    id: 1.03,
    
    text: 'He literally picks you up and heaves you into oncoming traffic',
    options: [
        {
            text:'Retry',
            nextText: -1
        }
          
    ]
    
},
//1.04
{
    id: 1.04, 
    text: '"hmmmmm I\'m not sure I trust you"',
    options: [
        {
            text: 'Dude I promise, what\'s your issue?',
            nextText:1.05
        }
        ,
        {
            text: 'maybe you shouldn\'t',
            nextText: 1.07
        }
        ,

        {
            text:"(Attempt to kick his shins)",
            requiredState: (currentState) => currentState.wallet,
            nextText: 1.08
        }
    ] 

},
//1.05
{
    id: 1.05,
    text: '"YOU DON\'T KNOW ME!! I\'M DR. BOB!!!"',
    options: [
    {
        text: 'weird...',
        nextText: 1.09
    }
]
},
//1.06
{
    id: 1.06,
    text: '(he runs away and hides, clearly behind a bush 10 yards to your left)',
    options: [
        {
            text:'...',
            nextText: 1.09
        },
        {
            text:'I can see you...',
            nextText: 1.05
        }
    ]
},
//1.07
{
    id: 1.07,
    text: '"hmm, good point..."',
    options: [
    {
        text:'I know',
        nextText: 1.1
    },
    {
        text:'(give his wallet back silently)',
        requiredState: (currentState) => currentState.wallet,
        setState: { wallet:false},
        nextText: 1.09
    }
    ]
},
//1.08
{
    id: 1.08,
    text: '"look man, keep the money I just want my wallet"',
    options: [
        {
            text:'no',
            nextText:1.03
        },
        {
            text:'ok deal',
            setState: {wallet:false},
            setState: {twenty: true},
            nextText:1.09
        },
        {
            text:'you can just have it back, I\'m sorry',
            setState: {wallet: false},
            nextText: 1.1
        }
    ]
},
//1.09
{
    id: 1.09,
    text: '(With Mr. Bob staring you down, you decide to walk down the street to the community garden)',
    options: [
        {
            text:'ask Mr. Bob to come with you',
            nextText:3
        },
        {
            text:'have Mr. Bob stay here',
            nextText:2
        },
        {
            text:'take Mr. Bob out to eat instead',
            requiredState: (currentState) => currentState.twenty,
            setState: {twenty:false},
            nextText:4
        }
    ]
},
//1.1
{
    id:1.1,
    text: '"You know, you\'re alright Chevvy"',
    options: [
        {
            text:'That\'s not my na-',
            nextText:1.03
        },
        {
            text:'Chevvy it is',
            setState: {chevvy:true},
            nextText:1.11
        },
        {
            text:'(leave quickly)',
            nextText:2
            
        }
    ]
},
//1.11
{
    id:1.11,
    text: '"C\'mon Chevvy, I want to introduce you to a friend"',
    options: [
        {
            text:'No way I\'m staying here!',
            nextText:1.03
        },
        {
            text:'Again, it\'s no-',
            nextText:3
        }
    ]
},
//2
{
    id:2,
    text:'after escaping Mr. Bob, you reach the local community garden and meet a muscular man with \'Spit\' printed on the side of his head',
    options: [
        {
            text: '(Try to great the sprit man)',
            nextText: ''
        }
    ]
}

//2 = bobless, 3 = with bob, 4 = lunch with bob, special




]


startGame()