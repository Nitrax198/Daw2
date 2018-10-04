/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function repuesto(Descripcion,Pcp,Pvp,fecha_instalacion,meses_vida){
    this.descripcion = Descripcion;
    this.pcp = Pcp;
    this.pvp = Pvp;
    this.fechaInstalacion = fecha_instalacion;
    this.mesesVida = meses_vida;
    this.ganancia = fnGanancia;
    this.caducado = fnCaducado;
}
    function fnGanancia(){
        var resto = this.pvp - this.pcp;
        return resto;
    }
    function fnCaducado(){
        
    }
function vehiculo(Matricula,Modelo,ultima_version,Arrepuestos){
    this.matricula = Matricula;
    this.modelo = Modelo;
    this.ultimaVersion = ultima_version;
    this.repuestos = Arrepuestos;
    this.actualizar = fnActualizar;
    this.importe = fnImporte;
    this.neto = fnNeto;
}
    function fnActualizar(){
        
    }
    function fnImporte(){
        
    }
    function fnNeto(){
        
    }

        //Funcionalidad
        var contador = 0;
        var vehiculos = new Array();
        var arrepuestos = new Array();
        vehiculos.push(new vehiculo(prompt('Ponga La matricula','T2248GJ'),prompt('Ponga el modelo','Seat ibiza 1.6'),ultima_version,arrepuestos));
        do{
            arrepuestos[contador] = new repuuesto(prompt('Ponga una Descripcion','llantas'),parseInt(prompt('Ponga el precio de compra','50')),parseInt(prompt('Ponga el precio de venta','60')));
            var salida = parseInt(prompt('¿Quiere seguir introduciendo repuestos? ponga 1 para si y 0 para no','1'));
            contador ++;
        }
        while(salida===1);
        for(var i=0; i<arrepuestos.length; i++){
            document.write(arrepuestos[i].descripcion +"  "+ arrepuestos[i].pcp +"  "+ arrepuestos[i].pvp +"  " + "<br>");
        }
