/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function abrirH(){
    miHija = open("hija.html","" ,"width=400, height=200");
}
function CerrarH(){
    miHija.close();
}
function Aumentar(){
    miHija.resizeBy(20,20);
}
function Disminuir(){
    miHija.resizeBy(-20,-20);
}
var pi = window.innerWidth;
var tau = window.innerHeight;

var width = screen.width;
var height = screen.height;
var availWidth = screen.availWidth;
var availHeigth = screen.availHeigth;
var colorDepth = screen.colorDepth;
function Mostrar(){
    document.write(pi+' '+tau);
}
function Mostrar2(){
    document.write(width+' '+height+' '+availWidth+' '+availHeigth+' '+colorDepth);
}

//
//for (const prop in window) {
//  document.write(prop+'<br>');
//}
