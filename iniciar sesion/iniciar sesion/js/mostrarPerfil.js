// mostrar perfil
    const perfil1 = JSON.parse(localStorage.getItem('perfil'));

        document.getElementById("nombre").innerText = perfil1.nombre;
        document.getElementById("fecha").innerText = perfil1.fecha;
        document.getElementById("genero").innerText = perfil1.genero;
        document.getElementById("departamento").innerText = perfil1.departamento;
        document.getElementById("ciudad").innerText = perfil1.ciudad;
        document.getElementById("telefono").innerText = perfil1.telefono;
        document.getElementById("descripcion").innerText = perfil1.descripcion;
    

        console.log(perfil1)
const btn=document.getElementById("editar")

btn.addEventListener("click",function(){
    window.location.href=`editar.html`
})