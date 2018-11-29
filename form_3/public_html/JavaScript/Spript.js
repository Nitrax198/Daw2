/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//if(window.jQuery){
//    alert('se ha cargao');
//}else{
//    alert('no se ha cargao');
//}

//$(document).ready(function () {
//    $("#link").click(function (evento) {
//        evento.preventDefault();
//        $("formulario").js(reset());
//    });
//});

function reset(){
    document.forms['formulario'].reset();
}
function enviar(){
    document.forms ['formulario'].submit();
}
function validacionDni(){
    var tester = false;
    var dni = document.forms ['formulario'].elements["dni"].value;
    var compDni = /^[0-9]{9}[A-Z]{1}$/g;
        if(dni.test(compDni)){
            tester = true;
        }else{
            tester = false;
            alert('El DNI no es correcto');
        }
    return (tester);
}
function validacionNombre(){
    var tester = false;
    var nombre = document.forms ['formulario'].elements["nombre"].value;
    var compNombre = /^[A-Z]{3}/g;
    if(nombre.test(compNombre)){
        tester = false;
        alert('El DNI no es correcto');
    }else{
       tester = false;
        alert('El nombre no es correcto');
    }
    return (tester);
}