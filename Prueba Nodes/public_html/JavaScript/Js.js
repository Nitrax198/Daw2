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

//    function funcion() {
//        var trNode = document.getElementsByTagName("TR")[1];
//        alert(trNode.nodeType);
//        if(1===trNode.nodeType){
//            alert(trNode.nodeName);
//            alert(trNode.nodeValue);
//        }
//    };

//    window.onload = function funcion(){
//        var trNode = document.getElementsByTagName("TR")[1];
//            alert(trNode.nodeType);
//            if(1===trNode.nodeType){
//                alert(trNode.nodeName);
//                alert(trNode.nodeValue);
//            }
//    };

    window.onload = function funcion(){
        var obj_html = document.documentElement;
        var obj_hijo = obj_html.firstChild;
        document.write(obj_hijo.nodeName +"<br>");
        document.write(obj_hijo.nodeValue +"<br>");
        document.write(obj_hijo.nodeType +"<br>");
        obj_hijo = obj_html.firstChild.nextSibling;
        document.write(obj_hijo.nodeName +"<br>");
        document.write(obj_hijo.nodeValue +"<br>");
        document.write(obj_hijo.nodeType +"<br>");
        obj_hijo = obj_html.firstChild.nextSibling.nextSibling;
        document.write(obj_hijo.nodeName +"<br>");
        document.write(obj_hijo.nodeValue +"<br>");
        document.write(obj_hijo.nodeType +"<br>");
        obj_hijo = obj_html.lastChild;
        document.write(obj_hijo.nodeName +"<br>");
        document.write(obj_hijo.nodeValue +"<br>");
        document.write(obj_hijo.nodeType +"<br>");
    };
//    window.onload = function funcion(){
//        var trNode2 = document.getElementsByTagName("TR")[0].firstChild.nextSibling;
//            alert(trNode2.nodeType);
//            if(1===trNode2.nodeType){
//                alert(trNode2.nodeName);
//                alert(trNode2.nodeValue);
//            }
//            if(3===trNode2.nodeType){
//                alert(trNode2.nodeName);
//                alert(trNode2.nodeValue);
//            }
//    };
    
//    window.onload = function funcion(){
//        var trNode = document.getElementsByTagName("TR")[0];
//            var trNode2 = trNode.nextSibling;
//            alert(trNode2.nodeType);
//            if(1===trNode2.nodeType){
//                alert(trNode2.nodeName);
//                alert(trNode2.nodeValue);
//            }
//            if(3===trNode2.nodeType){
//                alert(trNode2.nodeName);
//                alert(trNode2.nodeValue);
//            }
//    };


