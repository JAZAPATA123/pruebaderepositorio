
const baseDeDatos = [
	{
		id: 1,
		nombre: 'Desarrollo de página web',
		precio: 500,
		imagen: 'https://th.bing.com/th/id/R.8197f51a7c6dfa66582da327d74bf8e4?rik=SjSkCD%2bs92xQtw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fWorld-Wide-Web-PNG-Image-File-180x180.png&ehk=vNZdccd6BnOthUxUOHnLzy4kzkzZNXUmWQUb58N3shI%3d&risl=&pid=ImgRaw&r=0',
        estilo: 'producto1'
	},
	{
		id: 2,
		nombre: 'Diseño gráfico',
		precio: 300,
		imagen: 'https://th.bing.com/th/id/R.f9ff167cc78340de32c39460511c1399?rik=vW6yoCgfMhnQnQ&riu=http%3a%2f%2fwww.icone-png.com%2fpng%2f6%2f6408.png&ehk=POE4wcZMOsXacuwBRrefo%2fN4IrXsNZ7N2aeGrUA1KmE%3d&risl=&pid=ImgRaw&r=0',
        estilo: 'producto2'

	},
	{
		id: 3,
		nombre: 'Desarrollo de aplicación móvil',
		precio: 800,
		imagen: 'https://5.imimg.com/data5/IQ/NS/MY-1937462/mobile-app-development-500x500.png',
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
