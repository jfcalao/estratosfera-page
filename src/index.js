const menu = document.querySelector(".menu")
const hamburgerButton= document.querySelector('.burger-button')
const container= document.querySelector('.container')
const menuItemList= document.querySelectorAll('.menu a')
const handleClick=()=>{
  toggleMenu()
}
const toggleMenu= ()=>{
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active')
    container.classList.remove('opaco')
  }else{
    menu.classList.add('is-active')
    container.classList.add('opaco')
  }
}
hamburgerButton.addEventListener('click', handleClick)
menuItemList.forEach(element => {
  element.addEventListener('click', toggleMenu)
});