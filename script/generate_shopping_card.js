import { goods } from '../source/goods.js';

let shoppingItemsTypeAll = document.getElementById('shopping-items-type-all')
let shoppingItemsTypeFigure = document.getElementById('shopping-items-type-figure')
let shoppingItemsTypeLifeStyle = document.getElementById('shopping-items-type-lifestyle')
let shoppingItemsTypeAP = document.getElementById('shopping-items-type-accpc')

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let listCart = document.querySelector('.listCart');

let totalHTML = ``;
let totalHTMLFigure = ``;
let totalHTMLLifeStyle = ``;
let totalHTMLAP = ``;

goods.forEach((element, key) => {
    let urlImg = `./img/${element.img}`
    let rawHTML = ``;
    rawHTML = `
    <li class="card mb-3 shopping-items">
    <img src="${urlImg}" class="card-img-top pic-shopping-items" alt="...">
    <div class="card-body">
        <h5 class="card-title">${element.type.toUpperCase()}${` | `}${element.name}</h5>
        <div class="d-flex align-items-center justify-content-start">
            <p class="card-text">${element.quantity} product available</p>
        </div>
        <p class="card-text text-danger">Price: ${Number(element.price).toLocaleString()} VND
        </p>
        <div>
        <a class="add-cart" role="button" target="popup" onclick="window.open('cart.html', 'name','width=600,height=400')">Go to Cart</a>
        </div>
    </div>
    </li>
    `
    totalHTML += rawHTML;
    shoppingItemsTypeAll.innerHTML = totalHTML;
    if (element.type === "figure") {
        totalHTMLFigure += rawHTML;
        shoppingItemsTypeFigure.innerHTML = totalHTMLFigure;
    }
    else if (element.type === "LS") {
        totalHTMLLifeStyle += rawHTML;
        shoppingItemsTypeLifeStyle.innerHTML = totalHTMLLifeStyle;
    }
    else if (element.type === "AP") {
        totalHTMLAP += rawHTML;
        shoppingItemsTypeAP.innerHTML = totalHTMLAP;
    }
    else { }
    console.log(element.type) 
});