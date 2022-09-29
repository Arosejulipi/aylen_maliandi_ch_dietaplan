// DEJO EL FORMULARIO PORQUE AÚN NO DEFINÍ BIEN SI REALIZAR EL REGISTRO/INICIO  
//(function() {
// 	let formulario = document.getElementsByClassName('.formulario_registro');
  
// 	let validarInputs = function() {
// 	  for (let i = 0; i < elementos.length; i++) {

// 		if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {

// 		  if (elementos[i].value.length == 0) {
// 			console.log('El campo ' + elementos[i].name + ' esta incompleto');
// 			elementos[i].className = elementos[i].className + " error";
// 			return false;
// 		  } else {
// 			elementos[i].className = elementos[i].className.replace(" error", "");
// 		  }
// 		}
// 	  }
  

// 	  if (elementos.pass.value !== elementos.pass2.value) {
// 		elementos.pass.value = "";
// 		elementos.pass2.value = "";
// 		elementos.pass.className = elementos.pass.className + " error";
// 		elementos.pass2.className = elementos.pass2.className + " error";
// 	  } else {
// 		elementos.pass.className = elementos.pass.className.replace(" error", "");
// 		elementos.pass2.className = elementos.pass2.className.replace(" error", "");
// 	  }
  
// 	  return true;
// 	};
  
// 	let validarRadios = function() {
// 	  let opciones = document.getElementsByName('sexo'),
// 		resultado = false;
  
// 	  for (let i = 0; i < elementos.length; i++) {
// 		if (elementos[i].type == "radio" && elementos[i].name == "genero") {

// 		  for (let o = 0; o < opciones.length; o++) {
// 			if (opciones[o].checked) {
// 			  resultado = true;
// 			  break;
// 			}
// 		  }
  
// 		  if (resultado == false) {
// 			elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
// 			console.log('El campo genero está incompleto');
// 			return false;
// 		  } else {

// 			elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
// 			return true;
// 		  }
// 		}
// 	  }
// 	};
  
	
  
// 	let enviar = function(e) {
// 	  if (!validarInputs()) {
// 		console.log('Falto validar los Input');
// 		e.preventDefault();
// 	  } else if (!validarRadios()) {
// 		console.log('Falto validar los botones');
// 		e.preventDefault();
// 	  } else {
// 		console.log('Envia');
// 		e.preventDefault();
// 	  }
// 	};
  
// 	let focusInput = function() {
// 	  this.parentElement.children[1].className = "label";
// 	  this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
// 	};
  
	

// 	formulario.addEventListener("submit", enviar);
  
// 	for (let i = 0; i < elementos.length; i++) {
// 	  if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
// 		elementos[i].addEventListener("focus", focusInput);
// 	  }
// 	}
  


//  function Especialista(nombre,edad,especialidad){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.especialidad = especialidad;
// }
// const especialista1 = new Especialista ("Adrianna", 38, "Nutrición");
// console.log(especialista1);

// const especialista2 = new Especialista ("Ruben", 33, "Nutrición");
// console.log(especialista2);

// const especialista3 = new Especialista ("Malena", 45, "Psicología");
// console.log(especialista3);

// const especialista4 = new Especialista ("Tobias", 29, "Deportología");
// console.log(especialista4);

// const especialista5 = new Especialista ("Leila", 40, "Deportología");
// console.log(especialista5);


let str2 = "h2";
let elem2 =
document.createElement(str2);
elem2.innerText ="POSTRES";
document.body.appendChild(elem2);

const baseDeDatos = [
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

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


// carro de compra NO TERMINADO
// Funciones


function renderizarProductos() {
    baseDeDatos.forEach((info) => {
    
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
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      
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
function anyadirProductoAlCarrito(evento) {

    carrito.push(evento.target.getAttribute('marcador'))

    renderizarCarrito();

}


function renderizarCarrito() {

    DOMcarrito.textContent = '';
  
    const carritoSinDuplicados = [...new Set(carrito)];
 
    carritoSinDuplicados.forEach((item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {
      
            return itemBaseDatos.id === parseInt(item);
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
        miBoton.style.marginLeft = '1rem';
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

    renderizarCarrito();
}


function calcularTotal() {

    return carrito.reduce((total, item) => {

        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // para el total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {

    carrito = [];

    renderizarCarrito();
}


DOMbotonVaciar.addEventListener('click', vaciarCarrito);


renderizarProductos();
renderizarCarrito();
