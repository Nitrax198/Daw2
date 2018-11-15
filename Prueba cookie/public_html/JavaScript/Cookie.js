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
//var name1 = prompt('Dime el nombre','CupCacke');
//document.cookie = name1+"="+1+"; expires=Tue, 14 Nov 2018 08:49:00 UTC";
//var name2 = prompt('Dime el nombre','Madalena');
//document.cookie = name2+"="+1+"; expires=Tue, 14 Nov 2018 08:49:00 UTC";
//var name3 = prompt('Dime el nombre','Galleta');
//document.cookie = name3+"="+1+"; expires=Tue, 14 Nov 2018 08:49:00 UTC";
//alert(document.cookie);
function leer_cookie(name) {
    if (document.cookie.length === null) {
        return null;
    }
    var sep1 = RegExp("; ","g");
    var listaDeGalletas = document.cookie.split(sep1);
    var sep2 = RegExp("=","g");
    for (var i = 0; i < listaDeGalletas.length; i++) {
        var cookie = listaDeGalletas[i].split(sep2);
        if (cookie[0] === name) {
            return unescape(cookie[1]);
        }else{
            return unescape(cookie[1]);
        }
    }
}
function grabar_cookie(name, valor, fecha) {
    fecha.toUTCString;
    document.cookie = name + "=" + valor + "; expires=" + fecha;
}

var titulo= 1;
fecha = new date;
fecha.setTime(fecha.getTime() + (2*60*1000));
fecha.toUTCString;
alert(fecha);
//document.cookie = "jope=" + titulo + "; expires="+fecha;
//alert(document.cookie);

//var caducidad = new Date();
//var titulo;
//titulo = leer_cookie("contador");
//if (titulo === null) {
//    titulo = 1;
//} else {
//    titulo = parseInt(titulo) + 1;
//}
//caducidad.setTime(caducidad.getTime() + (1*60*1000));
//grabar_cookie("contador", titulo, caducidad);
//document.title = titulo;
