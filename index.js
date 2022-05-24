let globalNombre = document.getElementById("nombre");
let globalCorreo = document.getElementById("email");
let globalClave = document.getElementById("contra");

const check1 = document.querySelector('#errorUser');
const check2 = document.querySelector('#errorClave');
const validado = document.querySelector('#validado');

let boton = document.getElementById("boton");
let nuke = document.getElementById("nuke");
let validacion;

let usuarios = [
  {nombre: "default", correo: "default", clave: "default"}
];

function usuario(nombre, clave, correo) {
  this.nombre = nombre;
  this.clave = clave;
  this.correo = correo;
}

nuke.addEventListener("click", () => { localStorage.clear() }) //Es necesario recargar la página

boton.addEventListener("click", () => {

 JSON.parse(localStorage.getItem("userdata")) != null ? usuarios = JSON.parse(localStorage.getItem("userdata")) : console.log("sin datos en storage(!)");

  validado.innerHTML = "<p><p>";
  document.getElementById("name").innerHTML = "";

  validacion = usuarios.some(elem => elem.nombre == globalNombre.value || elem.correo == globalCorreo.value);

  validacion == true ? check1.innerHTML = "<p>Parece que tu nombre de usuario y/o correo ya están registrados.<p>" : check1.innerHTML = "<p><p>";

  if (globalClave.length < 8 || globalClave.value.toLowerCase() == globalClave.value || globalClave.value.toUpperCase() == globalClave.value) {
    check2.innerHTML = "<p>Tu contraseña debe tener al menos 8 caracteres y combinar mayúsculas y minúsculas.<p>";
    validacion = true;
    }
  else {check2.innerHTML = "<p><p>";}

  if (validacion == false) {
    usuarios.push (new usuario(globalNombre.value, globalClave.value, globalCorreo.value));
    localStorage.clear();
    localStorage.setItem("userdata", JSON.stringify(usuarios));

    validado.innerHTML = "<p>Felicidades, tu cuenta se ha creado satisfactoriamente. Te hemos enviado un correo a:<p>";
    document.getElementById("name").innerHTML = globalCorreo.value;
  }

})


