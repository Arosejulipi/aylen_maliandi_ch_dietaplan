
import stripekeys from "./stripekeys.js";
const d = document,
$dietas = d.getElementById("dietas"),
$template = d.getElementById("dieta-template").content,
$fragment = d.createDocumentFragment(),
 fetchOptions ={
      headers:{
            Authorization:`Bearer ${stripekeys.secret}`,
       },
};
let prices,products; 

const transformador = (num) => `$${num.slice(0,-2)}`;

Promise.all([
      fetch("https://api.stripe.com/v1/products",fetchOptions),
      fetch("https://api.stripe.com/v1/prices",fetchOptions),
])
.then((responses) => Promise.all(responses.map((res)=>res.json())))
.then((json) =>{
 
 products = json[0].data;
  prices = json[1].data;


  prices.forEach((el) =>{
      let productData = products.filter((product) => product.id ===el.product);
  
  $template.querySelector(".dieta").setAttribute("data-price",el.id);
  $template.querySelector("img").src = productData[0].images[0]
  $template.querySelector("img").all = productData[0].name;
  $template.querySelector("figcaption").innerHTML=`
  ${productData[0].name}
  <br>
  ${transformador(el.unit_amount_decimal)} ${el.currency}
  `;

  let $clone = d.importNode($template,true);
  $fragment.appendChild($clone);
});
$dietas.appendChild($fragment);
  })
 .catch((err) =>{
      console.log(err);
      let message = 
      err.statusText || "Ocurrió un error, lo siento";
      $dietas.innerHTML=`<p>Error${err.status}:${message}</p>`
  });
  
       let boton1 = document.getElementById("btnPrimero")
       boton1.onclick = () =>{console.log(swal("Tu dieta elegida fue Vegana", "Se realizó la contratación del sevicio exitosamente","success"))}
       let boton2 = document.getElementById("btnSegundo")
       boton2.onclick = () =>{console.log(swal("Tu dieta elegida fue Vegetariana", "Se realizó la contratación del sevicio exitosamente","success"))}
       let boton3 = document.getElementById("btnTercero")
       boton3.onclick = () =>{console.log(swal("Tu dieta elegida fue Omnívera", "Se realizó la contratación del sevicio exitosamente","success"))}


// // Elegí sweetalaert para que al apretar el botón de contratar servicio, este confirmo que se realizó la contratación