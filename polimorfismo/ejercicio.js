class carros{
    constructor(marca,modelo,motor){
        this._marca=marca
        this._modelo=modelo
        this._motor=motor
    }
    mostrarCarro(){
        return console.log(`carro ${this._marca} ${this._modelo} con motor ${this._motor}` )

    }
}

class carroToyota extends carros{
    mostrarCarro(){
        return console.log(`carro ${this._marca} ${this._modelo} con motor ${this._motor} es un carro familiar` )
    }
}

class carrosHonda extends carros{
    mostrarCarro(){
        return console.log(`carro ${this._marca} ${this._modelo} con motor ${this._motor} es un carro familiar deportivo`)
    }
}

class carrosSubaru extends carros{
    mostrarCarro(){
        return console.log(`carro ${this._marca} ${this._modelo} con motor ${this._motor} es un carro deportivo`)
    }
}

const toyota1=new carroToyota("toyota","corola","1ZZ-FE")
const honda1=new carrosHonda("Honda","civic","k24A4")
const subaru1= new carrosSubaru("Subaru","brz","FA20")

toyota1.mostrarCarro()
honda1.mostrarCarro()
subaru1.mostrarCarro()
