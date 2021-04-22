const togglePricign = document.querySelector("#togglePricing");
const priceElementShow = document.querySelectorAll(".card__item_show");
const priceElementHidde = document.querySelectorAll(".card__item_hidde")

togglePricign.addEventListener('click', () => {
    priceElementHidde.forEach((item) => {
        item.classList.toggle('card__item_hidde');
        item.classList.toggle('card__item_show');
    })

    priceElementShow.forEach((item) => {
        item.classList.toggle('card__item_hidde');
        item.classList.toggle('card__item_show');
    })

})