/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.addEventListener("readystatechange",cargarEventos,false);
//function cargarEventos(evento){
function cargarEventos(){
    alert(document.readyState);
    if(document.readyState === "complete"){
//        document.getElementById("abuelo").addEventListener("Focus", superCali,false);
        document.getElementById("abuelo").addEventListener("click", superCali,true);
        document.getElementById("padre").addEventListener("click", fragilistico,true);
        document.getElementById("hijo").addEventListener("click", espialidoso,true);
        
        document.getElementById("abuelo").addEventListener("click", ilacrepus,false);
        document.getElementById("padre").addEventListener("click", ocitsiligar,false);
        document.getElementById("hijo").addEventListener("click", osodilaipse,false);
//        ponerFechas();
    }
}
    function superCali(){
                alert('superCalir');
    }
    function fragilistico(){
                alert('fragilistico');
    }
    function espialidoso(){
                alert('espialidoso');
    }
    function ilacrepus(){
                alert('ilacrepus');
    }
    function ocitsiligar(){
                alert('ocitsiligar');
    }
    function osodilaipse(){
                alert('osodilaipse');
    }
