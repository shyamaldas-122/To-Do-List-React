//two step to use:-
//create context
//use context => no need provider
import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo:(id)=>{},
    toggleComplete: (id) => {}
    
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

//exporting provider
export const TodoProvider=TodoContext.Provider