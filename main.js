let navMenu= document.querySelector('.nav__menu')
let menuIcon= document.querySelector('.nav__menu__menuLogo')
let closeIcon= document.querySelector('.nav__menu__closeLogo')

menuIcon.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

closeIcon.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})



const sliders = [...document.querySelectorAll('.carousel__cards__card')]
const arrowNext = document.querySelector('#after')
const arrowBefore = document.querySelector('#before')
const cardNumber = document.querySelector('.carousel__nav__cardNumber')
const totalCards = document.querySelector('.carousel__nav__totalCards')
let value

arrowNext.addEventListener('click',()=>changePosition(1))
arrowBefore.addEventListener('click',()=>changePosition(-1))

let changePosition=(change)=>{
    const currentElement =Number(document.querySelector('.carousel__card--show').dataset.id)
    
    value=currentElement
    value+=change

    if(value===0 || value== sliders.length+1){
        value= value===0 ? sliders.length : 1
    }
    sliders[currentElement-1].classList.toggle('carousel__card--show')
    sliders[value-1].classList.toggle('carousel__card--show')

    cardNumber.textContent=`${value}`
    totalCards.textContent=`${sliders.length}`
    
}


new Glider(document.querySelector('.sliderCards'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    arrows: {
      prev: '.slider__before',
      next: '.slider__after'
    },
    responsive: [
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

