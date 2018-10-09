/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var numeros = new Array(7,9,2,8,4,3);
var auxiliar = 0;
do{
  var salida = false;
    for (var i = 0; i < numeros.length-1; i++) {
        if(numeros[i]<numeros[i+1]){
            auxiliar = numeros[i];
            numeros[i] = numeros[i+1];
            numeros[i+1] = auxiliar;
            salida = true;
        }
    }
    for (var numero in numeros) {
        document.write(numeros[numero] + "<br>");
    }
    document.write("<br>");
} while (salida);
