/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//hacer un ejercicio que pida un nombre, crear un cooki de nombre nombre y cuyo valor sea el nombre introducido, mostrar con un alert el nombre y valor de la cookie
//F:\Daw 2\DiseñoDeInterfacesWeb\Mi_web\Comun\parte3 pg120, están las cookies
//var name = prompt('Dime el nombre ','CupCacke');
//document.cookie = "nombre="+name+"; expires=Thu, 13 11 2018 10:15:00 UTC";
//var galleta = document.cookie;
//alert(galleta);
var name = prompt('Dime el nombre','CupCacke');
document.cookie = name+"="+1+"; expires=Tue, 13 Nov 2018 12:45:00 UTC";
alert(document.cookie);