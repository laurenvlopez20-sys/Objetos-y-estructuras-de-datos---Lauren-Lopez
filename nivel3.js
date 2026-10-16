// NIVEL 3 - MAP

const catalogo = [
  { titulo: "Orbita",   artista: "Lumen",       genero: "indie",   minutos: 3.4 },
  { titulo: "Nocturno", artista: "Lumen",       genero: "ambient", minutos: 5.1 },
  { titulo: "Cumbre",   artista: "Rio Seco",    genero: "indie",   minutos: 2.8 },
  { titulo: "Deriva",   artista: "Lumen",       genero: "indie",   minutos: 4.2 },
  { titulo: "Faro",     artista: "Mar Abierto", genero: "ambient", minutos: 6.0 }
];

// ----- Ejercicio 1 -----
const reproducciones = new Map();
reproducciones.set("Orbita", 1240);
reproducciones.set("Nocturno", 870);
reproducciones.set("Cumbre", 1510);

console.log("size antes: " + reproducciones.size);
reproducciones.set("Deriva", 430);
reproducciones.set("Faro", 95);
console.log("size después: " + reproducciones.size);

console.log(reproducciones.has("Cumbre"), reproducciones.has("Nebulosa"));

console.log(reproducciones.get("Nebulosa"));
// Sale undefined. No es error porque el Map devuelve undefined
// cuando la clave no existe.

console.log(reproducciones.delete("Faro")); // true
console.log("size final: " + reproducciones.size);

// ----- Ejercicio 2 -----
const indice = new Map();
for (const cancion of catalogo) {
  indice.set(cancion.titulo, cancion);
}
console.log(indice.size); // 5

console.log(indice.get("Deriva").genero);

const deriva = catalogo.find(cancion => cancion.titulo === "Deriva");
console.log(deriva.genero);
// find revisa canción por canción hasta encontrarla.
// El Map va directo a la clave sin revisar las otras.

console.log(indice.get("Nebulosa")?.genero);

// ----- Ejercicio 3 -----
// Map con las cinco canciones
const rep = new Map();
rep.set("Orbita", 1240);
rep.set("Nocturno", 870);
rep.set("Cumbre", 1510);
rep.set("Deriva", 430);
rep.set("Faro", 95);

function sonar(titulo) {
  const actual = rep.get(titulo) ?? 0; // si no existe, empieza en 0
  rep.set(titulo, actual + 1);
}

// ocho reproducciones
sonar("Orbita");
sonar("Orbita");
sonar("Orbita");
sonar("Faro");
sonar("Faro");
sonar("Cumbre");
sonar("Deriva");
sonar("Nebulosa");
console.log(rep);

// top 3
const ordenado = [...rep].sort((a, b) => b[1] - a[1]);
for (let i = 0; i < 3; i++) {
  console.log((i + 1) + ". " + ordenado[i][0] + " — " + ordenado[i][1]);
}

// cuántas superan 1000
const mas1000 = [...rep].filter(par => par[1] > 1000);
console.log("Más de 1000: " + mas1000.length);

// clave que no es texto
const semanas = new Map();
semanas.set(1, 5200);
semanas.set("1", 80);
console.log(semanas.get(1), semanas.get("1"));
// No son lo mismo: en un Map el número 1 y el texto "1" son claves distintas.
