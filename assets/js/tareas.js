const ingresoTareas = document.querySelector('#inputItems')
const btnAgregar = document.querySelector('#btnAdd')
const listaTareas = document.querySelector('#listItems')
const realizadas = document.getElementById('completed')
const total = document.getElementById('total')

const tareas = [
    { id: 10001, descripcion: 'Salir a correr', completado: false },
    { id: 10002, descripcion: 'Pasear a mi perro', completado: false },
    { id: 10003, descripcion: 'Lavar mi ropa', completado: false }
]

// Evento clickeable para agregar nuevas tareas
btnAgregar.addEventListener('click', () => {
    if(ingresoTareas.value === '') return
    tareas.push({ id: Date.now(), descripcion: ingresoTareas.value.trim(), completado: false })
    ingresoTareas.value = ''
    mostrarTareas()
})

// Modificación de estado de tareas
const cambiarEstado = (id) => {
    const tareaEncontrada = tareas.find( tarea => tarea.id === id)
    tareaEncontrada.completado = true
}

// Renderización de tareas
const mostrarTareas = () => {
    let html = ''
  
    tareas.forEach((tarea) => {
        html += `<tr>
                    <td style='width: 100px; text-align: center'>${tarea.id}</td>  
                    <td style='width: 200px; text-align: center'>${tarea.descripcion}</td>  
                    <td style='width: 25px; text-align: center'><input type='checkbox' onclick='cambiarEstado(${tarea.id})'></td>
                    <td style='width: 60px'><button onclick='eliminarTarea(${tarea.id})'>Eliminar</button></td>
                </tr>`
    })

    listaTareas.innerHTML = html

    // Conteo de tareas totales
    total.textContent = `Total: ${tareas.length}`
}

// Eliminación de tareas
const eliminarTarea = (id) => {
    const index = tareas.findIndex( tarea => tarea.id === id )
    tareas.splice(index, 1)
    mostrarTareas()
}

mostrarTareas()




