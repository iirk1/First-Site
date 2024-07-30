
const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');


for (let btn of infoBtns){  //обходимо колекцію btn, і для кожної btn створємо btn , створить нам 4 окремі кнопки
    
    btn.addEventListener('click', showHint);
}

function showHint (event) {
    event.stopPropagation(); // тепер клік кнопки не буде передаватись на батьківський елемент 

    for (let hint of infoHints){
        hint.classList.add('none');
    }
    
    this.parentNode.querySelector('.info-hint').classList.toggle('none'); //this - це елемент btn  до якого ми звертались в 8 рядку,  шукаємо батьківський елемент, клас інфохінт і видаляємо клас none

}

// закриваєм підказки по кліку , не тільки по кнопці
document.addEventListener('click', closeHints) // відловлюємо клік 

function closeHints () {
    for (let hint of infoHints){
        hint.classList.add('none');
    }
}

// забороняєм всплиття  події кліка наверх при кліку на підказки

for (let hint of infoHints){
    hint.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// SWIPER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 42,
    // freeMode: true,

    breakpoints: {
         600: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         920: {
           slidesPerView: 3,
           spaceBetween: 20,
         },
        1230: {
              slidesPerView: 4,
               spaceBetween: 42,
             },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
  });

// SWIPER


//TABS

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');


for (let btn of tabsBtns) {

    btn.addEventListener('click', function ()  {

        //забираємо активні класи  у всіх конпок
        for (let btn of tabsBtns){
            btn.classList.remove('tab-controls__btn--active');
        }


        //добавляємо активний клас до натиснутої кнопки
        this.classList.add('tab-controls__btn--active');

        //получаємо значення категорії товарів які потрібно включити 
        console.log(this.dataset.tab);



        //відображаємо потрібні товари  і скриваємо непотрібні
        for (let product of tabsProducts){


            //перевірка на відображення всіх слайдів
            if (this.dataset.tab === 'all'){
                product.classList.remove('none');
            } else {
                if (product.dataset.tabValue === this.dataset.tab){
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
    
                }
            }

        }
        swiper.update()

    })
}

// MOBILE nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper');
const mobileNavCloseBtn = document.querySelector('#mobile-nav-btn-close');

 mobileNavOpenBtn.onclick = function () {
    mobileNavWrapper.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
    mobileNavWrapper.classList.remove('mobile-nav-wrapper--open');
}







