function validar(){
    var nombre = document.frmDetalle.txtNombre.value;
    if(document.frmDetalle.txtNombre.value.length==0){
        alert("Tiene que ingresar un nombre");
        document.frmDetalle.txtNombre.focus();
    }
    else{
        document.frmDetalle.rNombre.value=nombre;
    }

    var edad = document.frmDetalle.txtEdad.value;
    if(edad==''){
        alert("Tiene que ingresar tu edad");
        document.frmDetalle.txtEdad.focus();
    }
    else{
        if(edad>0 && edad<18){
            document.frmDetalle.rEdad.value="Usted es menor de edad";
            document.frmDetalle.rEdad.style="background: #4cb5dfb3";
        }else{
            document.frmDetalle.rEdad.value="Usted es mayor de edad";
            document.frmDetalle.rEdad.style="border: 5px solid #4cb5dfb3";
        }
    }

    //Validando las aficiones
    if(document.frmDetalle.aficiones.selectedIndex==0){
        alert("Debe seleccionar una Aficion");
        document.frmDetalle.rAficion.value='';
        document.frmDetalle.aficiones.focus();
    }else{
        var aficiones=document.frmDetalle.aficiones;
        var seleccion=aficiones.options[aficiones.selectedIndex].text;
        
        document.frmDetalle.rAficion.value=seleccion;
    }
}