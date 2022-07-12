const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburger = document.querySelector('.hamburger')
const cross = document.querySelector('.cross')

const links = document.querySelectorAll('.hamburger-menu li')

console.log(hamburgerMenu, cross, links)

hamburger.addEventListener('click', () => {
  console.log('hello')
  // hamburger.style.display = "none"
  hamburgerMenu.classList.remove('hidden')
  cross.classList.remove('hidden')
})

cross.addEventListener('click', () => {
  hamburgerMenu.classList.add('hidden')
  cross.classList.add('hidden')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.add('hidden')
    cross.classList.add('hidden')
  })
})