import "./style.css";

//1. Declaración y Asignación: Declara una variable llamada nombre y asígnale tu nombre como valor.

/*
const name = {
  nombre: "Marcelo",
};
console.log(name); 
*/

//2. Tipos de Datos: Crea variables para almacenar un número entero (edad), un número decimal (precio), una cadena de texto (ciudad) y un valor booleano(esEstudiante).

/*
let edad = 59;
let precio = 1545.99;
let localidad = "Capital Federal";
let esEstudiante = true;
console.log("edad:", edad);
console.log("precio:", precio);
console.log("localidad:", localidad);
console.log("es Estudiante:", esEstudiante);
*/

//3. Concatenación: Declara dos variables (nombre, apellido) y muestra un mensaje que diga "Hola, [nombre] [apellido]".

/*
let nombre = "Marcelo Gustavo";
let apellido = "Scervino";
let mensaje = "Hola, " + nombre + " " + apellido;
console.log(mensaje);
*/

//4. Operaciones Matemáticas: Declara dos variables numéricas (num1, num2) y realiza las operaciones básicas (suma, resta, multiplicación, división) con ellas.

/*
const numero1 = 24;
const numero2 = 6;

const suma = numero1 + numero2;
console.log("La suma de", numero1, "y", numero2, "es:", suma);

const resta = numero1 - numero2;
console.log("La resta de", numero1, "y", numero2, "es:", resta);

const multiplicacion = numero1 * numero2;
console.log(
  "La multiplicación de",
  numero1,
  "y",
  numero2,
  "es:",
  multiplicacion
);

const division = numero1 / numero2;
console.log("La división de", numero1, "y", numero2, "es:", division);
*/

//5. Incremento y Decremento: Declara una variable (contador) y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor.

/*
let contador = 3;
console.log("Valor inicial del contador:", contador);
contador++;
console.log("Después del incremento (contador++):", contador);
contador++;
console.log("Después del segundo incremento (contador++):", contador);
contador--;
console.log("Después del decremento (contador--):", contador);
contador--;
console.log("Después del segundo decremento (contador--):", contador);
*/

//6. Prompt y Alert: Pide al usuario que ingrese su nombre mediante prompt() y luego muestra un mensaje de bienvenida con alert().

/*
var nombreUsuario = prompt("Por favor, ingresa tu nombre:");
alert("¡Bienvenido a IT EDUCATION, " + nombreUsuario + "!");
*/

//7. Cálculo de Área: Pide al usuario el radio de un círculo y calcula su área (π * radio^2).

/*
var radio = prompt("Por favor, ingresa el radio del círculo:");
radio = parseFloat(radio);
var area = Math.PI * Math.pow(radio, 2);
alert("El área del círculo con radio " + radio + " es: " + area);
*/
