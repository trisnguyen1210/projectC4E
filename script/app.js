// import { goods as products } from '../source/goods.js';

let products = [
    {
        "id": "1",
        "name": "Crab teddy bear",
        "type": "LS",
        "price": "100000",
        "quantity": "10",
        "img": "goods/Crab_2.jpg"
    },
    {
        "id": "2",
        "name": "Gnar teddy bear",
        "type": "LS",
        "price": "250000",
        "quantity": "5",
        "img": "goods/Gnar_2.jpg"
    },
    {
        "id": "3",
        "name": "Temmo teddy bear",
        "type": "LS",
        "price": "250000",
        "quantity": "5",
        "img": "goods/Teemo_2.jpg"
    },
    {
        "id": "4",
        "name": "Maokai-cat pillow",
        "type": "LS",
        "price": "200000",
        "quantity": "5",
        "img": "goods/Maokai_2.jpg"
    },
    {
        "id": "5",
        "name": "Ezreal default",
        "type": "figure",
        "price": "150000",
        "quantity": "10",
        "img": "goods/Ezreal_1_default.webp"
    },
    {
        "id": "6",
        "name": "Lulu default",
        "type": "figure",
        "price": "150000",
        "quantity": "10",
        "img": "goods/Lulu_1_default.jpg"
    },
    {
        "id": "7",
        "name": "Jin-x default",
        "type": "figure",
        "price": "150000",
        "quantity": "10",
        "img": "goods/Jin-x_1_default.jpg"
    },
    {
        "id": "8",
        "name": "Teemo default",
        "type": "figure",
        "price": "150000",
        "quantity": "10",
        "img": "goods/Teemo_1_default.jpg"
    },
    {
        "id": "9",
        "name": "Yummi default",
        "type": "figure",
        "price": "150000",
        "quantity": "10",
        "img": "goods/Yummi_1_default.jpg"
    },
    {
        "id": "10",
        "name": "Ahri default",
        "type": "figure",
        "price": "150000",
        "quantity": "10",
        "img": "goods/Ahri_1_default.jpg"
    },
    {
        "id": "11",
        "name": "Yummi pillow",
        "type": "LS",
        "price": "100000",
        "quantity": "5",
        "img": "goods/Yummi_2.jpg"
    },
    {
        "id": "12",
        "name": "Corki teddy bear",
        "type": "LS",
        "price": "250000",
        "quantity": "5",
        "img": "goods/Corki_2.jpg"
    },
    {
        "id": "13",
        "name": "Box and Key",
        "type": "AP",
        "price": "20000",
        "quantity": "100",
        "img": "goods/boxandkey_3.jpg"
    }
]

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let listAll = document.querySelector('.list-all');
let listFigures = document.querySelector('.list-figures');
let listLS = document.querySelector('.list-lifestyle');
let listAP = document.querySelector('.list-accpc');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let listCards = [];

function initApp() {
    let totalHTMLAll = ``;
    let totalHTMLFigure = ``;
    let totalHTMLLifeStyle = ``;
    let totalHTMLAP = ``;
    products.forEach((element, key) => {
        let rawHTML = `
        <div class="item">
            <img src="./img/${element.img}">
            <div class="title">${element.type.toUpperCase()} | ${element.name}</div>
            <div class="price">${Number(element.price).toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        </div>`;
        totalHTMLAll += rawHTML;
        if (element.type === "figure") {
            totalHTMLFigure += rawHTML;
        }
        else if (element.type === "LS") {
            totalHTMLLifeStyle += rawHTML;
        }
        else if (element.type === "AP") {
            totalHTMLAP += rawHTML;
        }
        else { }
    })
    listAll.innerHTML = totalHTMLAll;
    listFigures.innerHTML = totalHTMLFigure;
    listLS.innerHTML = totalHTMLLifeStyle;
    listAP.innerHTML = totalHTMLAP;
}

initApp();

function addToCard(key) {
    if (listCards[key] === undefined) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    else { }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((element, key) => {
        totalPrice = totalPrice + Number(element.price);
        count = count + element.quantity;
        if (element !== null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./img/${element.img}"/></div>
                <div>${element.name}</div>
                <div>${Number(element.price).toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${element.quantity - 1})">-</button>
                    <div class="count">${element.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${element.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    totalPrice = Number(totalPrice)
    total.innerText = totalPrice.toLocaleString() + ` VND`;
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}