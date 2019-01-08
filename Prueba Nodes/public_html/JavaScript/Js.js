/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$(document).ready(function () {
//    var trNode = document.getElementById("nodo");
//    alert(trNode.nodeType);
//    if(1===trNode.nodeType){
//        alert(trNode.nodeName);
//        alert(trNode.nodeValue);
//    };
//});

    function funcion() {
        var trNode = document.getElementsByTagName("TR")[1];
        alert(trNode.nodeType);
        if(1===trNode.nodeType){
            alert(trNode.nodeName);
            alert(trNode.nodeValue);
        }
    };

//window.onload(function(){
//    var trNode = document.getElementsByTagName("TR")[1];
//        alert(trNode.nodeType);
//        if(1===trNode.nodeType){
//            alert(trNode.nodeName);
//            alert(trNode.nodeValue);
//        }
//});


