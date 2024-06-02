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

//8. Conversión de Unidades: Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit.

/*
var celsius = prompt("Por favor, ingresa la temperatura en grados Celsius:");
celsius = parseFloat(celsius);
var fahrenheit = (celsius * 9) / 5 + 32;
alert("La temperatura en Fahrenheit es: " + fahrenheit);
*/

//9. Cálculo de Promedio: Pide al usuario tres números y calcula su promedio.

/*
var numero1 = prompt("Por favor, ingresa la nota examen matematica:");
var numero2 = prompt("Por favor, ingresa la nota examen fisica:");
var numero3 = prompt("Por favor, ingresa la nota examen computación:");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
numero3 = parseFloat(numero3);

var promedio = (numero1 + numero2 + numero3) / 3;

alert("El promedio de tus examenes es: " + promedio);
*/

//10. Operador Ternario: Utiliza el operador ternario para determinar si un número es positivo o negativo.

/*
var numero = prompt("Ingrese un numero: ");
var resultado = numero >= 0 ? "positivo" : "negativo";
console.log("El número es " + resultado);
*/

//11. Condicional if-else: Pide al usuario su edad y determina si es mayor o menor de edad.

/*
var edad = prompt("Por favor, ingresa tu edad:");
edad = parseInt(edad);

if (edad >= 18) {
  alert("Podes INGRESA sos mayor de edad.");
} else {
  alert("NO puedes INGRESAR sos menor de edad.");
}
*/

//12. Condicional switch: Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente.

var numero = prompt("Por favor, ingresa un número del 1 al 7:");

numero = parseInt(numero);
switch (numero) {
  case 1:
    alert("El número " + numero + " corresponde al día Domingo.");
    break;
  case 2:
    alert("El número " + numero + " corresponde al día Lunes.");
    break;
  case 3:
    alert("El número " + numero + " corresponde al día Martes.");
    break;
  case 4:
    alert("El número " + numero + " corresponde al día Miércoles.");
    break;
  case 5:
    alert("El número " + numero + " corresponde al día Jueves.");
    break;
  case 6:
    alert("El número " + numero + " corresponde al día Viernes.");
    break;
  case 7:
    alert("El número " + numero + " corresponde al día Sábado.");
    break;
  default:
    alert("El número ingresado no está dentro del rango del 1 al 7.");
}
