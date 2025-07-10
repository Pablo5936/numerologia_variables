const NOMBRE = document.getElementById('nombre')
const APELLIDOS = document.getElementById('apellidos')
const FECHA_NACIMIENTO = document.getElementById('fecha-nacimiento')
const RESULTADO = document.getElementById('resultado')

const valoresLetras = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  Ñ: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8,
  Ç: 3
}
const vocales = ['A', 'E', 'I', 'O', 'U', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü']

function limpiarFecha(numero) {
  let numeros = '0123456789'
  let fechaNumero = ''
  for (let i = 0; i < numero.length; i++) {
    if (numeros.includes(numero[i])) {
      fechaNumero += numero[i]
    }
  }
  fechaNumero = parseInt(fechaNumero)
  return fechaNumero
}

function reducirNumero(numero) {
  let numeroReducido = numero
  const maestros = [11, 22]
  while (numeroReducido > 9 && !maestros.includes(numeroReducido)) {
    let suma = 0
    let digitos = numeroReducido.toString().split('')
    for (let i = 0; i < digitos.length; i++) {
      suma += parseInt(digitos[i])
    }
    numeroReducido = suma
  }
  return numeroReducido
}

function calcular() {
  const seleccion = document.getElementById('seleccion').value
  document.getElementById('resultado').innerHTML = ''

  if (seleccion === '2') {
    calcularNumeroPersonal()
  } else if (seleccion === '3') {
    calcularNumeroDestino()
  } else if (seleccion === '4') {
    calcularNumeroNombre()
  } else if (seleccion === '5') {
    calcularNumeroAlma()
  } else if (seleccion === '6') {
    calcularExpresionAlma()
  } else if (seleccion === '7') {
    calcularProyectoSentido()
  } else if (seleccion === '8') {
    calcularAnioPersonal()
  } else if (seleccion === '9') {
    calcularMesPersonal()
  }
}

function calcularNumeroPersonal() {
  const fechaInput = document.getElementById('fecha-nacimiento')
  const resultado = document.getElementById('resultado')
  resultado.innerHTML = ''

  if (!fechaInput || !fechaInput.value) {
    resultado.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }
  const fechaNacimiento = new Date(fechaInput.value)
  if (isNaN(fechaNacimiento)) {
    resultado.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }
  let diaNacimiento = fechaNacimiento.getDate()
  let numeroPersonal = reducirNumero(diaNacimiento)
  resultado.innerHTML = `Tu número personal es: ${numeroPersonal}`
}

function calcularNumeroDestino() {
  const fechaInput = document.getElementById('fecha-nacimiento')
  const resultado = document.getElementById('resultado')
  const fechaTexto = fechaInput.value.trim()

  if (!fechaTexto) {
    resultado.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }

  // Limpiar la fecha usando la función limpiarFecha
  const fechaNumerica = limpiarFecha(fechaTexto)

  // Reducir el número limpio
  const numero = reducirNumero(fechaNumerica)

  // Mostrar el resultado
  resultado.innerHTML = `Tu número de destino es: ${numero}`
}

function calcularNumeroNombre() {
  const nombreInput = document.getElementById('nombre')
  const resultado = document.getElementById('resultado')
  const nombre = nombreInput.value.trim().toUpperCase()

  if (!nombre) {
    resultado.innerHTML = 'Por favor, ingresa tu nombre completo.'
    return
  }

  let suma = 0
  for (let i = 0; i < nombre.length; i++) {
    const letra = nombre[i]
    if (valoresLetras[letra]) {
      suma += valoresLetras[letra]
    }
  }

  // Reduce la suma si es necesario
  const numeroNombre = reducirNumero(suma)

  resultado.innerHTML = `Tu número del nombre es: ${numeroNombre}`
}

function calcularNumeroAlma() {
  const nombreInput = document.getElementById('nombre')
  const apellidosInput = document.getElementById('apellidos')
  const resultado = document.getElementById('resultado')

  const nombre = nombreInput.value.trim().toUpperCase()
  const apellidos = apellidosInput.value.trim().toUpperCase()

  if (!nombre || !apellidos) {
    resultado.innerHTML =
      'Por favor, ingresa tus nombres y apellidos completos.'
    return
  }

  // Solo se consideran las vocales
  const vocales = ['A', 'E', 'I', 'O', 'U', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü']
  const valoresLetras = {
    A: 1,
    E: 5,
    I: 9,
    O: 6,
    U: 3,
    Á: 1,
    É: 5,
    Í: 9,
    Ó: 6,
    Ú: 3,
    Ü: 3
    // Puedes agregar aquí otras vocales acentuadas si lo deseas
  }

  function sumarVocales(texto) {
    let suma = 0
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i]
      if (vocales.includes(letra) && valoresLetras[letra]) {
        suma += valoresLetras[letra]
      }
    }
    return suma
  }

  const sumaVocalesNombre = sumarVocales(nombre)
  const sumaVocalesApellidos = sumarVocales(apellidos)

  const numeroAlma = reducirNumero(sumaVocalesNombre + sumaVocalesApellidos)

  resultado.innerHTML = `Tu número del alma es: ${numeroAlma}`
}

