// Sistema de la LIBRERIA LunaBelle

const libros = [ 
    { 
        titulo: "Harry Potter y la piedra filosofal", 
        autor: "J.K. Rowling", 
        genero: "Fantasía", 
    }, 
        { 
            titulo: "Bridgerton: el vizconde que me amó", 
            autor: "Julia Quinn", 
            genero: "Romance", 
    }, 
        { 
            titulo: "Saga Off Campus", 
            autor: "Elle Kennedy", 
            genero: "Romance", 
    },
       {
        titulo: "Crepúsculo",
        autor: "Stephenie Meyer",
        genero: "Fantasía",
    },

      {
        titulo: "Las cronicas de narnia",
        autor: "C.S.Lewis",
        genero: "Fantasía",
      },

     ]; 
     console.log("Lista de libros disponibles en la librería LunaBelle:"); 
     console.log(libros);

     // 1. PUSH 
    // Agregar un nuevo libro 

    libros.push({ 
        titulo: "Bridgerton: te doy mi corazón", 
        autor: "Julia Quinn", 
        genero: "Romance", 
    });
    console.log("Agregando un nuevo libro a la lista:"); 
    console.log(libros);

    // 2. POP 
    //Eliminar un libro 

    let libroEliminado = libros.pop(); 
    console.log("Eliminando el último libro de la lista:"); 
    console.log(libroEliminado);

  // 3. UNSHIFT 
 // Agregar un libro 

 libros.unshift({ 
    titulo: "Bridgerton: te doy mi corazón",
    autor: "Julia Quinn", 
    genero: "Romance", 
    }); 

    console.log('Agregando un libro al inicio de la lista: "Bridgerton: te doy mi corazón"'); 
    console.log(libros);

    // 4. SHIFT 
    //Eliminar un libro 

    let libroEliminadoInicio = libros.shift(); 
    console.log("Eliminando el primer libro de la lista:"); 
    console.log(libroEliminadoInicio);

 // 5. ACCESO POR ÍNDICE 
 // Acceder a un libro específico por su índice 
 
  console.log("Accediendo a un libro específico por su índice:");
  console.log(libros[1]);

  // 6. SPLICE
  // Cambiar un libro en especifico por indice  
  
  libros.splice(1, 1, {
    titulo: "Bridgerton: te doy mi corazón",
    autor: "Julia Quinn",
    genero: "Romance",
});

console.log("Libro actualizado:");
console.log(libros[1]);
   

// 7. FOR...OF 
// Recorrer la lista de libros y mostrar sus títulos

function mostrarLibros(){

console.log("Recorriendo la lista de libros:"); 

for (const libro of libros) { 
    console.log(libro.titulo); } 
}
 mostrarLibros();

// Crear una lista solamente con los títulos 
const titulos = []; 
for (const libro of libros) { 
    titulos.push(libro.titulo);
}

// 8. INCLUDES 
// Verificar si un libro específico está en la lista mediante su título 

 let tituloABuscar = "Saga Off Campus"; 
 console.log(`Verificando si el libro "${tituloABuscar}" está en la lista:`); 
 const libroExiste = titulos.includes(tituloABuscar); 
 console.log( libroExiste 
    ? "El libro está en la lista." 
    : "El libro no está en la lista." 
);

// 9. INDEXOF 
// Obtener el índice de un libro específico en la lista mediante su título 

 let tituloABuscarIndex = "Saga Off Campus"; 
 console.log( `Obteniendo el índice del libro "${tituloABuscarIndex}" en la lista:`
); 
 
 const indiceLibro = titulos.indexOf(tituloABuscarIndex); 
 console.log(indiceLibro);


 // 10. INDEXOF CON LIBRO QUE NO EXISTE 
 // Verificar que un libro que no existe en la lista devuelve -1 
   let tituloNoExistente = "Twisted Love"; 
   console.log( 
    `Buscando el índice del libro "${tituloNoExistente}" en la lista:`
 ); 
 const indiceNoExistente = titulos.indexOf(tituloNoExistente); 
 console.log(indiceNoExistente);











  


























