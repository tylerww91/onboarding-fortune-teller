// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const inputsContainer = document.getElementById('inputs-container');
const fortuneContainer = document.getElementById('fortune-container');

const ballImg = document.getElementById('8ball');

const askButton = document.getElementById('ask-button');
const resetButton = document.getElementById('try-again-button');

const fortune = document.getElementById('fortune');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

askButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length);
    fortune.textContent = answers[randNum];

    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    ballImg.classList.toggle('hide');
});

resetButton.addEventListener('click', () => {
    inputsContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    ballImg.classList.toggle('hide');
});