function calcularExpresionAlma() {
  const nombreInput = document.getElementById('nombre')
  const apellidosInput = document.getElementById('apellidos')
  const resultado = document.getElementById('resultado')

  const nombre = nombreInput.value.trim().toUpperCase()
  const apellidos = apellidosInput.value.trim().toUpperCase()

  if (!nombre || !apellidos) {
    resultado.innerHTML =
      'Por favor, ingresa tus nombres y apellidos completos.'
    return
  }

  function sumarConsonantes(texto) {
    let suma = 0
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i]
      // Solo suma si es letra, está en valoresLetras y NO es vocal
      if (valoresLetras[letra] && !vocales.includes(letra)) {
        suma += valoresLetras[letra]
      }
    }
    return suma
  }

  const sumaConsonantesNombre = sumarConsonantes(nombre)
  const sumaConsonantesApellidos = sumarConsonantes(apellidos)

  const expresionAlma = reducirNumero(
    sumaConsonantesNombre + sumaConsonantesApellidos
  )

  resultado.innerHTML = `Tu expresión del alma es: ${expresionAlma}`
}

function calcularProyectoSentido() {
  const nombreInput = document.getElementById('nombre')
  const resultado = document.getElementById('resultado')
  const nombre = nombreInput.value.trim().toUpperCase()

  if (!nombre) {
    resultado.innerHTML = 'Por favor, ingresa tu nombre.'
    return
  }

  let suma = 0
  for (let i = 0; i < nombre.length; i++) {
    const letra = nombre[i]
    if (vocales.includes(letra) && valoresLetras[letra]) {
      suma += valoresLetras[letra]
    }
  }

  const proyectoSentido = reducirNumero(suma)

  resultado.innerHTML = `Tu número de Proyecto Sentido es: ${proyectoSentido}`
}

function calcularAnioPersonal() {
  const fechaInput = document.getElementById('fecha-nacimiento')
  const resultado = document.getElementById('resultado')
  resultado.innerHTML = ''

  if (!fechaInput || !fechaInput.value) {
    resultado.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }

  const fechaNacimiento = new Date(fechaInput.value)
  if (isNaN(fechaNacimiento)) {
    resultado.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }

  // Obtener el año calendario actual
  const anio = new Date().getFullYear()

  // Obtener día y mes de nacimiento
  const dia = fechaNacimiento.getDate()
  const mes = fechaNacimiento.getMonth() + 1 // getMonth() es base 0

  // Sumar los componentes
  const suma = anio + dia + mes

  // Reducir el número
  const anioPersonal = reducirNumero(suma)

  resultado.innerHTML = `Tu Año Personal es: ${anioPersonal}`
}

function calcularMesPersonal() {
  const fechaInput = document.getElementById('fecha-nacimiento')
  const resultado = document.getElementById('resultado')
  resultado.innerHTML = ''

  if (!fechaInput || !fechaInput.value) {
    resultado.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }

  const fechaNacimiento = new Date(fechaInput.value)
  if (isNaN(fechaNacimiento)) {
    resultado.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }

  // Obtener año calendario actual y mes en curso
  const anio = new Date().getFullYear()
  const mesEnCurso = new Date().getMonth() + 1 // getMonth() es base 0

  // Día y mes de nacimiento
  const dia = fechaNacimiento.getDate()
  const mesNacimiento = fechaNacimiento.getMonth() + 1

  // Calcular Año Personal
  const sumaAnioPersonal = anio + dia + mesNacimiento
  const anioPersonalReducido = reducirNumero(sumaAnioPersonal)

  // Mes Personal = Año Personal + mes en curso
  const sumaMesPersonal = anioPersonalReducido + mesEnCurso
  const mesPersonalReducido = reducirNumero(sumaMesPersonal)

  resultado.innerHTML = `Tu Mes Personal es: ${mesPersonalReducido}`
}

function mostrar() {
  const seleccion = document.getElementById('seleccion').value
  const resultado = document.getElementById('resultado')
  const anio_actual = document.getElementById('anio_actual')

  resultado.innerHTML = ''

  if (seleccion === '1') {
    const anio = new Date().getFullYear()
    anio_actual.innerHTML = `<h3>Año actual: ${anio}</h3>`
  }
  // No borres el año actual si cambia a otra opción
}

function interpretar() {
  const seleccion = document.getElementById('seleccion').value
  const resultado = document.getElementById('resultado').innerText

  // No se interpreta el año calendario (opción 1)
  if (seleccion === '1') {
    alert('El año calendario solo se muestra en esta página.')
    return
  }

  // Extrae el número del resultado mostrado
  // Busca el primer número en el resultado (soporta valores maestros)
  const matches = resultado.match(/\d+/g)
  if (!matches) {
    alert('Primero debes calcular tu número para ver la interpretación.')
    return
  }
  // Usa el primer número encontrado
  const numero = parseInt(matches[0], 10)

  // Determina la página a abrir según la selección
  let pagina = ''
  switch (seleccion) {
    case '2':
      pagina = 'numeroPersonal.html'
      break
    case '3':
      pagina = 'numeroDestino.html'
      break
    case '4':
      pagina = 'numeroNombre.html'
      break
    case '5':
      pagina = 'numeroAlma.html'
      break
    case '6':
      pagina = 'expresionAlma.html'
      break
    case '7':
      pagina = 'proyectoSentido.html'
      break
    case '8':
      pagina = 'anioPersonal.html'
      break
    case '9':
      pagina = 'mesPersonal.html'
      break
    default:
      pagina = ''
  }

  if (pagina && !isNaN(numero)) {
    const tema = document.getElementById("theme").value;
    let url = `${pagina}?valor=${numero}`;
    if (tema !== 'inicio') {
      url += `&tema=${tema}`;
    }
    window.open(url, '_blank')
  } else {
    alert('Primero debes calcular tu número para ver la interpretación.')
  }
}
