/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//$(document).ready(function () {
//    $("a").click(function (evento) {
//        alert("Has pulsado el enlace.\nAhora serás enviado a DesarrolloWeb.com");
//    });
//});
//$(document).ready(function () {
//    $("a").mouseover(function (evento) {
//        $("#texto").addClass("verde");
//    })
//    $("a").mouseout(function (evento) {
//        $("#texto").removeClass("verde");
//    })
//})
//$(document).ready(function () {
//    $("a").mouseover(function (evento) {
//        $("#Nombre").css("visibility", "hidden");
//    })
//    $("a").mouseout(function (evento) {
//        $("#Nombre").css("visibility", "visible");
//    })
//})
$(document).ready(function () {
    $("#mostrar").click(function () {
        $("#imagen").css("visibility", "visible");
    });
    $("#ocultar").click(function () {
        $("#imagen").css("visibility", "hidden");
    });
});

