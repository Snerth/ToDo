import React from 'react'
import '../css/ToDo.css'
import Edit from '../Edit.svg'
import Remove from '../Remove.svg'
import { ToDoContext } from '../utils/context'
import { valueToNode } from '@babel/types'

class ToDo extends React.Component {
  
    static contextType = ToDoContext
    componentDidMount() {           
        const existingTodos = JSON.parse(localStorage.todos)
        this.context.fetchTodos(existingTodos)
    }
    componentWillUnmount() {
        let value = this.context.inputValue
        console.log("i will unmount, todos: " + this.context.inputValue)
        localStorage.setItem("inputValue", JSON.stringify(value))
    }
    render() {
        return(                        
            <>   
                <ToDoContext.Consumer>{ ({todos}) => {
                    return (
                        <div className="ToDo">
                            {todos.map((e, i) => { 
                                return (
                                    <p className="toDo">
                                        {e.title}
                                        <button>
                                            <img className="Icon" src={Remove} alt="Remove ToDo"/>
                                        </button>
                                        <button>
                                            <img className="Icon" src={Edit} alt="Edit ToDo"/>
                                        </button>
                                    </p>
                                )
                            })} 
                            
                        </div>
                    )}}
                </ToDoContext.Consumer>    
                {/* <div className="ToDo">
                    {this.state.todos.map((e, i) => { 
                        return (
                            <p className="toDo">
                                {e.title}
                                <button>
                                    <img className="Icon" src={Remove} alt="Remove ToDo"/>
                                </button>
                                <button>
                                    <img className="Icon" src={Edit} alt="Edit ToDo"/>
                                </button>
                            </p>
                        )
                    })} 
                            
                </div> */}
            </>
          
        )
    }

}

export default ToDo