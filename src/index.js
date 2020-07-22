const menu = document.querySelector(".menu")
const hamburgerButton = document.querySelectorAll('.burger-button')
const container = document.querySelector('.container')
const menuItemList = document.querySelectorAll('.menu a')
const handleClick = () => {
  toggleMenu()
}
const toggleMenu = () => {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active')
    hamburgerButton[0].classList.add('hide-icon')
    hamburgerButton[1].classList.remove('hide-icon')
    container.classList.remove('opaco')
  } else {
    menu.classList.add('is-active')
    hamburgerButton[1].classList.add('hide-icon')
    hamburgerButton[0].classList.remove('hide-icon')
    container.classList.add('opaco')
  }
}

hamburgerButton.forEach(element => {
  element.addEventListener('click', handleClick)
});
menuItemList.forEach(element => {
  element.addEventListener('click', toggleMenu)
});