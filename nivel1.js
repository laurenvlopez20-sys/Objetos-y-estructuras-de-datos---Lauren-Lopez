// NIVEL 1 - OBJETOS

// ----- Ejercicio 1 -----
const pista = {
  titulo: "Orbita",
  artista: "Lumen",
  genero: "indie",
  anio: 2024,
  explicita: false
};

console.log(pista.titulo);   // con punto
console.log(pista["anio"]);  // con corchetes

const clave = "genero";
console.log(pista[clave]);   // la clave está en una variable

console.log(pista.duracion);
// Sale undefined. No es error porque esa propiedad no existe,
// JavaScript solo dice undefined y sigue.

// ----- Ejercicio 2 -----
const pista2 = {
  titulo: "Orbita",
  artista: {
    nombre: "Lumen",
    pais: "Colombia"
  }
};

console.log(pista2.artista.nombre);

pista2.artista.seguidores = 12400;
console.log(pista2.artista);

// Esto da error, por eso lo puse dentro de try/catch para que el programa siga
try {
  console.log(pista2.sello.nombre);
} catch (error) {
  console.log(error.message);
  // Error: Cannot read properties of undefined (reading 'nombre')
}

console.log(pista2.sello?.nombre);
// Con ?. no da error y sale undefined. Sin ?. da error porque "sello"
// no existe y no se le puede pedir "nombre" a algo que no existe.

// ----- Ejercicio 3 -----
const pista3 = {
  titulo: "Orbita",
  artista: { nombre: "Lumen", pais: "Colombia" },
  resumen() {
    return this.titulo + " · " + this.artista.nombre + " (" + this.artista.pais + ")";
  }
};

console.log(pista3.resumen());
console.log(pista3.resumen); // sin paréntesis sale [Function: resumen], no se ejecuta

console.log(Object.keys(pista3));

for (const par of Object.entries(pista3)) {
  console.log(par[0] + ": " + par[1]);
}
// Object.keys no muestra nombre ni pais porque están dentro de artista
// y solo muestra las propiedades del primer nivel.
