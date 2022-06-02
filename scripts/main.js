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
    showTextNode(.5)
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
    //Game Menu
    {
        id: .5,
        text: "SODA SIM",
        options: [
            {
                text: 'Play Game',
                nextText: 1
            },
            {
                text: 'Credits',
                nextText: .6
            }
        ]
    },
    {
        id: .6,
        text: "Game by Lawton Peng and Sam Odell.",
        options: [
            {
                text: 'back',
                nextText: .5
            }
        ]
    },


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
        options: [
            {
                text: 'RIP, ig',
                nextText: -1
            }
        ]
    },
    {
        id: 0.03,

        text: 'Sprit Man and Mr. Bob kidnap you and you never escape.',
        options: [
            {
                text: 'Ain no way',
                nextText: -1
            }
        ]
    },
    {
        id: 0.04,

        text: 'Soda can shrapnel is sent into your chest and the blast sends you down the street. With a 99% survivability rate, you\'re lucky enough to be the 1%',
        options: [
            {
                text: "Awwwww yeaaaa",
                nextText: -1
            }
        ]
    },
    {
        id: 0.05,
        text: 'Congratulations, you\'ve earned the murderer ending!',
        options: [
            {
                text: 'try again',
                nextText: -1
            }
        ]
    },
    {
        id: 0.06,
        text: 'The darkness takes over again... Denial Ending earned',
        options: [
            {
                text: 'Explore the rest of the world',
                nextText: -1
            }
        ]
    },
    {
        id: 0.07,
        text: 'You live out the rest of your days in your new world. But is it real? Reality Ending earned',
        options: [
            {
                text: 'Redo reality',
                nextText: -1
            }
        ]
    },
    {
        id: 0.08,
        text: 'You leave Sprit Man and live the rest of your life weak and boring. The most boring ending possible earned. Congrats Ig',
        options: [
            {
                text: 'Try for a decent ending',
                nextText: -1
            }
        ]
    },
    {
        id: 0.09,
        text: 'The drink causes you to foam at the mouth and die',
        options: [
            {
                text: 'Crap',
                nextText: -1
            }
        ]
    },
    {
        id: 0.1,
        text: 'You and Sprit Man Accomplish his goal. The two of you save the earth from deforestation and global warming. Savior Ending earned.',
        options: [
            {
                text: 'That was a pretty good ending',
                nextText: -1
            }
        ]
    },
    {
        id: 0.11,
        text: 'He clocks you in the temple and you die. Did you forget your right isn\'t his right??',
        options: [
            {
                text: 'Ya oops',
                nextText: -1
            },
            {
                text: 'Nah I thought he was just lying',
                nextText: -1
            }
        ]
    },
    {
        id: 0.12,
        text: 'No shot you thought that would actually work. Smooch ending earned',
        options: [
            {
                text: 'I\'m the best',
                nextText: -1
            }
        ]
    },

    {
        id: 0.13,
        text: 'Moving at incredible speeds, be dodges your attack and delivers a punishing upper cut',
        options: [
            {
                text: 'No way I just died like that',
                nextText: -1
            }
        ]
    },
    {
        id: 0.14,
        text: 'Bob walks off, but you know that your paths will cross again. With Bob ending earned.',
        options: [
            {
                text: 'This is the good ending',
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
        text: '???: "DID YOU JUST TAKE MY WALLET??????"',
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

        text: 'Mr. Bob: "Oh shoot. My bad. I thought you were tryna rob me"',
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
        text: 'Mr. Bob: "hmmmmm I\'m not sure I trust you"',
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
        text: 'Mr. Bob: "YOU DON\'T KNOW ME!! I\'M MR. BOB!!!"',
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
        text: 'Mr. Bob: "hmm, good point..."',
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
        text: 'Mr. Bob: "look man, keep the money I just want my wallet"',
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
        text: 'Mr. Bob: "You know, you\'re alright Chevvy"',
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
        text: 'Mr. Bob: "C\'mon Chevvy, I want to introduce you to a friend"',
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
                nextText: 2.01,

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
        text: 'Sprit Man: "Hello, friend. Wonderful day we\'re blessed with today, isn\'t it?"',
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
        id: 2.02,
        text: 'Sprit Man: "I\'m the beat master that\'s why..."',
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
        text: 'Sprit Man: "Want to help me come garden?"',
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
                text: 'Wait, please! I\'m sorry',
                nextText: 2.06
            },
            {
                text: 'Are you ok?',
                nextText: 2.07
            },
            {
                text: 'I didn\'t mean to insult you, I apologize.',
                requiredState: (currentState) => currentState.chevvy,
                nextText: 2.08
            }
        ]
    },
    {
        id: 2.05,
        text: 'Sprit Man: "Ahahaha no thanks, mother nature provides all I need"',
        options: [
            {
                text: 'Dang. That\'s deep.',
                nextText: 6
            },
            {
                text: 'That\'s kinda dumb',
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
        text: 'Sprit Man: "I\'m more than ok. I\'m gardening HAHAHA!"',
        options: [
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
        text: 'Sprit Man: "Insult me? Chevvy, you could never."',
        options: [
            {
                text: 'How- how do you know about that?',
                nextText: 5
            }
        ]
    },
    {
        id: 2.09,
        text: 'Sprit Man: "How tall are you?"',
        options: [
            {
                text: 'What?',
                nextText: 0.02
            }
        ]
    },
    {
        id: 2.1,
        text: 'Sprit Man: "Well then, it was nice meeting you. Come back if you ever want to learn my tips and trick of gardening!"',
        options: [
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
        id: 2.11,
        text: '(He makes a sour face and a eary feeling consumes you)',
        options: [
            {
                text: 'Oops',
                nextText: .02
            }
        ]
    },



    //3 = with bob
    {
        id: 3,
        text: '(You and Mr. Bob walk down the street in silence until reaching the garden center where a ripped dude is working.)',
        options: [
            {
                text: '(try to introduce Mr. Bob)',
                nextText: 3.01
            },
            {
                text: '(walk quickly past the unusually shredded man)',
                nextText: 3.01
            }
        ]
    },
    {
        id: 3.01,
        text: 'Sprit Man: "Hello Friend"',
        options: [
            {
                text: 'Hey?',
                nextText: 3.02
            },
            {
                text: 'You good sir, are JACKED.',
                nextText: 3.03
            },
        ]
    },
    {
        id: 3.02,
        text: '(He reaches to shake your hand but Mr. Bob take it first)',
        options: [
            {
                text: '(confront Mr. Bob)',
                nextText: 0.01
            },
            {
                text: '(just ignore it)',
                nextText: 3.03
            }
        ]
    },
    {
        id: 3.03,
        text: 'Mr. Bob: "It\'s great to see you again Sprit Man, this is Chevvy."',
        options: [
            {
                text: 'How do you deal with this guy Mr. Sprit?',
                nextText: 3.04
            },
            {
                text: 'It\'s not Chevvy',
                nextText: 3.05
            }
        ]
    },
    {
        id: 3.04,
        text: '(Spit man stares in the distance, almost like he\'s is a trance)',
        options: [
            {
                text: 'Sprit Man?',
                nextText: 3.06
            },
            {
                text: '(Move past the clearly loaded question)',
                nextText: 3.05
            },
            {
                text: '(slap him out of it)',
                nextText: 3.07
            }
        ]
    },
    {
        id: 3.05,
        text: 'Mr Sprit: "You shouldn\'t be here, not yet"',
        options: [
            {
                text: 'What? What does that mean?',
                nextText: 0.03
            }
        ]
    },
    {
        id: 3.06,
        text: 'Sprit Man: "I apologize Chevvy, the truth is... He saved my life."',
        options: [
            {
                text: 'He saved your life?',
                nextText: 3.08
            }
        ]
    },
    {
        id: 3.07,
        text: 'Sprit Man: "huh what?"',
        options: [
            {
                text: 'I just asked ab-',
                nextText: 3.09
            },
            {
                text: 'Oh it was nothing, sorry',
                nextText: 3.1
            }
        ]
    },
    {
        id: 3.08,
        text: 'Sprit Man: "Yes indeed, during the great Soda, Juice war."',
        options: [
            {
                text: 'Oh wow, I\'m so sorry',
                nextText: 3.09
            },
            {
                text: 'I had no idea, I-',
                nextText: 3.12
            }
        ]
    },
    {
        id: 3.09,
        text: 'Mr. Bob: "I think now\'s a good time for you to leave."',
        options: [
            {
                text: 'I\'m sorry',
                nextText: 7
            },
            {
                text: 'Nah',
                nextText: 0.03
            }
        ]
    },
    {
        id: 3.1,
        text: 'Sprit Man: "Hmm... Must\'ve spaced out."',
        options: [
            {
                text: 'It\'s alright.',
                nextText: 3.09
            },
            {
                text: 'Are you ok?',
                nextText: 3.11
            }
        ]
    },
    {
        id: 3.11,
        text: 'Mr. Sprit: "No Chevvy, I\'m not. I think you should leave"',
        options: [
            {
                text: 'Alright Mr. Sprit...',
                nextText: 7
            }
        ]
    },
    {
        id: 3.12,
        text: 'Mr. Sprit:"No... You could never know"',
        options: [
            {
                text: '...',
                nextText: 3.13
            }
        ]
    },
    {
        id: 3.13,
        text: 'Sprit Man: "We were one in the same, Soda and Juice. Judged and punished based on levels of carbination. What kind of world is that?',
        options: [
            {
                text: 'so what happened?',
                nextText: 3.14
            }
        ]
    },
    {
        id: 3.14,
        text: ' Sprit Man: "Look around Chevvy. Where is the juice? Where is the love? I- I had to kill my love, Tropical Punch, all over a petty argument. Who is more refreshing!"',
        options: [
            {
                text: 'Mr. Sprit, I-',
                nextText: 3.15
            }
        ]
    },
    {
        id: 3.15,
        text: '(Sprit Man\'s soft eyes turn to despair) Mr Sprit: "You could never know Chevvy."',
        options: [
            {
                text: '...',
                nextText: 3.16
            }
        ]
    },
    {
        id: 3.16,
        text: '(Sprit Man begins to shake) Mr. Bob: "HE\'S GONNA BLOW!"',
        options: [
            {
                text: '(get down)',
                nextText: 3.17
            },
            {
                text: '(take the blast cause mama ain raise no chump)',
                nextText: 0.04
            }
        ]
    },
    {
        id: 3.17,
        text: 'Mr. Bob: "He\'s... dead... what have you done?',
        options: [
            {
                text: 'I\'ve killed him, how could I...',
                nextText: 0.05
            }
        ]
    },





    //4 lunch with bob ending
    {
        id: 4,
        text: 'Mr. Bob: So where do you wanna eat?',
        options: [
            {
                text: 'I need some creamy goodness in my life (go to the ice cream parlor)',
                nextText: 4.01
            },
            {
                text: 'I\'m feelin\' oriental (go to the Panda Express)',
                nextText: 4.02
            },
            {
                text: 'I want spaghetti (go to the Italian resturant)',
                nextText: 4.03
            },
            {
                id: 4.01,
                text: 'Mr.Bob: I\'m lactose intolerant',
                options: [
                    {
                        text: 'How does that even work',
                        nextText: 4
                    }
                ]
            },
            {
                id: 4.02,
                text: 'Mr. Bob: Msg gives me a headache',
                options: [
                    {
                        text: 'You don\'t have a head',
                        nextText: 4
                    },
                ]
            },
            {
                id: 4.03,
                text: 'Mr. Bob: I know a great Italian place just down the road',
                options: [
                    {
                        text: 'Sounds great!',
                        nextText: 4.04
                    },
                ]
            },
            {
                id: 4.04,
                text: 'You and Bob walk to the restaurant making small talk as you walk',
                options: [
                    {
                        text: '...',
                        nextText: 4.05
                    },
                ]
            },
            {
                id: 4.05,
                text: 'You and Bob arrive at a resturant called Spirit of Italy',
                options: [
                    {
                        text: '...',
                        nextText: 4.06
                    },
                ]
            },
            {
                id: 4.06,
                text: 'Bob rushes ahead, almost pushing you over, and holds the door for you before you can even grab it',
                options: [
                    {
                        text: 'Thanks...',
                        nextText: 4.06
                    },
                ]
            },
            {
                id: 4.06,
                text: '(You\'re both seated by the waiter and handed a menu)',
                options: [
                    {
                        text: '...',
                        nextText: 4.07
                    },
                ]
            },
            {
                id: 4.06,
                text: '(You\'re both seated by the waiter and handed a menu)',
                options: [
                    {
                        text: '...',
                        nextText: 4.07
                    },
                ]
            },
            {
                id: 4.07,
                text: 'Mr.Bob: I\'d really recommend the spaghetti here',
                options: [
                    {
                        text: '(Order the spaghetti)',
                        nextText: 4.08
                    },
                    {
                        text: '(Don\'t)',
                        nextText: 4.09
                    },
                ]
            },
            {

                id: 4.09,
                text: 'You both awkwardly stare at eachother',
                options: [
                    {
                        text: 'So lovely day we\'re having huh',
                        nextText: 4.1
                    },
                    {
                        text: 'Crazy day so far',
                        nextText: 4.11
                    },

                ]
            },
            {
                id: 4.08,
                text: 'You awkwardly slurp noodles while Mr.Bob stares at you',
                options: [
                    {
                        text: 'So lovely day we\'re having huh',
                        nextText: 4.1
                    },
                    {
                        text: 'Crazy day so far',
                        nextText: 4.11
                    },
                ]
            },
            {
                id: 4.1,
                text: 'Mr. Bob: I guess didn\'t really notice',
                options: [
                    {
                        text: '...',
                        nextText: 4.12
                    },
                ]
            },
            {
                id: 4.11,
                text: 'Mr.Bob: Pretty standard for me',
                options: [
                    {
                        text: '...',
                        nextText: 4.12

                    },
                ]
            },
            {
                id: 4.12,
                text: '...',
                options: [
                    {
                        text: '...',
                        nextText: 4.13

                    },
                ]
            },
            {
                id: 4.13,
                text: 'Hey listen, I\'ve had a great time and all, but I got to get going',
                options: [
                    {
                        text: 'Hey Wait! Will I ever get to see you again?',
                        nextText: 4.14

                    },
                ]
            },
            {
                id: 4.14,
                text: '(Bob turns to you and gives what you only can assume to be a wink and walks off into the sunset',
                options: [
                    {
                        text: 'I\'ll never forget you...',
                        nextText: 4.14

                    },
                ]
            },
            




            //5 the wake up ending (requires to steal the wallet and gain $20 and be without bob)

            {
                id: 5,
                text: '(a hissed voice echos around you)ຟคkē นp ¢hēงงฯ, ຟคkē นp',
                options: [
                    {
                        text: 'Who said that?',
                        nextText: 5.01
                    },
                    {
                        text: 'Where are you!?',
                        nextText: 5.01
                    }
                ]
            },
            {
                id: 5.01,
                text: '(The world around you melts, darkness envelopes you but begins to lighten) ¢hēงงฯ, ¢hēงงฯ, plēคŞē ¢໐๓ē ๖ค¢k',
                options: [
                    {
                        text: 'I am not Chevvy',
                        nextText: 0.06
                    },
                    {
                        text: 'I am Chevvy',
                        nextText: 5.02
                    }
                ]
            },
            {
                id: 5.02,
                text: 'The darkness turns to a white, flickering, flourecent light',
                options: [
                    {
                        text: 'Where am I?',
                        nextText: 5.03
                    }
                ]
            },
            {
                id: 5.03,
                text: '"Chevvy, you where in a crash, we thought we lost you!"',
                options: [
                    {
                        text: 'This isn\'t real. Take me back!',
                        nextText: 5.04
                    },
                    {
                        text: 'A crash?',
                        nextText: 5.05
                    }
                ]
            },
            {
                id: 5.04,
                text: '"Chevvy no! We just got you back!"',
                options: [
                    {
                        text: 'This isn\'t real.',
                        nextText: 0.06
                    },
                    {
                        text: 'Back?',
                        nextText: 5.05
                    }
                ]
            },
            {
                id: 5.05,
                text: '"Yes Chevvy, you where pronounced brain dead at the scene but EMT were able to keep your heart beating"',
                options: [
                    {
                        text: 'But the sodas, they were so real.',
                        nextText: 5.06
                    }
                ]
            },
            {
                id: 5.06,
                text: '"Chevvy it\'s so good to see you awake again"',
                options: [
                    {
                        text: 'The Sodas...',
                        nextText: 5.07
                    },
                    {
                        text: ' Oh.. yea...',
                        nextText: 0.07
                    }
                ]
            },
            {
                id: 5.07,
                text: '"Chevvy, cheงงฯ, ¢hēงงฯ, n̶o̶o̶o̶o̶o̶o̶!',
                options: [
                    {
                        text: 'Back into the world you, this time infront of a Gingerale.',
                        nextText: 7
                    }
                ]
            },

            //6 Sprit Endind
            {
                id: 6,
                text: 'Sprit Man: "I can teach you if you want"',
                options: [
                    {
                        text: 'Teach me? Teach me what?',
                        nextText: 6.01
                    },
                    {
                        text: 'Nah I\'m good just impressed',
                        nextText: 6.02
                    }
                ]
            },
            {
                id: 6.01,
                text: 'Sprit Man: "TO GET THIS YOLKED!"',
                options: [
                    {
                        text: 'Oh bettt',
                        nextText: 6.03
                    },
                    {
                        text: 'Ya know, thanks but I\'ll have to pass',
                        nextText: 6.02
                    }
                ]
            },
            {
                id: 6.02,
                text: 'Sprit Man: "Suit yourself"',
                options: [
                    {
                        text: 'Sorry man, another time maybe',
                        nextText: 0.08
                    }
                ]
            },
            {
                id: 6.03,
                text: 'Sprit Man: "Drink this!" (he hand you a glass of purple liquid)',
                options: [
                    {
                        text: 'I have this thing, I don\'t drink random fluid from strangers',
                        nextText: 6.04
                    },
                    {
                        text: 'Sure thing!',
                        nextText: .09
                    }
                ]
            },
            {
                id: 6.04,
                text: 'Sprit Man: "Smart rule. This is grape juice though" (he offers a different glass)',
                options: [
                    {
                        text: 'Ehhh, I\'ll have to pass.',
                        nextText: 6.02
                    },
                    {
                        text: 'Say less',
                        nextText: 6.05
                    }
                ]
            },
            {
                id: 6.05,
                text: 'You guzzle the glass down and begin feeling blood course throughout your body',
                options: [
                    {
                        text: 'Whoa',
                        nextText: 6.06
                    }
                ]
            },
            {
                id: 6.06,
                text: 'Sprit Man: "Good isn\'t it?"',
                options: [
                    {
                        text: 'I feel... god-like',
                        nextText: 6.07
                    },
                    {
                        text: 'What was that stuff?',
                        nextText: 6.08
                    }
                ]
            },
            {
                id: 6.07,
                text: 'Sprit Man: "Join me, I plan to replant the earth and need people with the physique of titans like yourself"',
                options: [
                    {
                        text: 'I- I can\'t. I\'m sorry',
                        nextText: 6.09
                    },
                    {
                        text: 'I would be glad to',
                        nextText: 0.1
                    }
                ]
            },
            {
                id: 6.08,
                text: 'Sprit Man: "Does it matter?"',
                options: [
                    {
                        text: 'Yes, I have to know',
                        nextText: 6.09
                    },
                    {
                        text: 'I guess not. Imma beef cake',
                        nextText: 6.07
                    }
                ]
            },
            {
                id: 6.09,
                text: 'Sprit Man: "We could have been so successful, so happy. But you had to be subborn"',
                options: [
                    {
                        text: 'What was that drink?',
                        nextText: 6.1
                    },
                    {
                        text: 'Your not going to get away with this!',
                        nextText: 6.11
                    }
                ]
            },
            {
                id: 6.1,
                text: 'Sprit Man: "It was truely grape juice, taken from the only juice box left alive"',
                options: [
                    {
                        text: 'you monster!',
                        nextText: 6.12
                    },
                    {
                        text: 'Lung at him',
                        nextText: 6.13
                    },
                    {
                        text: 'Meh',
                        nextText: 0.1
                    }
                ]
            },
            {
                id: 6.11,
                text: 'Sprit Man: "Planting enough trees to save the earth?"',
                options: [
                    {
                        text: 'Yes I mean no, the part about you being a monster',
                        nextText: 6.12
                    },
                    {
                        text: 'When you put it that way',
                        nextText: 0.1
                    }
                ]
            },
            {
                id: 6.12,
                text: 'Sprit Man: "I am not proud of what i\'ve done, but it was a necessary evil." (He attacks at you)',
                options: [
                    {
                        text: 'Wait no, I\'ll help you!',
                        nextText: 0.1
                    },
                    {
                        text: 'Prepare to fight',
                        nextText: 6.13
                    }
                ]
            },
            {
                id: 6.13,
                text: '(Sprit Man telegraphs a right hook)',
                options: [
                    {
                        text: 'Block Left',
                        nextText: 6.14
                    },
                    {
                        text: 'Block Right',
                        nextText: 0.11
                    }
                ]
            },
            {
                id: 6.14,
                text: 'The momentum leaves him defenseless for a second',
                options: [
                    {
                        text: 'Give him a smooch',
                        nextText: 6.15
                    },
                    {
                        text: 'Attack him',
                        nextText: 0.13
                    }
                ]
            },
            {
                id: 6.15,
                text: 'Sprit Man: "Whoah, I realize the errors of my ways."',
                options: [
                    {
                        text: 'You can do better',
                        nextText: 6.16
                    },
                ]
            },
            {
                id: 6.16,
                text: 'Sprit Man: "You\'re right!" (He frees the juice box and build 23 school\'s and hospitals in impoverished nations)',
                options: [
                    {
                        text: 'I did a great thing',
                        nextText: 0.12
                    }
                ]
            }



            // 0= deaths  1= begging   2 = bobless, 3 = with bob, 4 = Bob ending  5 = WAKE UP, special 6 = Sprit ending  7 = Gingerale




        ]


startGame()