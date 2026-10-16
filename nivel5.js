// NIVEL 5 - DESESTRUCTURAR

const catalogo = [
  { titulo: "Orbita",   artista: "Lumen",       genero: "indie",   minutos: 3.4 },
  { titulo: "Nocturno", artista: "Lumen",       genero: "ambient", minutos: 5.1 },
  { titulo: "Cumbre",   artista: "Rio Seco",    genero: "indie",   minutos: 2.8 },
  { titulo: "Deriva",   artista: "Lumen",       genero: "indie",   minutos: 4.2 },
  { titulo: "Faro",     artista: "Mar Abierto", genero: "ambient", minutos: 6.0 }
];

const reproducciones = new Map();
reproducciones.set("Orbita", 1240);
reproducciones.set("Nocturno", 870);
reproducciones.set("Cumbre", 1510);
reproducciones.set("Deriva", 430);
reproducciones.set("Faro", 95);

// ----- Ejercicio 1 -----
const c = {
  titulo: "Faro",
  artista: { nombre: "Mar Abierto", pais: "Chile" },
  minutos: 6
};

const { titulo, minutos } = c;
console.log(titulo, minutos);

const { minutos: duracion } = c;
console.log(duracion);
// Hay que renombrar cuando ya existe una variable con ese nombre
// (aquí "minutos" ya estaba) porque no se puede repetir.

const { artista: { pais } } = c;
console.log(pais);
try {
  console.log(artista);
} catch (error) {
  console.log(error.message); // artista is not defined
}
// Da error porque con la desestructuración anidada solo se crea "pais",
// no se crea "artista".

const { genero = "desconocido" } = c;
console.log(genero); // desconocido

c.genero = null;
const { genero: genero2 = "desconocido" } = c;
console.log(genero2); // null
// No se usó el repuesto porque solo se usa cuando el valor es undefined,
// y null es un valor.

// ----- Ejercicio 2 -----
const resumen = catalogo.map(({ titulo, artista }) => titulo + " — " + artista);
console.log(resumen);

const [primera, segunda] = resumen;
console.log(primera);
console.log(segunda);
// Van corchetes porque es un arreglo y se saca por posición.
// Las llaves se usan para objetos, que se sacan por nombre.

const pequenos = catalogo.map(({ titulo, minutos }) => ({ titulo, minutos }));
console.log(pequenos);

for (const [titulo, veces] of reproducciones) {
  console.log(titulo + ": " + veces);
}

// ----- Ejercicio 3 -----
function ficha({ titulo, artista, genero = "sin clasificar" }) {
  return titulo + " - " + artista + " [" + genero + "]";
}

const lista = catalogo.map(ficha);
console.log(lista);

const catalogoPlus = catalogo.map(cancion => ({
  ...cancion,
  reproducciones: reproducciones.get(cancion.titulo) ?? 0
}));

// el original no cambió
console.log(Object.keys(catalogo[0]));
console.log(Object.keys(catalogoPlus[0]));

const generos = new Set(catalogoPlus.map(cancion => cancion.genero));
for (const g of generos) {
  const cuantas = catalogoPlus.filter(cancion => cancion.genero === g);
  console.log(g + ": " + cuantas.length);
}

const [destacada, ...otras] = catalogoPlus;
console.log(destacada);
console.log(otras);
