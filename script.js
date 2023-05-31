//1.- Crear un nuevo archivo en tu editor de texto y guardalo con una extensión ".js", como "script.js". Este archivo contendrá nuestro código JavaScript.

//2.-  Vincular el archivo JavaScript externo a tu documento HTML. Abrir tu archivo "mi-primera-pagina.html" del encuentro pasado y agregar el siguiente código justo antes de la etiqueta de cierre </body>: 
// <script src="script.js"></script>

//3.- Crear una función simple de JavaScript en el archivo "script.js" que mostrará una alerta cuando se llame:

function showAlert(){ 
    alert("Hola, esta es una alerta desde JavaScript!");
}

// 4.-  Para llamar a esta función desde tu página HTML, necesitamos agregar un botón que active la función al hacer clic. Agregar el siguiente código a tu archivo "mi-primera-pagina.html", dentro del elemento “.container”:
// <button onclick="showAlert()">Haz clic en míu!</button>

//5.-  Guardar ambos archivos, "mi_primera_pagina.html" y "script.js", luego actualiza tu página web en el navegador.

//alerta desde javaScript
const miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", function handleClick(){
    alert("Hola! Has hecho clic en el botón.");
});


function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

//Agregar un oyente de eventos al formulario para manejar el evento “submit”:
const form = document.getElementById('myForm');

//Sumar una función de validación que verifique los criterios deseados:

function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})