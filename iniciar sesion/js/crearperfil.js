class Perfiles {
    constructor(nombre, fecha, genero, departamento, ciudad, telefono, descripcion) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.genero = genero;
        this.departamento = departamento;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.descripcion = descripcion;
    }

    obtenerDatos() {
        return this.nombre && this.fecha && this.genero && this.departamento && this.ciudad && this.telefono && this.descripcion;
    }

    validarDatos() {
        return this.obtenerDatos();
    }
}

const btn = document.getElementById("BTNcrear");

btn.addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let genero = document.getElementById("genero").value;
    let departamento = document.getElementById("departamento").value;
    let ciudad = document.getElementById("ciudad").value;
    let telefono = document.getElementById("telefono").value;
    let descripcion = document.getElementById("descripcion").value;

    const perfil1 = new Perfiles(nombre, fecha, genero, departamento, ciudad, telefono, descripcion);

    if (perfil1.validarDatos()) {
        localStorage.setItem('perfil', JSON.stringify(perfil1));
        alertify.success('creando perfil....')
        setTimeout(function() {
            window.location.href = 'mostrarPerfil.html';
        }, 2000);
    } else {
        alertify.success('datos invalidos')
    }
});
