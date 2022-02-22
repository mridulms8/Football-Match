const h1 = document.querySelector('h1');
let teamOne = 0;
let teamTwo = 0;
h1.style.fontSize = '45px';
const one = document.querySelector('#one');
one.innerText = `${teamOne}`;
const two = document.querySelector('#two');
two.innerText = `${teamTwo}`;
const select = document.querySelector('select');
const barca = document.querySelector('#barca');
const body = document.querySelector('body');

barca.addEventListener('click', () => {
    if (teamOne + teamTwo < select.value) {
        teamOne++;
    }
    if (teamOne > select.value / 2) {
        one.style.color = 'rgb(233, 41, 41)'
        body.style.backgroundColor = 'rgb(233, 41, 41)'
    }
    one.innerText = `${teamOne}`;
})
const losBlancos = document.querySelector('#losBlancos')
losBlancos.addEventListener('click', () => {
    if (teamOne + teamTwo < select.value) {
        teamTwo++;
    }
    if (teamTwo > select.value / 2) {
        two.style.color = 'rgb(22, 104, 180)'
        body.style.backgroundColor = 'rgb(22, 104, 180)'
    }
    two.innerText = `${teamTwo}`;
})

const sim = document.querySelector('#sim');
sim.addEventListener('click', () => {
    teamOne = Math.ceil(Math.random() * select.value);
    teamTwo = select.value - teamOne;
    if (teamOne > select.value / 2) {
        one.style.color = 'rgb(233, 41, 41)'
    }
    one.innerText = `${teamOne}`;
    if (teamTwo > select.value / 2) {
        two.style.color = 'rgb(22, 104, 180)'
    }
    two.innerText = `${teamTwo}`;
    if (teamOne > teamTwo) {
        body.style.backgroundColor = 'rgb(233, 41, 41)'
    } else if (teamOne < teamTwo) {
        body.style.backgroundColor = 'rgb(22, 104, 180)'
    }
})

const rematch = document.querySelector('#rematch');
rematch.addEventListener('click', () => {
    teamOne = 0;
    teamTwo = 0;
    one.innerText = `${teamOne}`;
    one.style.color = 'aquamarine'
    two.innerText = `${teamTwo}`;
    two.style.color = 'aquamarine'
    body.style.backgroundColor = 'white';
})

const chants = document.querySelector('#chants');
const h3 = document.createElement('h3');
chants.append(h3);
const color = document.querySelector('#color');

const input = document.querySelector('input');
input.addEventListener('input', () => {
    h3.innerText = input.value.toUpperCase();
    h3.style.color = color.value;
})



