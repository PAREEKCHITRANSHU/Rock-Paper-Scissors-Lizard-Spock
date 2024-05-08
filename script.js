let userscore = 0;
let compscore = 0;
const choice = document.querySelectorAll('.option');
const gencomputerchoice = () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomip = Math.floor(Math.random() * 5);
    return choices[randomip];
}
const msg = document.querySelector('#msg');
const userpara = document.querySelector('#user')
const comppara = document.querySelector('#computer')

const playgame = (userchoice) => {
    console.log('user choice=', userchoice);
    const computerChoice = gencomputerchoice();
    console.log('comp=', computerChoice);
    if (userchoice === computerChoice) {
        console.log("It's a Tie");
    }
    else if ((userchoice === 'rock' && computerChoice === 'scissors') ||
        (userchoice === 'paper' && computerChoice === 'rock') ||
        (userchoice === 'scissors' && computerChoice === 'paper') ||
        (userchoice === 'lizard' && computerChoice === 'paper') ||
        (userchoice === 'rock' && computerChoice === 'lizard') ||
        (userchoice === 'lizare' && computerChoice === 'spock') ||
        (userchoice === 'spock' && computerChoice === 'scissors') ||
        (userchoice === 'scissors' && computerChoice === 'lizard') ||
        (userchoice === 'lizard' && computerChoice === 'paper') ||
        (userchoice === 'paper' && computerChoice === 'spock') ||
        (userchoice === 'spock' && computerChoice === 'rock')
    ) {
        userscore++;
        userpara.innerText = userscore;
        msg.innerText = `you win! ${userchoice} beats ${computerChoice}`;
    }
    else {
        compscore++;
        comppara.innerText = compscore;
        msg.innerText = `you loose! ${computerChoice} beats ${userchoice}`
    }
};
choice.forEach((option) => {
    console.log(option);
    option.addEventListener("click", () => {
        const userchoice = option.getAttribute('id');
        playgame(userchoice);
    })

});
