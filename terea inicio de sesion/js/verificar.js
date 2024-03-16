class sesion{
    constructor(usuario,contraseña,user,password){
        this._usuario=usuario
        this._contraseña=contraseña
        this._user=user
        this._password=password
    }

    validar(){
        if(this._usuario!==this._user && this._contraseña!==this._password){
            alertify.success('Las credenciales no son correctas')
        }
        else if(this._usuario!==this._user){
            alertify.success('usuario invalido')
        }
        else if (this._contraseña!==this._password){
            alertify.success('contraseña invalida')
        }
        else{
            return true
        }
    }
}

class usuarios extends sesion{
    constructor(usuario,contraseña,user,password){
        super(usuario,contraseña,user,password)

    }


}

const boton=document.getElementById("ingresar")

boton.addEventListener("click",function(){
    let usuario=document.getElementById("usuario").value
    let contraseña=document.getElementById("contraseña").value

    const ivan=new usuarios(usuario,contraseña,"ivan","ivan123")

    if(ivan.validar()==true){
        alertify.success('iniciando sesion....')
        setTimeout(function() {
            window.location.href = 'crearPerfil.html';
        }, 1000);
        
    }
})