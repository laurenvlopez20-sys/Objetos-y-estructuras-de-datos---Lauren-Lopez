// NIVEL 2 - ARRAYS DE OBJETOS

const catalogo = [
  { titulo: "Orbita",   artista: "Lumen",       genero: "indie",   minutos: 3.4 },
  { titulo: "Nocturno", artista: "Lumen",       genero: "ambient", minutos: 5.1 },
  { titulo: "Cumbre",   artista: "Rio Seco",    genero: "indie",   minutos: 2.8 },
  { titulo: "Deriva",   artista: "Lumen",       genero: "indie",   minutos: 4.2 },
  { titulo: "Faro",     artista: "Mar Abierto", genero: "ambient", minutos: 6.0 }
];

// ----- Ejercicio 1 -----
console.log(catalogo[3].genero); // posición 3 = Deriva

const faro = catalogo.find(cancion => cancion.titulo === "Faro");
console.log(faro.artista);

const largas = catalogo.filter(cancion => cancion.minutos > 4);
console.log(largas.length);

const artistas = catalogo.map(cancion => cancion.artista);
console.log(artistas);
// El repetido es Lumen

// ----- Ejercicio 2 -----
const total = catalogo.reduce((suma, cancion) => suma + cancion.minutos, 0);

const masLarga = catalogo.reduce((mayor, cancion) => {
  if (cancion.minutos > mayor.minutos) {
    return cancion;
  } else {
    return mayor;
  }
}, catalogo[0]);

const titulos = catalogo.map(cancion => cancion.titulo.toUpperCase());

const ambient = catalogo.filter(cancion => cancion.genero === "ambient");

console.log("Total minutos: " + total.toFixed(1)); // 21.5
console.log("Más larga: " + masLarga.titulo);
console.log(titulos);
console.log("Ambient: " + ambient.length + ", la primera es " + ambient[0]?.titulo);

// ----- Ejercicio 3 -----
// agrego reproducciones inventadas
catalogo[0].reproducciones = 1240;
catalogo[1].reproducciones = 870;
catalogo[2].reproducciones = 1510;
catalogo[3].reproducciones = 430;
catalogo[4].reproducciones = 95;

// ordeno una copia de mayor a menor
const ranking = [...catalogo].sort((a, b) => b.reproducciones - a.reproducciones);

// top 3
const top = ranking.slice(0, 3);
for (let i = 0; i < top.length; i++) {
  console.log((i + 1) + ". " + top[i].titulo + " — " + top[i].reproducciones);
}

// promedio
const suma = catalogo.reduce((s, cancion) => s + cancion.reproducciones, 0);
console.log("Promedio: " + Math.round(suma / catalogo.length));

// agrupar por artista
const porArtista = Object.groupBy(catalogo, cancion => cancion.artista);
for (const par of Object.entries(porArtista)) {
  console.log(par[0] + ": " + par[1].length + " canciones");
}

// el catálogo original sigue igual porque ordené una copia
console.log(catalogo.map(cancion => cancion.titulo));
