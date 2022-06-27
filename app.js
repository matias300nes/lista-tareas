input = document.getElementById("tarea-input")
btnAgregar = document.getElementById("btn-agregar")
tareas = document.getElementById("tareas")
chkTema = document.getElementById("chkTema")

btnAgregar.addEventListener('click', (e)=>{
    //esto se ejecuta cuando se haga click en el boton
    e.preventDefault()
    
    nuevaTarea = document.createElement("div")
    nuevaTarea.classList.add("contenedor-tarea")
    nuevaTarea.setAttribute("id", 1)
    nuevaTarea.innerHTML = `
        <input class="checkbox" type="checkbox">
        <p class="cuerpo-tarea">${input.value}</p>
        <button onClick="this.parentNode.remove()" class="btn-eliminar">
            <img src="./static/basura.svg" alt="Eliminar">
        </button>
    `

    tareas.appendChild(nuevaTarea)
})

chkTema.addEventListener('click', (e)=>{
    root = document.querySelector(":root")
    if(chkTema.checked){
        root.style.setProperty("--color1", "#3f3f3f")
        root.style.setProperty("--color2", "#fff")
        root.style.setProperty("--color3", "#262626")
        root.style.setProperty("--color4", "#EAEAEA")
        root.style.setProperty("--color5", "#9C9C9C")
    }else{
        root.style.setProperty("--color1", "#fff")
        root.style.setProperty("--color2", "#000")
        root.style.setProperty("--color3", "#EAEAEA")
        root.style.setProperty("--color4", "#3f3f3f")
        root.style.setProperty("--color5", "#9C9C9C")
    }
})