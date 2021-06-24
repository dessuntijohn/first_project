/* ~~ Abre e fecha o menu quando clicar no icone ~~ */
const nav = document.querrySelector('#header nav')
const toggle = document.querrySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListening('click', function () {
    nav.classList.toggle('show')
  })
}
