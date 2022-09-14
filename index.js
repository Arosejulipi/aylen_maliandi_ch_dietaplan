 function plandieta (){
   let precio = parseInt(prompt("Ingrese el coste del plan de la dieta *Omnívoro ($30000 ars), Vegano($35000 ars), Vegetariano($28000 ars)*"))
    let meses = parseInt(prompt("ingrese los meses a contratar el servicio (minímo 3 meses)"));
    multiplicar(precio,meses);
}
 function multiplicar(numero1, numero2){
    if(numero1 == 30000 || numero1 == 35000 || numero1 == 28000){
        let numeros= numero1*numero2;
       alert("el precio a pagar el servicio alimenticio por mes es de" + numeros);
    }else if(numero2 <3){
        alert("Valor incorrecto");
        plandieta()

  }
    
 }

 var número = prompt("Introduzca un número del 1 al 10 para un sorteo");
var intento = 0;

while (número != undefined) {

  if (intento < 1) {

    if (número == 3) {

      alert("Te ganaste un plan nutricional");
      break;

    } else if (número != 3) {

      intento++;
     prompt("Introduzca otro número, Suerte!");
      continue;
     ;
    }

  } else {

    alert("Lo siento, no ganó nada. Ah seguir participando");
    break;

  }

}

let precio= parseInt(prompt("Ingrese el coste del plan de la dieta *Omnívoro ($30000 ars), Vegano($35000 ars), Vegetariano($28000 ars)*"));
let meses = parseInt(prompt("ingrese los meses a contratar el servicio (minímo 3 meses)"));

 multiplicar (precio, meses)


let postres=
    [{id:1,nombre: "Bizcochos de almendra VEGANO", valor: 1200 },
     {id:2, nombre: "Tarta de cous-cous y arándanos VEGANO" ,valor:2300 },
     {id:3, nombre: "Barras ceto-crujientes con chocolate VEGANO" ,valor: 2000 },
     {id:4, nombre: "Tarta de zanahoria y coco VEGETARIANO" , valor: 1800 },
     {id:5, nombre: "Clafoutis VEGETARIANO" , valor: 2500 },
     {id:6, nombre: "Trufas de cava y frambuesa OMNÍVERO" , valor: 800 },
     {id:7, nombre: "Tarta de queso con arándanos OMNÍVERO" ,valor: 1700 },
     {id:8, nombre: "Mousse de limón OMNÍVERO" ,valor: 1500 }
];

 let valor = parseInt(prompt("Ingrese el precio minimo"));
let filtro = postres.filter(item => item.valor > valor);
filtro.forEach(item => {
 let mensaje = `
 Producto número: ${item.id}
 Postre: ${item.nombre}
 Valor: $${item.valor}
   `;
 alert(mensaje + "Adaptandonos a tu presupuesto");
 })


 function Especialista(nombre,edad,especialidad){
    this.nombre = nombre;
    this.edad = edad;
    this.especialidad = especialidad;
}
const especialista1 = new Especialista ("Adrianna", 38, "Nutrición");
console.log(especialista1);

const especialista2 = new Especialista ("Ruben", 33, "Nutrición");
console.log(especialista2);

const especialista3 = new Especialista ("Malena", 45, "Psicología");
console.log(especialista3);

const especialista4 = new Especialista ("Tobias", 29, "Deportología");
console.log(especialista4);

const especialista5 = new Especialista ("Leila", 40, "Deportología");
console.log(especialista5);
