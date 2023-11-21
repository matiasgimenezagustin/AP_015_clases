import React, { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({addTask}) => {

    const [openModal, setOpenModal] = useState(false)
    const handleOpenNewTaskModal = () =>{
        setOpenModal(true)
    }
    const handleCloseNewTaskModal = () =>{
        setOpenModal(false)
    }

    const handleAddNewTask = (e) =>{
        e.preventDefault()
        const {title, description } = e.target
        if(title.value && description.value){
            addTask({
                title: title.value, 
                description: description.value,
                id: Math.random() + title.value,
                createdAt: new Date().toLocaleString()
            })
        }
        handleCloseNewTaskModal()

    }
  return (
    <div>
        <button onClick={handleOpenNewTaskModal}>Nueva Tarea</button>
        {openModal && (
            <div className='modal-background'>
                <div className='modal'>
                    <h2>Agregar nueva tarea</h2>
                    <form onSubmit={handleAddNewTask}>
                        <div>
                            <label htmlFor='title'>Ingrese el titulo:</label>
                            <input placeholder='Titulo ejemplo' id='title' name='title'/>
                        </div>
                        <div>
                            <label htmlFor='description'>Ingrese la descripcion:</label>
                            <textarea placeholder='Titulo ejemplo' id='description' name='description'></textarea>
                        </div>
                        <div>
                            <button type='submit'>Agregar</button>
                            <button onClick={handleCloseNewTaskModal}>Cancelar</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        ) }
    </div>
  )
}

export default TaskForm


