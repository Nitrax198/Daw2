/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cadena = prompt('Escribe una frase cortita a ser posible','Kawaii');

for (var i = 0; i < cadena.length; i++) {
    document.write(cadena.charAt(i)+"<br>");
    document.write("a"+cadena.charCodeAt(i)+"<br>");
}

var plantilla = new RegExp("^91[0-9]{7}$","g");
var telf = prompt("Escribe un numero de la comunidad de madrid", "911234567");
if (plantilla.test(telf)) {
    alert("El numero es correcto");
} else {
    alert("El numero es incorrecto");
}

var plantilla2 = new RegExp(/^91[0-9]{7}$/g);
var telf2 = prompt("Escribe un numero de la comunidad de madrid", "911234567");
if (plantilla2.test(telf2)) {
    alert("El numero es correcto");
} else {
    alert("El numero es incorrecto");
}