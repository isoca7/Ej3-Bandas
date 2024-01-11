interface Grupo {
  nombre: string
  año: number
  activo: boolean
  genero_musical: string
}

const beatles = {
  nombre: 'The Beatles',
  año: 1960,
  activo: true,
  genero_musical: '🎵 Pop Rock',
}

const queen = {
  nombre: 'Queen',
  año: 1970,
  activo: false,
  genero_musical: '🎸Rock',
}

const acdc = {
  nombre: 'AC DC',
  año: 1973,
  activo: true,
  genero_musical: '🤘 Hard Rock',
}
const beethoven = {
  nombre: 'Ludwig van Beethoven',
  año: 1770,
  activo: false,
  genero_musical: '🎼 Clásica',
}
const rolling = {
  nombre: 'The Rolling Stones ',
  año: 1962,
  activo: true,
  genero_musical: '🎸Rock',
}

function imprimirGrupo(grupo : Grupo) {
  const estiloTitulo = 'color:green; font-weight:bold;'
  console.log(`%c${grupo.nombre}`, estiloTitulo)
  console.log(grupo.año, grupo.activo, grupo.genero_musical)
}

imprimirGrupo(beatles)
imprimirGrupo(queen)
imprimirGrupo(acdc)
imprimirGrupo(beethoven)
imprimirGrupo(rolling)
