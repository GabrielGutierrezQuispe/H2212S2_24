const url = "http://34.203.128.23:3000/api/contactanos"; 
let resultados = '';
const formArticulo = document.querySelector("form");
const nomcon = document.getElementById("NOMCON");
const corrcon = document.getElementById("CORRCON");
const celucon = document.getElementById("CELUCON");
const asucon = document.getElementById("ASUCON");
const descon = document.getElementById("DESCON");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (NOMCON.value == "" || CORRCON.value == "" || CELUCON.value == "" || ASUCON.value == "" || DESCON.value == "") {
       		 alert("Asegúrese de que todos los campos estén completos");
       		 return false;
   		 } else {
       		 console.log("Todos los campos están completos");
       		 fetch(
           		 url,
           		 {
               		 method: 'POST',
               		 headers: {
                   		 'content-Type':'application/json'
               		 },
               		 body: JSON.stringify(
                   		 {
                       		 NOMCON: NOMCON.value,
                       		 CORRCON: CORRCON.value,
                       		 CELUCON: CELUCON.value,
                       		 ASUCON: ASUCON.value,
                       		 DESCON: DESCON.value
                   		 }
               		 )
           		 }
       		 )
       		 .then(
           		 response => response.json()
       		 )
       		 .then(
           		 response => location.reload()
       		 );
   		 }
   	 } else if(opcion == 'editar'){
   		 console.log("Activado el ");
   	 }
    }
);