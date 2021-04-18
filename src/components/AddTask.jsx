import { useState } from 'react'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert("Por favor adiciona uma tarefa")
            return
        }
        onAdd({ text })
        setText("")
    }

    return (
        <div className="AddTask">
            <form action="#" onSubmit={onSubmit}>
                <input type="text" placeholder="Adiciona uma tarefa... " value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit" value="Submit" >
                    <i className="fa fa-plus fa-3x"></i>
                </button>
            </form>
        </div>
    )
}

export default AddTask
