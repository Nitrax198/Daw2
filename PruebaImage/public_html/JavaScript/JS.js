/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Ejemplo array asociativo en JS
//var coche = new Array();
//coche["color"] = "rojo";
//coche["marca"] = "seat";
//coche["modelo"] = "leon";
//var coche = {"color":"rojo","marca":"seat","modelo":"leon"};
//Ejemplo de forin para recorrerlo
//for(var clave in coche) {
//    document.write(clave+": " +coche[clave]);
//}
function cambiarFoto(){
    document.images["miImagen"].src="Imagenes/rolecito.jpg";
    var item = document.images[0];
//    Document.images["0"].src = fichero;

for(var clave in item) {
    document.write(clave+": "+item[clave]+"<br>");
}
}
