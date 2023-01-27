//--------------- burger-menu ---------------

//https://codepen.io/hexagoncircle/pen/dJMERy

//--------------- first-screen slide---------

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector('.slider-wrapper');
const slideBtnsWrapper = document.querySelector(".slide-btns-wrapper");
const slideBtns = document.querySelectorAll(".slide-btn");
let countSlide = 0;

console.log(document.documentElement.clientWidth);

slideBtnsWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains("slide-btn")) {
      let translateNum = sliderWrapper.clientWidth;
      slideBtns.forEach((btn, index) => {
          btn.classList.remove("active");
          event.target.classList.add("active");
          if (event.target === btn) {
            countSlide = index;
            console.log(countSlide);
            slider.style.transform = `translateX(${-translateNum * countSlide}px)`;
          }
        });
    }
});

//--------------- order-slide-----------------

const orderSlider = document.querySelector('.order-slider');
const orderSliderWrapper = document.querySelector('.order-slider-wrapper');
const orderBtnsWrapper = document.querySelector('.order-btns-wrapper');
const orderSlideBtns = document.querySelectorAll('.order-slide-btn');
let count = 0;
let translateNum = orderSliderWrapper.clientWidth;
console.log(translateNum);

orderBtnsWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('order-slide-btn')) {
        let translateNum = orderSliderWrapper.clientWidth;
        console.log(translateNum);
        orderSlideBtns.forEach((btn, index) => {
            btn.classList.remove('active');
            event.target.classList.add('active');
            if (event.target === btn) {
                count = index;
                console.log(count);
                orderSlider.style.transform = `translateX(${(-translateNum) * count}px)`;
                console.log()
            }
        });
    }
});

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
smallSlide.classList.add('visible');

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