/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//            var cambiante = new Date(1998, 08, 19, 16, 32, 02);
//            document.write(cambiante);
//            document.write(cambiante.getMilliseconds());
//            
//            function mi_funcion(){
//                fechaH = new Date();
//                document.title = fechaH.getMilliseconds();
//                setInterval("mi_funcion()",1000);
//            }
//            var fechaH = new Date();
//            setInterval("mi_funcion()",1000);


//          codigo del profe
//        var fecha_Inicial = new Date();
//        var fecha_Final = new Date();
//        var parada;
//        function iniciarCrono(){
//            fecha_Inicial = new Date();
//            parada = setInterval("crono()",1000);
////            
//        }
//        
//        function crono(){
//            fecha_Final = new Date();
//            document.title = Math.round((fecha_Final.getTime()-fecha_Inicial.getTime())/1000);
//        }
//        
//        function pararCrono(){
//            clearInterval(parada);
//        }
//

        var fecha_Inicial = new Date();
        var fecha_Final = new Date();
        var hor;
        var min;
        var seg;
        var parada;
        function iniciarCrono(){
            fecha_Inicial = new Date();
            parada = setInterval("crono()",1000);
//            
        }
        
        function crono(){
            fecha_Final = new Date();
            hor = Math.round((fecha_Final.getTime()-fecha_Inicial.getTime())/3600000);
            min = Math.round((fecha_Final.getTime()-fecha_Inicial.getTime())/60000);
            seg = Math.round((fecha_Final.getTime()-fecha_Inicial.getTime())/1000);
            document.title = (hor +" :"+ min +" :"+ seg);
        }
        
        function pararCrono(){
            clearInterval(parada);
        }
//        
//        
//        
//        var fechaIni = new Date();
//        var fechaFin = new Date();
//        var parada;
//        function iniciarCrono(){
////            document.write(fechaIni.getSeconds());
//            fechaIni = new Date();
//            parada = setInterval("crono()",1000);
////            alert("HHHH");
//        }
//        
//        function crono(){
//            fechaFin = new Date();
//            document.title = fechaFin.getSeconds()-fechaIni.getSeconds();
////            document.write(fechaIni.getSeconds()-fechaFin.getSeconds());
////            setInterval("crono",1000);
////            alert("HHHH");
//        }
//        
////        setInterval("iniciarCrono",1000);
//        function pararCrono(){
////            document.write(fecha.getMilliseconds());
//            clearInterval(parada);
////            alert("HHHH");
//        }

