import React from 'react'

const PendingTasks = ({ nTasks, Clear }) => {
    return (
        <div className="PendingTasks" Clear={Clear} >
            <p>Tens {nTasks} tarefas pendentes.</p>
            <button onClick={Clear}>Limpar Tudo</button>
        </div>
    )
}

export default PendingTasks
