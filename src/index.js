const menu = document.querySelector(".menu")
const hamburgerButton = document.querySelectorAll('.burger-button')
const container = document.querySelector('.opacity-wraper')
const menuItemList = document.querySelectorAll('.menu a')
const toggleOpacity = () => {
  if (menu.classList.contains('is-active')) {
    container.classList.add('opaco')
  }else{
    container.classList.remove('opaco')
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
  element.addEventListener('click', ()=>{toggleMenu()
    toggleOpacity()
  })
});
menuItemList.forEach(element => {
  element.addEventListener('click', toggleMenu)
});