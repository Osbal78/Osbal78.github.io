let Usuario1=new Object;
Usuario1.Nombre="Roger";
Usuario1.Contraseña= 1258;
Usuario1.Email="roger123@gmail.com";

let Usuario2=new Object;
Usuario2.Nombre="Sergio";
Usuario2.Contraseña= 1258;
Usuario2.Email="sergio123@gmail.com";

let Usuario3=new Object;
Usuario3.Nombre="Americo";
Usuario3.Contraseña= 1258;
Usuario3.Email="americo123@gmail.com";

function red(){
    location.href="index.html";
}

function mensaje(){
    // agarra datos
    var nombreObtneido = document.getElementById("Usuario").value;
    var contraseñaObtneido = document.getElementById("Contraseña").value;
    var emailObtneido = document.getElementById("Email").value;
    
    //creando nuevo objeto a comparar
    let UsuarioReg=new Object;
    UsuarioReg.Nombre=nombreObtneido;
    UsuarioReg.Contraseña=contraseñaObtneido;
    UsuarioReg.Email=emailObtneido;


    alert(nombreObtneido+" "+contraseñaObtneido+" "+emailObtneido);
}

function compara(){
    
    var nombreObtneido = document.getElementById("Usuario").value;
    var contraseñaObtneido = document.getElementById("Contraseña").value;
    var emailObtneido = document.getElementById("Email").value;
    

    var l1=0,l2=0,l3=0, e1=0,e2=0,e3=0;
    
    //Compara con el Usuario1=Sergio

    if(nombreObtneido==Usuario1.Nombre){
        l1=1;
    }
    else{
        e1=1;
    }
    if(contraseñaObtneido==Usuario1.Contraseña){
        l2=1;
    }
    else{
        e2=1;
    }
    if(emailObtneido==Usuario1.Email){
        l3=1;
    }
    else{
        e3=1;
    }

    if(l1==1 && l2==1 && l3 ==1){
        pruebalink();
    }else{

            //Compara con el Usuario2=Sergio
            if(nombreObtneido==Usuario2.Nombre){
                l1=1;
            }
            else{
                e1=1;
            }
            if(contraseñaObtneido==Usuario2.Contraseña){
                l2=1;
            }
            else{
                e2=1;
            }
            if(emailObtneido==Usuario2.Email){
                l3=1;
            }
            else{
                e3=1;
            }
                if(l1==1 && l2==1 && l3 ==1){
                    pruebalink();
                }else{
                
                    //Compara con el Usuario3=Osbal
                    if(nombreObtneido==Usuario3.Nombre){
                        l1=1;
                    }
                    else{
                        e1=1;
                    }
                    if(contraseñaObtneido==Usuario3.Contraseña){
                        l2=1;
                    }
                    else{
                        e2=1;
                    }
                    if(emailObtneido==Usuario3.Email){
                        l3=1;
                    }
                    else{
                        e3=1;
                    }
                    if(l1==1 && l2==1 && l3 ==1){
                        pruebalink();
                    }else{
                        if(e1==1 && e2==0 && e3==0){
                            alert("Compruebe los datos e ingrese nuevamente 1")
                        }
                        if(e1==1 && e2==1 && e3==0){
                            alert("Compruebe los datos e ingrese nuevamente 2")
                        }
                        if(e1==1 && e2==0 && e3==1){
                            alert("Compruebe los datos e ingrese nuevamente 3")
                        }
                        if(e1==0 && e2==1 && e3==0){
                            alert("Compruebe los datos e ingrese nuevamente 4")
                        }
                        if(e1==0 && e2==1 && e3==1){
                            alert("Compruebe los datos e ingrese nuevamente 5")
                        }
                        if(e1==0 && e2==0 && e3==3){
                            alert("Compruebe los datos e ingrese nuevamente 6")
                        }
                        if(e1==1 && e2==1 && e3==1){
                            alert("Compruebe los datos e ingrese nuevamente sis")
                        }
                    }
                }
    }
    //Mensajes de Error

    /*if(e1==1 && e2==0 && e3==0){
        alert("Compruebe los datos e ingrese nuevamente 1")
    }
    if(e1==1 && e2==1 && e3==0){
        alert("Compruebe los datos e ingrese nuevamente 2")
    }
    if(e1==1 && e2==0 && e3==1){
        alert("Compruebe los datos e ingrese nuevamente 3")
    }
    if(e1==0 && e2==1 && e3==0){
        alert("Compruebe los datos e ingrese nuevamente 4")
    }
    if(e1==0 && e2==1 && e3==1){
        alert("Compruebe los datos e ingrese nuevamente 5")
    }
    if(e1==0 && e2==0 && e3==3){
        alert("Compruebe los datos e ingrese nuevamente 6")
    }
    if(e1==1 && e2==1 && e3==1){
        alert("Compruebe los datos e ingrese nuevamente sis")
    }

    //Datos correctos
    if(l1==1 && l2==1 && l3 ==1){
        pruebalink();
    }*/
}


//Envia a la pagina principal del proyecto, en mi caso lo cambie a inicio.html ya que ahora el login es el index.html
function pruebalink (){
    location.href="Formulario.html";
    alert("Usted a ingresado a su cuenta")
}


