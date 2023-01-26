
//--------------- small slider ----------------
const colorSelect = document.querySelector('.color-select');
const colorChoiceLabel = document.querySelectorAll('.color-choice');
const smallSlide = document.querySelector('.small-slide');
const colorDescription = ['серого', 'белого', 'красного'];
const prices = ['$899', '$950', '$999'];

let num = 1; // set first slide
let p = document.createElement("p");
p.classList.add("price");
p.textContent = prices[num - 1];
let img = document.createElement("img");
img.src = `images/small-slider/${num}.jpg`;
img.alt = `электрический велосипед ${colorDescription[num - 1]} цвета`;

smallSlide.append(p);
smallSlide.append(img);

colorSelect.addEventListener('click', function(event) {
    smallSlide.classList.add('opacity')
    console.log(event.target);
    if (event.target.classList.contains('color-choice')) {
        console.log(event.target.dataset.number);
        let num = event.target.dataset.number;
        p.textContent = prices[num - 1];
        img.src = `images/small-slider/${num}.jpg`;
        img.alt = `электрический велосипед ${colorDescription[num - 1]} цвета`;
    }
    smallSlide.classList.remove('opacity');
});