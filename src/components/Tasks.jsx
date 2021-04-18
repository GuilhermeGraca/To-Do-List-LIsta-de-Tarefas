import React from 'react'

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
        {tasks.map((task, index) => (
            <div className="Tasks" key={index} onDelete={onDelete}>
                <p>{task.text}</p>
                <button onClick={() => onDelete(task.id)} ><i className="fa fa-trash fa-2x"></i></button>
            </div>
        ))}
        </>
    )
}
// O método .map() cria um Array com os resultados de uma função fornecida


export default Tasks
