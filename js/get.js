// Función para obtener parámetros de la URL
function getParam(name) {
  const url = new URL(window.location.href)
  return url.searchParams.get(name)
}

let queryStrings = new URLSearchParams(window.location.search)
let parametrosGet = Object.fromEntries(queryStrings.entries())
console.log(typeof parametrosGet)
console.log(parametrosGet)
if ('tema' in parametrosGet) {
  let tema = parametrosGet.tema
  document.getElementById('tema').setAttribute('href', `./css/${tema}.css`)

  let url = window.location.href
  console.log(url)
  if (!url.includes('index.html')) {
    document
      .getElementById('atras')
      .setAttribute('href', `index.html?tema=${tema}`)
  }
  let select = document.getElementById('theme')
  if (select) {
    select.value = tema
  }
}
