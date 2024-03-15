document.addEventListener("DOMContentLoaded", function () {
   
    const perfilGuardado = JSON.parse(localStorage.getItem('perfil'));

        document.getElementById("nombre").innerText = perfilGuardado.nombre;
        document.getElementById("fecha").innerText = perfilGuardado.fecha;
        document.getElementById("genero").innerText = perfilGuardado.genero;
        document.getElementById("departamento").innerText = perfilGuardado.departamento;
        document.getElementById("ciudad").innerText = perfilGuardado.ciudad;
        document.getElementById("telefono").innerText = perfilGuardado.telefono;
        document.getElementById("descripcion").innerText = perfilGuardado.descripcion;
    
});