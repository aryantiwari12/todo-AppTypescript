import React from 'react'

import TodoList from '../TodoList/TodoList'

const TodoApp = () => {

   

    const initalTodos=[
        {
            id:'3145',
            task:"Go to gym",
            complete:false

        },
        {
            id:'3147',
            task:"hello aryan",
            complete:true
        },
        {
            id:'3145',
            task:"hello ksihan",
            complete:true 
        }
    ]

  return (
    <div>TodoApp
        <TodoList todos ={initalTodos}/>
        
    </div>
  )
}

export default TodoApp