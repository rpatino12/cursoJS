// Variables y operaciones
let nombre = "Ricardo";
let apellido = "Patino";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let ahorros = 3000;
let deudas = 100;
let dineroReal = ahorros - deudas;
console.log(dineroReal);

//Funciones
function generarNombres(name, lastname, nickname){
    let completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + " pero prefiero que me digas " + nickname + ".");
}

generarNombres("Ricardo", "Patino", "friki")

//Condicionales
//Replica el comportamiento del código dado utilizando if, else y else if:
let tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Replica el comportamiento del código dado utilizando solo if (sin else ni else if):
tipoDeSuscripcion = "ExpertPlus";

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.
const planes = [
    {nombre: "Free", uso: "Solo puedes tomar los cursos gratis"},
    {nombre: "Basic", uso: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {nombre: "Expert", uso: "Puedes tomar todos los cursos de Platzi durante un año"},
    {nombre: "ExpertPlus", uso: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];

tipoDeSuscripcion = "Basic";

for (plan of planes) {
    if (tipoDeSuscripcion === plan.nombre) {
        console.log(plan.uso);
    }
}

//Ciclos
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

//Segundo ejercicio
i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i -= 1;
}


//Tercer ejercicio
let pregunta = prompt("Cuanto es 2 + 2?");
let respuestaCorrecta = "4";
if (pregunta === respuestaCorrecta) 
{
    alert("Respuesta correcta. Felicitaciones!");
}
else 
{
    while (pregunta !== respuestaCorrecta)
    {
        pregunta = prompt("A ver otra vez, cuanto es 2 + 2?");
    }
    alert("Ahora si, respuesta correcta. Felicitaciones!");
}

//Listas
//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function primerElemento(arr) 
{
    console.log(arr[0]);
}

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo)
function elementosDelArray(arr)
{
    for (elemento of arr)
    {
        console.log(elemento);
    }
}

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2018,
    kilometraje: 40000,
    esNuevo: false,
}

function elementosDelObjeto(obj)
{
    for (elemento in obj) 
    {
        console.log(elemento);
    }
}