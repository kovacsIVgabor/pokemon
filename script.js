function addDiv(text, target) {
  const Elem = document.createElement('div')
  Elem.textContent = text
  target.appendChild(Elem)
  return Elem
}
function addImg(src, alt, target) {
  const Elem = document.createElement('img')
  Elem.src = src
  Elem.alt = alt
  target.appendChild(Elem)
}
var kontener
async function letolt() {
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const response = await fetch(url)
  const data = await response.json()

  kontener = document.querySelector('#container')
  const masikhely = document.querySelector('#masikhely') // <-------------

  for (let i = 0; i < data.results.length; i++) {
    const url_pokemon = data.results[i].url
    const response_pokemon = await fetch(url_pokemon)
    const data_pokemon = await response_pokemon.json()

    let kartya = addDiv('', kontener)
    kartya.classList.add('kartya')
    kartya.style.backgroundImage =
      "linear-gradient(rgb(201 201 201), rgb(247 247 247)), url('" +
      data_pokemon.sprites.front_default +
      "')"
    addImg(data_pokemon.sprites.front_default, data.results[i].name, kartya)
    let name = addDiv(data.results[i].name, kartya)
    name.classList.add('pokemonName')
    kartya.addEventListener('click', function () {
      // <-------------
      if (this.parentElement == kontener) {
        masikhely.appendChild(this)
      } else {
        kontener.appendChild(this)
      }
    })
  }
}
letolt()
