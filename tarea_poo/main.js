class pedidos{
    constructor(comida,bebida){
        this._comida=comida
        this._bebida=bebida
    }
}

class clientes extends pedidos{
    constructor(nombre,comida,bebida,cantidadComida,cantidadBebida){
        super(comida,bebida)
        this.nombre=nombre
        this._cantidadComida=cantidadComida
        this._cantidadBebida=cantidadBebida
    }
    enviar(){
        div.innerHTML=
        `<table border="1">
        <tr>
          <th colspan="2">cliente: ${this.nombre}</th>
        </tr>
        <tr>
          <td>producto</td>
          <td>cantidad</td>
        </tr>
        <tr>
          <td>${this._comida}</td>
          <td>${this._cantidadComida}</td>
        </tr>
        <tr>
          <td>${this._bebida}</td>
          <td>${this._cantidadBebida}</td>
        </tr>
        
      </table>
      <br><br>
      <h4>total de productos pedidos: ${this._cantidadComida+this._cantidadBebida}</4>`


    }
    validardatos(){
        if (this.nombre =="") {
            alert("Por favor, ingrese su nombre para saber quién hace el pedido.");
        } else if (this._cantidadComida == "" || this._cantidadBebida == "") {
            alert("Error: Seleccione al menos una bebida y un alimento, por favor.");
        } 
        return true
    }
}

class estados{
    constructor(procesando,listo){
        this.procesando=procesando
        this.listo=listo
    }
    estadoListo(){
        divEstado.innerHTML=
        `<h4>Estado del pedido: ${this.listo}</h4>`

    }
    estadoProcesando(){
        divEstado.innerHTML=
        `<h4>Estado del pedido: ${this.procesando}</h4>`
    }
}

const estadoPedido= new estados("procesando","listo")

const botonEnviar=document.getElementById("btnPedir")
const botonDespachar=document.getElementById("despachar")
const div=document.getElementById("tablita")
const divEstado=document.getElementById("estado")
const entregartext=document.getElementById("entregar")

botonEnviar.addEventListener("click",function(){

let nombre=document.getElementById("nombre").value
let comida=document.getElementById("opcionComida").value
let bebida=document.getElementById("opcionBebida").value
let cantidadBebida=Number(document.getElementById("cantidadBe").value)
let cantidadComida=Number(document.getElementById("cantidadCo").value)

const cliente1= new clientes(nombre,comida,bebida,cantidadComida,cantidadBebida)


if(cliente1.validardatos()==false){
    alert("corrija datos")
}else{cliente1.enviar()
    estadoPedido.estadoProcesando()}

entregartext.innerText=""

botonDespachar.addEventListener("click",function(){
    estadoPedido.estadoListo()
    div.innerHTML=`<h4>fin pedido sacado</h4>`
    entregartext.innerText=`Comida: ${cliente1._comida}, Cantidad: ${cliente1._cantidadComida}
    Bebida: ${cliente1._bebida}, Cantidad: ${cliente1._cantidadBebida}

   ¡¡¡ buen provecho !!!!`
    
})
})







