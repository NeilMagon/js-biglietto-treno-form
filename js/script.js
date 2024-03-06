// prezzo al km
const kmPrice = 0.21;
console.log(kmPrice)

// sconto < 18
const smallDiscount = 20;
console.log(smallDiscount)

// sconto > 65
const bigDiscount = 40;
console.log(bigDiscount)
// attivazione bottone calcolo biglietto
const ticket = document.querySelector(`#ticket`);
ticket.addEventListener(`click`, function() {
    // richiesta km da percorrere
    const lenght = parseInt(document.querySelector(`#lenght`).value);
    console.log(lenght)
    // richiesta età
    const age = document.querySelector(`#age`).value;
    console.log(age)
    const name = document.querySelector(`#name`).value;
    // prezzo totale
    let totalPrice = lenght * kmPrice;
        if (age < 18){
            totalPrice = (lenght * kmPrice - (lenght * kmPrice * smallDiscount / 100));
        } else if (age > 65){
            totalPrice = (lenght * kmPrice - (lenght * kmPrice * bigDiscount / 100));
        }
    console.log(totalPrice)
    const allName = document.querySelector(`#all-name`);
    allName.innerHTML = name
    const ticketPrice = document.querySelector(`#ticket-price`);
    ticketPrice.innerHTML = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + `€`;
    ticketPrice.classList.add('active');
})
// attivazione bottone reset
const reset = document.querySelector(`#reset`);
reset.addEventListener(`click`, function() {
    // richiesta km da percorrere
    const lenght = parseInt(document.querySelector(`#lenght`).value = ``);
    console.log(lenght)
    // richiesta età
    const age = document.querySelector(`#age`).value = ``;
    console.log(age)
    const name = document.querySelector(`#name`).value = ``;
    const allName = document.querySelector(`#all-name`);
    allName.innerHTML = name
    const ticketPrice = document.querySelector(`#ticket-price`);
    ticketPrice.innerHTML ='';
    ticketPrice.classList.remove('active');
})
