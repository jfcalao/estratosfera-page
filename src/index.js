const menu = document.querySelector(".menu")
const hamburgerButton = document.querySelectorAll('.burger-button')
const container = document.querySelectorAll('.opacity-wraper')
const whatsapp = document.querySelector('.whatsapp')
const menuItemList = document.querySelectorAll('.menu a')
const footer=document.getElementById('footer')

const toggleOpacity = () => {
  if (menu.classList.contains('is-active')) {
    container.forEach(element=>{
      element.classList.add('opaco')
    }) 
  } else {
    container.forEach(element=>{
      element.classList.remove('opaco')
    }) 
  }
}
const toggleMenu = () => {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active')
    hamburgerButton[0].classList.add('hide-icon')
    hamburgerButton[1].classList.remove('hide-icon')
  } else {
    menu.classList.add('is-active')
    hamburgerButton[1].classList.add('hide-icon')
    hamburgerButton[0].classList.remove('hide-icon')
  }
}

hamburgerButton.forEach(element => {
  element.addEventListener('click', () => {
    toggleMenu()
    toggleOpacity()
  })
});
menuItemList.forEach(element => {
  element.addEventListener('click', () => {
    toggleMenu()
    toggleOpacity()
  })
});


function callback(entries, observer){
  console.log(entries)
  if (entries[0].isIntersecting) {
    console.log('is intermadre')
    whatsapp.style.position="absolute"
  } else {
    whatsapp.style.position="fixed"

  }
}
const options={
  rootMargin: '0px 0px 78px 0px'
}

const observer = new IntersectionObserver(callback, options)
observer.observe(footer)