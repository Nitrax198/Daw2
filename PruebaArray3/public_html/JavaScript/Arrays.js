/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//variable=confirm ("lo que quieras");  confirm = true, cancelar = false
//Hacer un ejercicio que pida años entre 2015 y 2018, meses que solo acepte numeros entre 1 y 12 y numero de nacimientos, hasta que el usuario no quiera meter mas
//una vez esté hecho mostrar todos los nacimientos de cada año y todos los nacimientos de cada mes
//          var tabla = new Array();
//          tabla[0]  = new Array (1, 8, 3);
//          tabla[1]  = new Array (3, 0, 675);
//switch (new Date().getDay()) {
//    case 0:
//        day = "Sunday";
//        break;
//    case 1:
//        day = "Monday";
//        break;
//    case 2:
//        day = "Tuesday";
//        break;
//    case 3:
//        day = "Wednesday";
//        break;
//    case 4:
//        day = "Thursday";
//        break;
//    case 5:
//        day = "Friday";
//        break;
//    case 6:
//        day = "Saturday";
//}
var estadisticas = new Array();
var an = 0;
var me = 0;
var na = 0;
var salida = 0;
var contador = 0;
var sumaAños = new Array();
var sumaMeses = new Array();
do {
//    estadisticas[contador] = new Array(parseInt(prompt('Introduce un año entre 2015 y 2018', '2015')), parseInt(prompt('Introduce un mes entre 1 y 12', '2')), parseInt(prompt('Introduce los nacimientos', '13')));
    var an = parseInt(prompt('Introduce un año entre 2015 y 2018', '2015'));
    var me = parseInt(prompt('Introduce un mes entre 1 y 12', '3'));
    var na = parseInt(prompt('Introduce los nacimientos', '13'));
    if (an > 2018 || an < 2015) {
        alert("Mal");
    } else if (me > 12 || me < 1) {
        alert("Mal");
    } else {
        estadisticas[contador] = new Array(an, me, na);
        contador++;
    }
    salida = confirm("¿Quieres Seguir?");
} while (salida);

for (var i = 0; i < estadisticas.length; i++) {
    if (estadisticas[i][1] === 2015) {
        sumaAños["2015"] += estadisticas[i][3];
    } else if (estadisticas[i][1] === 2016) {
        sumaAños["2016"] += estadisticas[i][3];
    } else if (estadisticas[i][1] === 2017) {
        sumaAños["2017"] += estadisticas[i][3];
    } else if (estadisticas[i][1] === 2018) {
        sumaAños["2018"] += estadisticas[i][3];
    }
}
for (var i = 0; i < estadisticas.length; i++) {
    switch (estadisticas[i][2]) {
        case 1:
            sumaMeses["Enero"] += estadisticas[i][3];
            break;
        case 2:
            sumaMeses["Febrero"] += estadisticas[i][3];
            break;
        case 3:
            sumaMeses["Marzo"] += estadisticas[i][3];
            break;
        case 4:
            sumaMeses["Abril"] += estadisticas[i][3];
            break;
        case 5:
            sumaMeses["Mayo"] += estadisticas[i][3];
            break;
        case 6:
            sumaMeses["Junio"] += estadisticas[i][3];
            break;
        case 7:
            sumaMeses["Julio"] += estadisticas[i][3];
            break;
        case 8:
            sumaMeses["Agosto"] += estadisticas[i][3];
            break;
        case 9:
            sumaMeses["Septiembre"] += estadisticas[i][3];
            break;
        case 10:
            sumaMeses["Octubre"] += estadisticas[i][3];
            break;
        case 11:
            sumaMeses["Noviembre"] += estadisticas[i][3];
            break;
        case 12:
            sumaMeses["Diciembre"] += estadisticas[i][3];
            break;
    }
    for (var elem in sumaMeses) {
        document.write("En ", elem, " nacieron ", sumaMeses[elem], "<br>");
    }
    for (var elem in sumaAños) {
        document.write("En ", elem, " nacieron ", sumaAños[elem], "<br>");
    }
}