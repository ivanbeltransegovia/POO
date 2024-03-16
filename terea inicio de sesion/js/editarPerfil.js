

    const perfil1 = JSON.parse(localStorage.getItem('perfil'));

    console.log(perfil1)
document.getElementById("nombre").value = perfil1.nombre;
document.getElementById("fecha").value = perfil1.fecha;
document.getElementById("genero").value= perfil1.genero;
document.getElementById("departamento").value = perfil1.departamento;
document.getElementById("ciudad").value = perfil1.ciudad;
document.getElementById("telefono").value = perfil1.telefono;
document.getElementById("descripcion").innerText = perfil1.descripcion;
    
const btn=document.getElementById("BTNconfirmar")
btn.addEventListener("click",function(){
    
    perfil1.nombre = document.getElementById("nombre").value
    perfil1.fecha = document.getElementById("fecha").value
    perfil1.genero = document.getElementById("genero").value
    perfil1.departamento = document.getElementById("departamento").value
    perfil1.ciudad = document.getElementById("ciudad").value
    perfil1.telefono = document.getElementById("telefono").value
    perfil1.descripcion = document.getElementById("descripcion").value
   
    localStorage.setItem('perfil', JSON.stringify(perfil1))
    window.location.href=`mostrarPerfil.html`
    
})

