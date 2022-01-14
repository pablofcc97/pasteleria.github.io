let navMenu= document.querySelector('.nav__menu')
let menuIcon= document.querySelector('.nav__menu__menuLogo')
let closeIcon= document.querySelector('.nav__menu__closeLogo')

menuIcon.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

closeIcon.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})



const sliders = [...document.querySelectorAll('.sliderCards__card')]
const arrowNext = document.querySelector('#after')
const arrowBefore = document.querySelector('#before')
const cardNumber = document.querySelector('.cardNumber')
const totalCards = document.querySelector('.totalCards')
let value

arrowNext.addEventListener('click',()=>changePosition(1))
arrowBefore.addEventListener('click',()=>changePosition(-1))

let changePosition=(change)=>{
    const currentElement =Number(document.querySelector('.slider__card--show').dataset.id)
    
    value=currentElement
    value+=change

    if(value===0 || value== sliders.length+1){
        value= value===0 ? sliders.length : 1
    }
    sliders[currentElement-1].classList.toggle('slider__card--show')
    sliders[value-1].classList.toggle('slider__card--show')

    cardNumber.textContent=`${value}`
    totalCards.textContent=`${sliders.length}`
    
}