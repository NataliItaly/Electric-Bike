
//--------------- first-screen slide---------

const slider = document.querySelector(".slider");
const slideBtnsWrapper = document.querySelector(".slide-btns-wrapper");
const slideBtns = document.querySelectorAll(".slide-btn");
let countSlide = 0;

slideBtnsWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains("slide-btn")) {
      slideBtns.forEach((btn, index) => {
        btn.classList.remove("active");
        event.target.classList.add("active");
        if (event.target === btn) {
          countSlide = index;
          console.log(countSlide);
          slider.style.transform = `translateX(${-630 * countSlide}px)`;
        }
      });
    }
});

//--------------- order-slide-----------------

const orderSlider = document.querySelector('.order-slider');
const orderBtnsWrapper = document.querySelector('.order-btns-wrapper');
const orderSlideBtns = document.querySelectorAll('.order-slide-btn');
let count = 0;

orderBtnsWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('order-slide-btn')) {
        orderSlideBtns.forEach((btn, index) => {
            btn.classList.remove('active');
            event.target.classList.add('active');
            if (event.target === btn) {
                count = index;
                console.log(count);
                orderSlider.style.transform = `translateX(${(-1133) * count}px)`;
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