/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var aleatorio =Math.floor(Math.random()*101);
var salida = false;
do{
   var resultado = parseInt(prompt('Intoduce un numero entre 0 y 100'));
   aleatorio === resultado? (
        salida=true ,
        alert('ACERTADO')
   ): (
        alert('te has equivocado'),
        aleatorio > resultado? alert('MAS') : (
                aleatorio < resultado? alert('MENOS') :salida=false
                )
   );
}while(!salida);


//var aleatorio =Math.floor(Math.random()*101);
//var salida = false;
//do{
//   var resultado = parseInt(prompt('Intoduce un numero entre 0 y 100'));
//   aleatorio === resultado? (
//        salida=true ,
//        alert('ACERTADO')
//   ): (
//        alert('te has equivocado'),
//        aleatorio > resultado? alert('MAS') : (
//                aleatorio < resultado? alert('MENOS') :salida=false
//                )
//   );
//}while(!salida);