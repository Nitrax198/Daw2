/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var estadisticas = new Array();
var an = 0;
var me = 0;
var na = 0;
var salida;
var sumaAnos = new Array();
var sumaMeses = new Array();
for (var i = 0; i < 18; i++) {
        estadisticas[i] = new Array();
        for (var j = 0; j < 12; j++) {
        estadisticas[i][j] = 0;
    }
}
do {
//    estadisticas[contador] = new Array(parseInt(prompt('Introduce un año entre 2015 y 2018', '2015')), parseInt(prompt('Introduce un mes entre 1 y 12', '2')), parseInt(prompt('Introduce los nacimientos', '13')));
    var an = parseInt(prompt("Introduce un año entre 2000 y 2018", 2015));
    var me = parseInt(prompt('Introduce un mes entre 1 y 12', 3));
    var na = parseInt(prompt('Introduce los nacimientos', 13));
    if (an > 2018 || an < 2000) {
        alert("Mal");
    } else if (me > 12 || me < 1) {
        alert("Mal");
    } else {
        estadisticas[an -2000][me - 1] = na;
    }
    salida = confirm("¿Quieres Seguir?");
} while (salida);

sumaMeses["Enero"] = 0;
sumaMeses["Febrero"] = 0;
sumaMeses["Marzo"] = 0;
sumaMeses["Abril"] = 0;
sumaMeses["Mayo"] = 0;
sumaMeses["Junio"] = 0;
sumaMeses["Julio"] = 0;
sumaMeses["Agosto"] = 0;
sumaMeses["Septiembre"] = 0;
sumaMeses["Octubre"] = 0;
sumaMeses["Noviembre"] = 0;
sumaMeses["Diciembre"] = 0;

for (var i = 0; i < 18; i++) {
    for (var j = 1; j <= 12; j++) {
        switch (j) {
            case 1:
                sumaMeses["Enero"] += estadisticas[i][j - 1];
                break;
            case 2:
                sumaMeses["Febrero"] += estadisticas[i][j - 1];
                break;
            case 3:
                sumaMeses["Marzo"] += estadisticas[i][j - 1];
                break;
            case 4:
                sumaMeses["Abril"] += estadisticas[i][j - 1];
                break;
            case 5:
                sumaMeses["Mayo"] += estadisticas[i][j - 1];
                break;
            case 6:
                sumaMeses["Junio"] += estadisticas[i][j - 1];
                break;
            case 7:
                sumaMeses["Julio"] += estadisticas[i][j - 1];
                break;
            case 8:
                sumaMeses["Agosto"] += estadisticas[i][j - 1];
                break;
            case 9:
                sumaMeses["Septiembre"] += estadisticas[i][j - 1];
                break;
            case 10:
                sumaMeses["Octubre"] += estadisticas[i][j - 1];
                break;
            case 11:
                sumaMeses["Noviembre"] += estadisticas[i][j - 1];
                break;
            case 12:
                sumaMeses["Diciembre"] += estadisticas[i][j - 1];
                break;
        }
    }
}
for (var i = 0; i < 18; i++) {
        sumaAnos[i] = 0;
}
for (var i = 0; i < 18; i++) {
    for (var j = 0; j < 12; j++) {
        sumaAnos[i] += estadisticas[i][j];
    }
}
for (var elem in sumaMeses) {
    document.write("En ", elem, " nacieron ", sumaMeses[elem], "<br>");
}
for (var i = 0; i < sumaAnos.length; i++) {
    document.write("En "+ (2000+i) + "nacieron " + sumaAnos[i]+ "<br>" );
}