'use strict';
// MY HOMEWORK

// открытие и закрытие списка корзины
let basketButton = document.querySelector('.cartIconWrap');
let basketEl = document.querySelector('.basket');
basketButton.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});


let basketCounterEl = document.querySelector('.cartIconWrap span');
let featuredItemEl = document.querySelectorAll('.featuredItem')
let basketTotalEl = document.querySelector('.basketTotal');
let basketTotalValueEl = document.querySelector('.basketTotalValue');

featuredItemEl.forEach(function (ItemEl) {
    // использовал всплытие и за и получал требуемые поля у потомков поля
    ItemEl.addEventListener('click', function () {
        let id = ItemEl.childNodes[3].childNodes[1].classList[1];
        let name = ItemEl.childNodes[3].childNodes[1].innerText;
        let price = ItemEl.childNodes[3].childNodes[5].innerText.replace('$', '');
        addProductInBasket(id, name, price);

        basketCounterEl.textContent++;
    });
});

let basket = {};
let totalSummBasket = 0;
function addProductInBasket(id, name, price) {
    if (!(id in basket)) {
        basket[id] = 1;
        insertProductInBasket(id, name, price);
    } else {
        basket[id]++;
        updateProductInBasket(id, price * basket[id]);
    };
    totalSummBasket += Number(price);
    basketTotalValueEl.textContent = totalSummBasket.toFixed(2);
}

function insertProductInBasket(id, name, price) {
    let productRow = `
        <div class="basketRow">
            <div>${name}</div>
            <div>
                <span class="productCount" data-productId="${id}">1</span> шт.
            </div>
            <div>$${price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${id}">${price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

function updateProductInBasket(id, prodSumm) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${id}"]`);
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${id}"]`);
    productCountEl.textContent++;
    productTotalRowEl.textContent = prodSumm.toFixed(2);
}
