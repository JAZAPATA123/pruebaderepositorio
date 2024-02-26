
const baseDeDatos = [
	{
		id: 1,
		nombre: 'Desarrollo de página web',
		precio: 500,
		imagen: 'producto1.jpg',
        estilo: 'producto1'
	},
	{
		id: 2,
		nombre: 'Diseño gráfico',
		precio: 300,
		imagen: 'producto2.jpg',
        estilo: 'producto2'

	},
	{
		id: 3,
		nombre: 'Desarrollo de aplicación móvil',
		precio: 800,
		imagen: 'producto3.jpg',
        estilo: 'producto3'

	}
];


const items = document.getElementById('items');
const carrito = document.getElementById('carrito');
const total = document.getElementById('total');
const botonVaciar = document.getElementById('boton-vaciar');

function renderizarProductos() {
	baseDeDatos.forEach(producto => {
		const div = document.createElement('div');
		div.classList.add('producto');
		div.innerHTML = `
			<img src="${producto.imagen}" alt="${producto.nombre}">
			<h3>${producto.nombre}</h3>
			<p>$${producto.precio}</p>
			<button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
		`;
		items.appendChild(div);
	});
}

function agregarAlCarrito(id) {
	const producto = baseDeDatos.find(producto => producto.id === id);
	const listaProductos = document.createElement('li');
	listaProductos.textContent = `${producto.nombre} - $${producto.precio}`;
	carrito.appendChild(listaProductos);
	actualizarTotal(producto.precio);
}

function actualizarTotal(precio) {
	const totalActual = parseInt(total.textContent);
	total.textContent = totalActual + precio;
}

function vaciarCarrito() {
	while (carrito.firstChild) {
		carrito.removeChild(carrito.firstChild);
	}
	total.textContent = 0;
}

botonVaciar.addEventListener('click', vaciarCarrito);
renderizarProductos();
