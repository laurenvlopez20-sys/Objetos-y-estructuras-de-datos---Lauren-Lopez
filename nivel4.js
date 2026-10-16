// NIVEL 4 - SET

const catalogo = [
  { titulo: "Orbita",   artista: "Lumen",       genero: "indie",   minutos: 3.4 },
  { titulo: "Nocturno", artista: "Lumen",       genero: "ambient", minutos: 5.1 },
  { titulo: "Cumbre",   artista: "Rio Seco",    genero: "indie",   minutos: 2.8 },
  { titulo: "Deriva",   artista: "Lumen",       genero: "indie",   minutos: 4.2 },
  { titulo: "Faro",     artista: "Mar Abierto", genero: "ambient", minutos: 6.0 }
];

// ----- Ejercicio 1 -----
const invitados = new Set(["ana", "beto"]);
console.log(invitados.size); // 2

invitados.add("caro");
console.log(invitados.size); // 3
invitados.add("ana");
console.log(invitados.size); // 3, "ana" ya estaba y el Set no repite

console.log(invitados.has("beto")); // true
console.log(invitados.has("Beto")); // false
// Son distintas porque la mayúscula cuenta: "beto" y "Beto" son textos diferentes.

console.log(invitados.delete("beto")); // true
console.log(invitados.delete("beto")); // false, ya no estaba

// ----- Ejercicio 2 -----
const artistas = catalogo.map(cancion => cancion.artista);
const unicos = [...new Set(artistas)];
console.log(artistas.length, unicos.length); // 5 y 3
console.log(unicos);

const generos = [...new Set(catalogo.map(cancion => cancion.genero))];
console.log("Géneros distintos: " + generos.length); // 2

const ordenados = [...unicos].sort();
console.log(ordenados);

const trampa = new Set();
trampa.add({ a: 1 });
trampa.add({ a: 1 });
console.log(trampa.size); // 2
// Sale 2 porque aunque se ven iguales, JavaScript los toma como dos objetos distintos.

// ----- Ejercicio 3 -----
const lunes = new Set(["ana", "beto", "caro", "dani", "emi", "fede"]);
const miercoles = new Set(["ana", "caro", "dani", "gina", "hugo"]);
const viernes = new Set(["caro", "dani", "emi", "gina", "ivan"]);

const todos = lunes.union(miercoles).union(viernes);
console.log("Personas distintas: " + todos.size);

const tresDias = lunes.intersection(miercoles).intersection(viernes);
console.log("Los tres días:", [...tresDias]);
// El orden no cambia el resultado porque siempre quedan solo los que están en los tres.

const nuncaVolvieron = lunes.difference(miercoles).difference(viernes);
console.log("Lunes y no volvieron:", [...nuncaVolvieron]);

const unoSolo = lunes.symmetricDifference(viernes);
console.log("Lunes o viernes pero no los dos:", [...unoSolo]);

console.log("Miércoles y viernes disjuntos:", miercoles.isDisjointFrom(viernes));
// false, porque tienen personas en común (caro, dani y gina)
