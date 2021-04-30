const btn = document.querySelector(`[data-btn-menu]`)

btn.addEventListener('click', () => {
  const img = document.querySelector('.fa-bars')
  img.classList.toggle('fa-times')
})

btn.addEventListener('click', abreMenu)

function abreMenu() {
  const menu = document.querySelector(`[data-hero-menu]`)
  menu.classList.toggle('nav__menu')
}