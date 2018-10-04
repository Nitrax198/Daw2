/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


        

function Persona(sNombre,sDireccion){
            this.nombre = sNombre;
            this.direccion = sDireccion;
            this.imprimirDatos = fnImprimirDatos;
        }
             function fnImprimirDatos(){
                document.write(this.nombre + "<br>");
                document.write(this.direccion);
                alert(this.nombre);
            }
            
            
        var persona = new Persona("Federico","calle los Mojinos");
        persona.imprimirDatos();