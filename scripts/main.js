/*{
    id:,
    text:,
    options:[
    {   text:,
        nextText:
    },
    {
        text:,
        requiredState: (currentState) => currentState.cccc,
        setState: { ccc:ccc},
        nextText:
    }
    ]
},*/


const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
var a = document.getElementById("container");
//let character = document.getElementById('x')



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




function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }

    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}







const textNodes = [
    //0.x
    //0.01
    {
        id: 0.01,

        text: 'He literally picks you up and heaves you into oncoming traffic',
        options: [
            {
                text: 'Retry',
                nextText: -1
            }

        ]

    },
    {
        id: 0.02,

        text: 'Sprit Man hits you in the head with a shovel and uses you for compost',
        options:[
            {
                text: 'RIP, ig',
                nextText: -1
            }
        ]
    },
    
    //1
    {
        id: 1,

        x: 1,
        text: 'Waking up on a park bench, you notice a wallet next to you',
        options: [
            {
                text: 'Take the wallet',
                setState: { wallet: true },

                nextText: 1.01


            },
            {
                text: 'Leave it for the owner to find',


                nextText: 1.01
            },
        ]

    },
    //1.01
    {
        id: 1.01,
        x: 2,
        text: '"DID YOU JUST TAKE MY WALLET??????"',
        options: [
            {
                text: "What? I'm sorry I just found it here and was looking for the owner! Here.",
                requiredState: (currentState) => currentState.wallet,
                setState: { wallet: false },

                nextText: 1.02
            },
            {
                text: 'ye',
                nextText: 0.01
            },
            {
                text: 'no',
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
                text: 'I was tho',
                nextText: 0.01
            },
            {
                text: "It's all good man!",
                nextText: 1.06
            },
            {
                text: "Dude I promise, what\'s your issue?",
                nextText: 1.05
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
                nextText: 1.05
            }
            ,
            {
                text: 'maybe you shouldn\'t',
                nextText: 1.07
            }
            ,

            {
                text: "(Attempt to kick his shins)",
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
                text: '...',
                nextText: 1.09
            },
            {
                text: 'I can see you...',
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
                text: 'I know',
                nextText: 1.1
            },
            {
                text: '(give his wallet back silently)',
                requiredState: (currentState) => currentState.wallet,
                setState: { wallet: false },
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
                text: 'no',
                nextText: 0.01
            },
            {
                text: 'ok deal',
                setState: { wallet: false },
                setState: { twenty: true },
                nextText: 1.09
            },
            {
                text: 'you can just have it back, I\'m sorry',
                setState: { wallet: false },
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
                text: 'ask Mr. Bob to come with you',
                nextText: 3
            },
            {
                text: 'have Mr. Bob stay here',
                nextText: 2
            },
            {
                text: 'take Mr. Bob out to eat instead',
                requiredState: (currentState) => currentState.twenty,
                setState: { twenty: false },
                nextText: 4
            }
        ]
    },
    //1.1
    {
        id: 1.1,
        text: '"You know, you\'re alright Chevvy"',
        options: [
            {
                text: 'That\'s not my na-',
                nextText: 0.01
            },
            {
                text: 'Chevvy it is',
                setState: { chevvy: true },
                nextText: 1.11
            },
            {
                text: '(leave quickly)',
                nextText: 2

            }
        ]
    },
    //1.11
    {
        id: 1.11,
        text: '"C\'mon Chevvy, I want to introduce you to a friend"',
        options: [
            {
                text: 'No way I\'m staying here!',
                nextText: 0.01
            },
            {
                text: 'Again, it\'s no-',
                nextText: 3
            },
            {
                text: 'Sorry man, I\'ve got something that needs to be done',
                nextText: 2
            }
        ]
    },




    //2 without bob garden
    {
        id: 2,
        text: 'after leaving Mr. Bob, you reach the local community garden and meet a muscular man with \'Spit\' printed on the side of his head',
        options: [
            {
                text: '(Try to greet the Sprit man)',
                nextText: 2.01
            },
            {
                text: '(Walk past him and say nothing)',
                nextText: 2.01
            },
            {
                text: '(Throw trash at the Sprit man)',
                nextText: 2.01
            },
            {
                text: '(Sneak up and touch his muscles)',
                nextText: 2.01
            }
        ]
    },
    {
        id: 2.01,
        text: '"Hello, friend. Wonderful day we\'re blessed with today, isn\'t it?"',
        options: [
            {
                text: 'Why are you so jacked????',
                nextText: 2.02
            },
            {
                text: 'I mean sure it is.',
                nextText: 2.03
            },
            {
                text: 'Would you like $20?',
                requiredState: (currentState) => currentState.twenty,
                setState: { twenty: false },
                nextText: 2.05
            }
        ]
    },
    {
        id:2.02,
        text: '"I\'m the beat master that\'s why..."',
        options: [
            {
                text: 'the beat master? What is wrong with everyone here?',
                nextText: 2.04,
            },
            {
                text: 'That\'s... something...',
                nextText: 2.03
            }
        ]
    },
    {
        id: 2.03,
        text: '"Want to help me come garden?"',
        options: [
            {
                text: 'Sure, why not.',
                nextText: 2.06
            },
            {
                text: 'I mean, honestly, I\'d rather not',
                nextText: 2.1
            }
        ]
    },
    {
        id: 2.04,
        text: '(he stares intensely at you. Burining your eyes.)',
        options: [
            {
                text:'Wait, please! I\'m sorry',
                nextText: 2.06
            },
            {
                text:'Are you ok?',
                nextText: 2.07
            },
            {
                text:'I didn\'t mean to insult you, I apologize.',
                requiredState: (currentState) => currentState.chevvy,
                nextText: 2.08
            }
        ]
    },
    {
        id: 2.05,
        text: '"Ahahaha no thanks, mother nature provides all I need"',
        options: [
            {
                text:'Dang. That\'s deep.',
                nextText: 6
            },
            {
                text:'That\'s kinda dumb',
                nextText: 0.02
            }
        ]
    },
    {
        id: 2.06,
        text: '(he hands you a shovel)"dig"',
        options: [
            {
                text: 'What am I digging for?',
                nextText: 2.09
            },
            {
                text: 'Sweeeeeeeet',
                nextText: 2.09
            },
            
        ]
    },
    {
        id: 2.07,
        text: '"I\'m more than ok. I\'m gardening HAHAHA!"',
        options:[
            {
                text: 'Yeaaaaaaa...',
                nextText: 2.1
            },
            {
                text: 'You are one weird dude',
                nextText: 0.02
            }
        ]
    },
    {
        id: 2.08,
        text: '"Insult me? Chevvy, you could never."',
        options:[
        {
            text: 'How- how do you know about that?',
            nextText: 5
        }
    ]
    },
    {
        id:2.09,
        text:'"How tall are you?"',
        options:[
            {
                text: 'What?',
                nextText: 0.02
            }
        ]
    },
    {
        id:2.1,
        text: '"Well, it was nice meeting you. Come back if you ever want to learn my tips and trick of gardening!"',
        options:[
            {
                text: 'That sounds great! Cya.',
                nextText: 7
            },
            {
                text: 'Gardening kinda dum lowkey',
                nextText: 2.11
            }
        ]
    },
    {
        id:2.11,
        text: '(He makes a sour face and a eary feeling consumes you)',
        options:[
            {
                text: 'Oops',
                nextText:.02
            }
        ]
    },



//3 = with bob
   {
        id:3,
        text: '('
    }




//4 lunch with bob ending
    /*{
        id: 4,
    }*/



//5 the wake up ending (requires to steal the wallet and gain $20 and be without bob)


// 0= deaths  1= begging   2 = bobless, 3 = with bob, 4 = Bob ending  5 = WAKE UP, special 6 = Sprit ending  7 = Gingerale




]


startGame()