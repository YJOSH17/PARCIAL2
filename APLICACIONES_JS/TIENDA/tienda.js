var productos=["MANZANA","OREO","HELADO","RUFLES","GOMITAS","MANTECADAS","BONAFONT","EMPERADOR"];
var precios=[15, 22, 55, 20, 15,23,17,23];

var selectProductos=document.getElementById("productos");
var imgProductos=document.getElementById("imgProducto");
var precioProductos=document.getElementById("precioProductos");
var inputCantidad=document.getElementById("inputCantidad");
var agregarCarrito=document.getElementById("agregarCarrito");
var carrito=new Array();

var posProducto=-1;
var cantidadProducto=0;
var total=0;

const cargarProductos=()=>{
    let optionProductos="";
    productos.forEach((producto)=>{
        optionProductos+=`<option value="${producto}">${producto.toUpperCase()}</option>`;
    })
    selectProductos.innerHTML=optionProductos;
    cargarPrecio();
}                   

selectProductos.onchange=()=>{
    cargarPrecio();
}
    
const cargarPrecio=()=>{
    imgProductos.src=`IMGT/${selectProductos.value.toLowerCase()}.png`;
    precioProductos.innerHTML=`$ ${precios[selectProductos.selectedIndex]}`;
    posProducto=selectProductos.selectedIndex;
}

inputCantidad.oninput=()=>{
    document.getElementById("vcantidad").innerHTML=inputCantidad.value;
    cantidadProducto=parseInt(inputCantidad.value);
}

agregarCarrito.onclick=()=>{
    cantidadProducto=parseInt(inputCantidad.value);
    posProducto=selectProductos.selectedIndex;
  if (checarItem(posProducto,cantidadProducto)){
       imprimirTabla();
    } else {
       let item=new Array();
    item.push(posProducto);
    item.push(cantidadProducto);
    carrito.push(item);
    imprimirTabla();
    }
}


const imprimirTabla=()=>{
    let total=0;
    let divCarrito=document.getElementById("carrito");
    let tablaHTML=`<table class="table w-100 m-auto table-striped table-dark table-bordered border-primary">
        <tr>
        <td><h2>PRODUCTO</h2></td>
        <td><h2>PRECIO</h2></td>
        <td><h2>CANTIDAD</h2></td>
        <td><h2>IMPORTE</h2></td>
        <td><h2>ELIMINAR</h2></td>
      
        </tr>
        `;
        let index=0;
        carrito.forEach(item=>{
            tablaHTML+=`
            <tr>
            <td>${productos[item[0]]}</td>
            <td>$ ${precios[item[0]]}.00</td>
            <td>${item[1]}</td>
         <td>${(precios[item[0]]*item[1])}</td>
 <td><button class="btn btn-danger" onclick="eliminarCarrito(${index})"><i class="bi bi-trash m-2"></i> DEL</button></td> 
            </tr>
            `
            index++;
            total+=(precios[item[0]]*item[1]);
            
 
            
            
    })
    let cambio=0;
    tablaHTML+=`
    <tr>
    <td></td>
    <td></td>
    <td><h3>TOTAL</h3></td>
    <td><h3>$${total}.00</h3></td>
    <tr>
<td colspan="4"><button class="btn btn-primary" onclick="pagar(${total})">PAGAR</button>   
   </tr>          
    </tr>
    `

    divCarrito.innerHTML=tablaHTML;
}

const checarItem = (pos,cant)=>{
   let x=false;
   carrito.forEach(item=>{
      
      if (item[0]==pos) {
      item[1]=item[1]+cant;
      x=true;
      }
   });
   return x;
}

const eliminarCarrito =(index)=>{
   Swal.fire({
  title: "ESTAS SEGURO DE ELIMINAR ESTE PRODUCTO?",
  showDenyButton: true,
  
  confirmButtonText: "SI!",
  denyButtonText: "NO"
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("ELIMINADO", "", "success");
    carrito.splice(index,1);
    imprimirTabla();
  } else if (result.isDenied) {
    Swal.fire("NO TE ARREPENTIRAS😉", "", "info");
  }
});
}

const pagar = (total) => {
  Swal.fire({
    title: 'PAGO DE PRODUCTOS',
    input: 'number',
    inputPlaceholder: 'Ingresa la cantidad con la que vas a pagar',
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      let pago = result.value;
      let cambio = pago - total;

      if (cambio >= 0) {
        Swal.fire('Tu cambio es: $' + cambio.toFixed(2));
      } else {
        Swal.fire('Ingresa una cantidad mayor con la que vas a pagar');
      }
    }
  });
}