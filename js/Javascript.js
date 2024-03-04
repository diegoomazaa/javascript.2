function agregarAlCarrito(nombre, descripcion) {
  // Crear un objeto producto
  const producto = { nombre: nombre, descripcion: descripcion };

  let carrito = localStorage.getItem("carrito");
  if (!carrito) {
    carrito = [];
  } else {
    carrito = JSON.parse(carrito);
  }

  carrito.push(producto);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mostrar un mensaje de éxito
  mostrarMensaje("Producto añadido al carrito");
}

function mostrarMensaje(mensaje) {
  const mensajeElemento = document.createElement("div");
  mensajeElemento.textContent = mensaje;

  document.body.appendChild(mensajeElemento);

  setTimeout(function () {
    mensajeElemento.remove();
  }, 3000);
}

// Event listener para los botones de añadir al carrito
document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".btn-primary");
  botones.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
      event.preventDefault();

      const producto = event.target.closest(".card");
      const nombre = producto.querySelector(".card-title").textContent;
      const descripcion = producto.querySelector(".card-text").textContent;

      agregarAlCarrito(nombre, descripcion);
    });
  });
});

const productos = [
  { nombre: "Funda Silicona", descripcion: "Funda Normales de colores" },
  { nombre: "Funda Silicona", descripcion: "Funda Normales de colores" },
  {
    nombre: "Fundas de Cuero",
    descripcion: "Funda 100% de Cuero con diferentes colores",
  },
];

const productosSilicona = productos.filter((producto) =>
  producto.nombre.includes("Silicona")
);
console.log(productosSilicona);

// Cargar datos desde un JSON local
fetch("productos.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Aquí puedes usar los datos cargados para mostrar productos en el DOM, etc.
  })
  .catch((error) => console.error("Error al cargar datos desde JSON:", error));
