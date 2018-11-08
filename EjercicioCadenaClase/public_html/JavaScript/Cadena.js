/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var cadena = " ";
do{
    var nameVar = prompt("Introduce en nombre de una variable","nombre");
    var valVar = prompt("Introduce en nombre de una variable","Oscar");
    cadena += nameVar+"="+valVar;
    
    salida = confirm("¿Quieres seguir introduciendo variables?");
    
    if(salida){
     cadena += "&";
    }
}while(salida)

document.write(cadena);

var plantilla = /{?,1}/g;
var plantilla2 = /[&]+/g;
var plantilla3 = /[=]+/g;
var subCadenas = cadena.split(plantilla);
var subSubCadenas = subCadenas[1].split(plantilla2);
for (var i=0;i<subSubCadenas.length;i++){
    var trocitos = subSubCadenas[i].split(plantilla3)
}

//?variable=valor&variable=valor&variable=valor
//
//
