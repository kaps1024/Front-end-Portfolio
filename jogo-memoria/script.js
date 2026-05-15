const cards = document.querySelectorAll('.card');

let firstCard = '';
let secondCard = '';

let lockBoard = false;

let matchedCards = 0;

cards.forEach(card => {

    let random = Math.floor(Math.random() * 12);

    card.style.order = random;

    card.addEventListener('click', flipCard);

});

function flipCard(){

    if(lockBoard) return;

    if(this === firstCard) return;

    this.classList.add('flip');

    if(firstCard === ''){

        firstCard = this;

        return;
    }

    secondCard = this;

    checkMatch();
}

function checkMatch(){

    let isMatch =
    firstCard.dataset.character ===
    secondCard.dataset.character;

    if(isMatch){

        matchedCards += 2;

        resetCards();

        if(matchedCards === 12){

            confetti({

                particleCount: 200,

                spread: 120

            });
        }

    }else{

        lockBoard = true;

        setTimeout(() => {

            firstCard.classList.remove('flip');

            secondCard.classList.remove('flip');

            resetCards();

            lockBoard = false;

        }, 1000);
    }
}

function resetCards(){

    firstCard = '';

    secondCard = '';
}