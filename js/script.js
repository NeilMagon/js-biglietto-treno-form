// prezzo al km
const kmPrice = 0.21;
console.log(kmPrice)

// sconto < 18
const smallDiscount = 20;
console.log(smallDiscount)

// sconto > 65
const bigDiscount = 40;
console.log(bigDiscount)

const ticket = document.querySelector(`#ticket`);
ticket.addEventListener(`click`, function() {
    // richiesta km da percorrere
    const lenght = parseInt(document.querySelector(`#lenght`).value);
    console.log(lenght)
    // richiesta età
    const age = document.querySelector(`#age`).value;
    console.log(age)
    // prezzo totale
    let totalPrice = lenght * kmPrice + `€`;
        if (age < 18){
            totalPrice = (totalPrice - (totalPrice * smallDiscount / 100));
        } else if (age > 65){
            totalPrice = (totalPrice - (totalPrice * bigDiscount / 100));
        }
    console.log(totalPrice)
    const ticketPrice = document.querySelector(`#ticket-price`);
    ticketPrice.innerHTML = 'Il prezzo del tuo biglietto è: ' + totalPrice;
    ticketPrice.classList.add('active');
})
