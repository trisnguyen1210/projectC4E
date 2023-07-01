

export function addToCard(key) {
    if (listCards[key] === undefined) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    else { }
    reloadCard();
}

export function reloadCard() {
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

exportfunction changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}