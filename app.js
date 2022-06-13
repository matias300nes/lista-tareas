console.log("Hola mundo")


input = document.getElementById("tarea-input")
btnAgregar = document.getElementById("btn-agregar")
tareas = document.getElementById("tareas")

btnAgregar.addEventListener('click', (e)=>{
    //esto se ejecuta cuando se haga click en el boton
    e.preventDefault()
    
    nuevaTarea = document.createElement("div")
    nuevaTarea.classList.add("contenedor-tarea")
    nuevaTarea.setAttribute("id", 1)
    nuevaTarea.innerHTML = `
        <input class="checkbox" type="checkbox">
        <p class="cuerpo-tarea">${input.value}</p>
        <button class="btn-eliminar">
            <img src="./static/basura.svg" alt="Eliminar">
        </button>
    `

    tareas.appendChild(nuevaTarea)

})