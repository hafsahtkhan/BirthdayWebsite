const card = document.querySelector('.card_inner1');
const hiddenText = document.getElementById('secret');

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
      } else {
        hiddenText.style.display = 'none';
      }
    hiddenText.style.textAlign = 'center';
    hiddenText.style.fontFamily = 'sans-serif';
    hiddenText.style.color = 'white';
})

const card2 = document.querySelector('.card_inner2');

card2.addEventListener('click', function() {
    card2.classList.toggle('is-flipped');
})


const card3 = document.querySelector('.card_inner3');

card3.addEventListener('click', function() {
    card3.classList.toggle('is-flipped');
})