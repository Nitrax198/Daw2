/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var cadena = " ";
do{
    var nameVar = prompt("Introduce en nombre de una variable","nombre");
    var valVar = prompt("Introduce en nombre de una variable","Oscar");
    cadena += nameVar+".- "+valVar+"<br>";
    
    salida = confirm("¿Quieres seguir introduciendo variables?");
}while(salida)

document.write(cadena);


//?variable=valor&variable=valor&variable=valor
//
//
