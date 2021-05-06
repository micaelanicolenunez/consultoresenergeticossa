





 //Ingreso saludo

if (!localStorage["nombre"]) {
   localStorage.setItem("nombre", prompt("Nombre"));
   } else {
   alert("Bienvenido " + localStorage.getItem("nombre") + " a Consultores Energéticos S.A.");
   localStorage.removeItem("nombre");
 }

 for (let i = 0; i < localStorage.length; i++) {
   let clave = localStorage.key(i);
   console.log("Clave: " + clave);
   console.log("Valor: " + localStorage.getItem(clave));
 }

 //Selecciones

class Seleccion {
	constructor(servicio, rubro, gastomensual){
		this.servicio = servicio;
		this.rubro = rubro;
		this.gastomensual = gastomensual;
	}
}


let Selecciones = [];

let Servicio = document.getElementById("selecser");
let Rubro = document.getElementById("selecrub");
let GastoMensual = document.getElementById("txtgastomensual"); 




let btnAgregar = $("#btnAgregar");
let btnMostrar = $("#btnMostrar");


let versel = document.getElementById("verseleccion");


$("#btnAgregar")
.on("click",()=>{
    
    $("h6").hide();
     console.log ("Agrego servicio")
     $("h5").show();
     



    let sel = new Seleccion(Servicio.value, Rubro.value, GastoMensual.value, GastoMensual.value);
    Selecciones.push(sel);
	console.log(Selecciones);
  
})

$("#btnMostrar")
.on("click",()=>{

    console.log ("Muestro la selección")
     $("h6").show();
     $("h5").hide();

    let tabla = "<table border=1 color=red>";
	 tabla = tabla + `<tr><th>Servicio</th><th>Rubro</th><th>GastoMensual</th><th>CostoServicio</th></tr>`;
	

	for (const elem of Selecciones){
		tabla = tabla + `<tr><td>${elem.servicio}</td><td>${elem.rubro}</td><td>${elem.gastomensual}</td><td>${costoservicio(elem.gastomensual)}</td></tr>`;
	}
	tabla = tabla + "<table >"
	versel.innerHTML = tabla;


})


//funcion para que me de el costo de cada servicio


function costoservicio(algo){
	
	console.log(algo)

    if (algo <= 10000){
    	return `$ 3500`
   	    } else if (algo > 10000 && algo < 30000 ) {
   	     return `$ 4500`
   	         } else  {
   	         return `$ 5500`  
   	         }

}


