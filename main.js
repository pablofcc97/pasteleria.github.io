let navMenu= document.querySelector('.nav__menu')
let menuIcon= document.querySelector('.menu-logo')
let closeIcon= document.querySelector('.close-logo')

menuIcon.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

closeIcon.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})