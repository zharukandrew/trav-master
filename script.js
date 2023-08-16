let a = document.querySelector('.subscribe__lists-button button');
let b = document.querySelector('.subscribe__lists-box input');

a.addEventListener("click", () => {
  if (b.value == '') {
    alert('Введите логин');
  } else {
    alert('Добро пожаловать');
  }
});

let  buttonElement = document.querySelector('.location__button')
// Добавляет обработчик события «клик» на элемент buttonElement
buttonElement.addEventListener("click",()=>{
  alert(`Добро пожаловать`)
})
let  buttomsElement = document.querySelector('.journey__buttom')
// Добавляет обработчик события «клик» на элемент buttonElement
buttomsElement.addEventListener("click",()=>{
  alert(`Добро пожаловать`)
})




const data = document.querySelector('.triabocks__list-page');
const svg = document.querySelector('.s')

data.addEventListener("click",()=>{
  // внутри поля dataset-элемента хранятся все data-* атрибуты
  alert(data.dataset.name); // => Глеб
  // data-favorite-color доступен в JS как favoriteColor:
  alert(data.dataset.favoriteColor); // => tomato
})

svg.addEventListener("click",()=>{
  alert(svg.dataset.svg)
})


const subscribe = document.querySelector('.subscribe')

subscribe.addEventListener("click", () => {
  // alert(bodyElement.dataset.block); 
  subscribe.classList.toggle('red')
});


let uselfElement = document.querySelector('.header')

uselfElement.addEventListener("click",()=>{
    
    uselfElement.classList.toggle('uself')
})
let joniur = document.querySelector('.journey__page')
// Добавляет обработчик события «клик» на элемент buttonElement
joniur.addEventListener("click",()=>{
  joniur.classList.toggle('journey__page')
})

let journey__title = document.querySelector('.journey__title')
// Добавляет обработчик события «клик» на элемент buttonElement
joniur.addEventListener("click",()=>{
  joniur.classList.toggle('journey__title')
})
let journey__block2 = document.querySelector('.journey__block2')
// Добавляет обработчик события «клик» на элемент buttonElement
journey__block2.addEventListener("click",()=>{
  journey__block2.classList.toggle('journey__block2')
})
let location__item = document.querySelector('.location__item')
// Добавляет обработчик события «клик» на элемент buttonElement
location__item.addEventListener("click",()=>{
  location__item.classList.toggle('location__item')
})
let thing__title = document.querySelector('.thing__title')
// Добавляет обработчик события «клик» на элемент buttonElement
thing__title.addEventListener("click",()=>{
  thing__title.classList.toggle('.thing__title')
})
let thing__page = document.querySelector('.thing__page')
// Добавляет обработчик события «клик» на элемент buttonElement
thing__pages.addEventListener("click",()=>{
  thing__page.classList.toggle('.thing__page')
})

let exclusiveArr = document.querySelector('.exclusive__lists-title')
// Добавляет обработчик события «клик» на элемент buttonElement
exclusiveArr.addEventListener("click",()=>{
  exclusiveArr.classList.toggle('.exclusive__lists-title')
})
let exclusiveMrr = document.querySelector('.exclusive__lists-page')
// Добавляет обработчик события «клик» на элемент buttonElement
exclusiveMrr.addEventListener("click",()=>{
  exclusiveMrr.classList.toggle('.exclusive__lists-page')
})
let exclusiveUrr = document.querySelector('.plan__lists-title')
// Добавляет обработчик события «клик» на элемент buttonElement
exclusiveUrr.addEventListener("click",()=>{
  exclusiveUrr.classList.toggle('.plan__lists-title')
})
let exclusiveOrr = document.querySelector('.plan__lists-page')
// Добавляет обработчик события «клик» на элемент buttonElement
exclusiveOrr.addEventListener("click",()=>{
  exclusiveOrr.classList.toggle('.plan__lists-page')
})
let servic= document.querySelector('.servic__list-title')
// Добавляет обработчик события «клик» на элемент buttonElement
servic.addEventListener("click",()=>{
  servic.classList.toggle('.servic__list-title')
})
let servicArr= document.querySelector('.servic__list-page')
// Добавляет обработчик события «клик» на элемент buttonElement
servicArr.addEventListener("click",()=>{
  servicArr.classList.toggle('servic__list-page')
})
let servicPrr= document.querySelector('.servic__list-pages')
// Добавляет обработчик события «клик» на элемент buttonElement
servicPrr.addEventListener("click",()=>{
  servicPrr.classList.toggle('servic__list-pages')
})
let servicCrr= document.querySelector('.servic__list-titles')
// Добавляет обработчик события «клик» на элемент buttonElement
servicCrr.addEventListener("click",()=>{
  servicCrr.classList.toggle('servic__list-titles')
})
let servicKrr= document.querySelector('.servic__list-titles')
// Добавляет обработчик события «клик» на элемент buttonElement
servicKrr.addEventListener("click",()=>{
  servicKrr.classList.toggle('servic__list-titlesis')
})
let servicBrr= document.querySelector('.blog__title h3')
// Добавляет обработчик события «клик» на элемент buttonElement
servicBrr.addEventListener("click",()=>{
  servicBrr.classList.toggle('blog__title h3')
})
let subscribeArr= document.querySelector('.subscribe__list h1')
// Добавляет обработчик события «клик» на элемент buttonElement
subscribeArr.addEventListener("click",()=>{
  subscribeArr.classList.toggle('subscribe__list h1')
})

