import { champNames } from '../source/name.js';

let totalHTML = "";
let listChamp = document.querySelector("#champ");

// const { champNames } = require('./name.js');
let listChamps = champNames;

listChamps.forEach(name => {
    let imgScreenChampName = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
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