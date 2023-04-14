// Matriz vacía para almacenar los contactos
let listaDeContactos = [];

// Función para agregar contactos a la lista
function aggContactos(nombre, telefono, email) {
  let contactos = {
    nombre: nombre,
    telefono: telefono,
    email: email,
  };
  listaDeContactos.push(contactos);
}
// Agg los contactos
aggContactos("Jose Lopez", 1234, "jose@gmail");
aggContactos("Maria Quintero", 456, "maria@gmail");
aggContactos("Mario Acuña", 789, "mario@gmail");


console.log(listaDeContactos);

// Eliminar un contacto de la lista por su nombre
function eliminarContacto(nombreCompleto) {
    for (let i = 0; i < listaDeContactos.length; i++) {
      if (listaDeContactos[i].nombre === nombreCompleto || listaDeContactos[i].nombre === nombreCompleto) {
        listaDeContactos.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  // Escribir el nombre completo quese va a eliminar
  eliminarContacto("Mario Acuña");
  
  
  
  // Mostrar los contactos en la consola
console.log(listaDeContactos);