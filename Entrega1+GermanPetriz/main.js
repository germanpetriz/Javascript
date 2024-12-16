// alert("Antes de iniciar, le pediremos algunos datos.")



const datosSolicitante = [];

for(let i=0;i<1;i++){
    let nombre = prompt("Ingrese nombre : ")
    datosSolicitante.push(nombre);
    let apellido = prompt("Ingrese apellido: ")
    datosSolicitante.push(apellido);
}
console.log(datosSolicitante.join(" - "))

// function calcularPagoMensual(dinero, interes, cuotas) { 
//     let tasaMensual = interes / 100 / 12;
//     let numeroPagos = cuotas * 12; 
// }

// function calcularPagos() { 
//     let monto = document.getElementById('dinero').value; 
//     let interes = document.getElementById('interes').value; 
//     let cuotas = document.getElementById('cuotas').value;
//     let pagoMensual = CalcularPagos(monto,interes,cuotas)

//     if(monto && interes && cuotas){
        
//     }
//     console.log(mostrarResultado())
// }

function calcularPagos() {            
    const dinero = document.getElementById('dinero').value;
    const interes = document.getElementById('interes').value;        
    const cuotas = document.getElementById('cuotas').value;
    // const intereses = dinero*interes/cuotas;
    // if(dinero&&interes&&cuotas){
    const interesMensual= (interes/dinero); 
    const interesTotal= (dinero * interes) /100;
    alert("El interes total a devolver es : "+ interesTotal)
    // alert("El monto mensual a devolver es "+ interesMensual)
    //}
}