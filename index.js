
let str2 = "h2";
let elem2 =
document.createElement(str2);
elem2.innerText ="POSTRES";
document.body.appendChild(elem2);



const postres = [
    {
        id: 1,
        nombre: 'Bizcochos de almendra VEGANO',
        precio: 1200,
        imagen: '../assets.img/bizcocho-vegano-xl-668x400x80xX.jpg'
    },
    {
        id: 2,
        nombre: 'Tarta de cous-cous y arándanos VEGANO',
        precio: 2300,
        imagen: '../assets.img/0141-tarta-cous-cous-arandanos-xl-668x400x80xX.jpg'
    },
    {
        id: 3,
        nombre: 'Barras ceto-crujientes con chocolate VEGANO',
        precio: 2000,
        imagen: '../assets.img/barritas-crujientes-de-chocolate-keto-02.jpg'
    },
    {
        id: 4,
        nombre: 'Tarta de zanahoria y coco VEGETARIANO',
        precio: 1800,
        imagen: '../assets.img/34d81b581992-tarta-de-zanahoria-y-coco.jpg'
    },
	{
        id: 5,
        nombre: 'Clafoutis VEGETARIANO',
        precio: 2500,
        imagen: '../assets.img/4bd91d3b08e2-clafoutis.jpg'
    },
	{
        id: 6,
        nombre: 'Trufas de cava y frambuesa OMNÍVERO',
        precio: 800,
        imagen: '../assets.img/bizcocho-vegano-xl-668x400x80xX.jpg'
    },
	{
        id: 7,
        nombre: 'Tarta de queso con arándanos OMNÍVERO',
        precio: 1700,
        imagen: '../assets.img/1366_2000.jpg'
    },
	{
        id: 8,
        nombre: 'Mousse de limón OMNÍVERO',
        precio: 1500,
        imagen: '../assets.img/Mousse-de-limón-con-salsa-de-frutos-rojos.webp'
    }
];
localStorage.setItem("postres", JSON.stringify(postres));


let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carritoStorage"));
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


// carro de compra NO TERMINADO
// Funciones


if(carritoStorage){
    carrito = carritoStorage;
}


function entregarProductos() {
	let postres = JSON.parse(localStorage.getItem("postres"));
    postres.forEach((info) => {
    
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
  
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
  
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
   
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
    
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '✚';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', agregarProductoAlCarrito);
      
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Añado producto
 */
function agregarProductoAlCarrito(evento) {
	let postres = JSON.parse(localStorage.getItem("postres"));

    carrito.push(evento.target.getAttribute('marcador'))

    entregarCarrito();
	guardarCarritoStorage();

}


function entregarCarrito() {

    DOMcarrito.textContent = '';
  
    const carritoSinDuplicados = [...new Set(carrito)];
 
    carritoSinDuplicados.forEach((item) => {

        const miItem = postres.filter((itempostres) => {
      
            return itempostres.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {

            return itemId === item ? total += 1 : total;
        }, 0);

        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // para borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = '╳';
        miBoton.style.marginLeft = '2rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });

    DOMtotal.textContent = calcularTotal();
}

/**
 *  para borrar 
 */
function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    entregarCarrito();
	guardarCarritoStorage();
}


function calcularTotal() {

    return carrito.reduce((total, item) => {

        const miItem =postres.filter((itempostres) => {
            return itempostres.id === parseInt(item);
        });
        // para el total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {

    carrito = [];

    entregarCarrito();
	guardarCarritoStorage();
}


DOMbotonVaciar.addEventListener('click', vaciarCarrito);


entregarProductos();
entregarCarrito();
let guardarCarritoStorage = () => {
    localStorage.setItem("carritoStorage", JSON.stringify(carrito));
}
