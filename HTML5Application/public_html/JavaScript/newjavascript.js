/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var tabla = new Array();
tabla[0] = new Array(1, 8, 3);
tabla[1] = new Array(3, 0, 675);
tabla[2] = true;

for (var fila = 0; fila < 2; fila++) {
    for (var col = 0; col < 3; col++) {
        document.write("tabla (", fila, ", ", col, ") = ", tabla[fila][col], "<br>");
    }
}