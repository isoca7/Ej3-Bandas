import "./style.css";

const redStyle:string="color:red";
interface Grupo {
    nombre: string
    año: number
    activo: boolean
    genero: string
  }
  
  const grupoA: Grupo = {
    nombre: 'The Beatles',
    año: 1960,
    activo: true,
    genero: '🎵 Pop Rock',
  }
  
  const grupoB: Grupo = {
    nombre: 'Queen',
    año: 1970,
    activo: false,
    genero: '🎸 Rock',
  }
  
  const grupoC: Grupo = {
    nombre: 'AC DC',
    año: 1973,
    activo: true,
    genero: '🤘 Hard Rock',
  }
  
  const grupoD: Grupo = {
    nombre: '%cLudwig van Beethoven',
    año: 1770,
    activo: false,
    genero: '🎼 Clásica'
  }
  console.log(grupoD.nombre, grupoD.año, grupoD.activo, `%c${grupoD.genero}`, "color: #999")
  