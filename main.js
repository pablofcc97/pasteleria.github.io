let navMenu= document.querySelector('.nav__menu')
let menuIcon= document.querySelector('.nav__menu__menuLogo')
let closeIcon= document.querySelector('.nav__menu__closeLogo')

menuIcon.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

closeIcon.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})