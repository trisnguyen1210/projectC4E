import { champNames } from '../source/name.js';

let totalHTML = "";
let listChamp = document.querySelector("#champ");
let imgGame = document.querySelector('#game-img');

// const { champNames } = require('./name.js');
let listChamps = champNames;
let randomChamp = listChamps[Math.floor(Math.random() * listChamps.length)];
let imgScreenChampName = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${randomChamp}_0.jpg`;
imgGame.innerHTML = `<img src=${imgScreenChampName}></img>`;

listChamps.forEach(name => {
    // let imgScreenChampName = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
    let imgSquareChampName = `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${name}.png`;
    renderSquare(name, imgSquareChampName);
});

function renderSquare(name, imgSquareChampName) {
    let rawHTML = `
        <div class="col-sm square button-champ">
            <image src="${imgSquareChampName}"></image>
        </div>
        `;
    totalHTML += rawHTML;
};
listChamp.innerHTML = totalHTML;

let btnChamp = document.querySelectorAll('.button-champ');
let arrayBtnChamp = Array.from(btnChamp);
for (let i in arrayBtnChamp) {
    arrayBtnChamp[i].addEventListener('click', () => {
        alert(`My name is ${champNames[i]}`)
    })
}