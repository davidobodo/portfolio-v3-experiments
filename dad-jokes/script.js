const jokes = [
    {
        id: 1,
        question: "What did one pirate say to the other when he beat him at chess?",
        answer: "Checkmatey"
    },
    {
        id: 2,
        question: "Why did I quit my job at the coffee shop the other day?",
        answer: "It was just the same old grind over and over."
    },
    {
        id: 3,
        question: "Why should you never buy anything that has Velcro with it?",
        answer: "It's a total rip-off."
    },
    {
        id: 4,
        question: "What is the most groundbreaking invention of all time?",
        answer: "The shovel."
    },
    {
        id: 5,
        question: "Did you hear about the famous Italian chef that recently died?",
        answer: "He pasta way."
    },
    {
        id: 6,
        question: "What kind of music do astronauts listen to?",
        answer: "Neptunes."
    },
    {
        id: 7,
        question: "What do you call Santa’s little helpers?",
        answer: "Subordinate clauses."
    },
    {
        id: 8,
        question: "What’s the difference between a hippo and a zippo?",
        answer: "One is extremely big and heavy, and the other is a little lighter."
    },
    {
        id: 9,
        question: "Where did Captain Hook get his hook?",
        answer: "From the second-hand store."
    },
    {
        id: 10,
        question: "Why did Shakespeare’s wife leave him?",
        answer: "She got sick of all the drama."
    },
    {
        id: 11,
        question: "Why should you never write with a dull pencil?",
        answer: "It's pointless."
    },
    {
        id: 12,
        question: "How do you get a job at the moisturizer factory?",
        answer: "Apply daily."
    },
    {
        id: 13,
        question: "Why did the scarecrow win an award?",
        answer: "Because he was outstanding in his field."
    },
    {
        id: 14,
        question: "Did you hear about the cheese factory that exploded in France?",
        answer: "There was nothing left but de Brie."
    },
    {
        id: 15,
        question: "What do you get when you cross a snowman with a vampire?",
        answer: "Frostbite"
    }
];
//Generate a random number from 0 to the end of dadjokes;
function genRandBetweenZeroAndLimit(start, end) {
    return Math.round(Math.random() * (end - start)) + start;
}

class DadJokes {
    constructor(initJokes = []) {
        this.jokesWrapper = document.querySelector(".dad-jokes");
        this.dadJokes = initJokes;
        this.jokesStat = (function (data) {
            const dic = {};
            for (let i = 0; i < data.length; i++) {
                dic[i] = false;
            }
            return dic;
        })(initJokes);
    }

    genJokesStats(data) {
        const dic = {};
        for (let i = 0; i < data.length; i++) {
            dic[i] = false;
        }
        return dic;
    }

    execute() {
        // setInterval(() => {

        // }, 2000);

        const selectedNum = genRandBetweenZeroAndLimit(0, this.dadJokes.length);
        const jokeToDisplay = this.dadJokes[selectedNum];

        // question.innerText = ;
        // answer.innerText = jokeToDisplay.answer;

        console.log(this.jokesWrapper);
        this.jokesWrapper.getElementSByTagName("h4")[0].innerHTML = jokeToDisplay.question;
        // this.jokesWrapper.appendChild(answer);
    }
}

const dadJokes = new DadJokes(jokes);
dadJokes.execute();
console.log(dadJokes, "djfkajdkasj");
//If yes then get a new number
//select the joke and then display the joke
