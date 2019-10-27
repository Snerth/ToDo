import React from 'react'
import '../css/ToDo.css'
import Edit from '../Edit.svg'
import Remove from '../Remove.svg'
import { ToDoContext } from '../utils/context'
import { valueToNode } from '@babel/types'
class EditInput extends React.Component {
    componentDidMount() {
        this._editInput.focus()
    }
    render() {
        return(
            <>
                <input
                    ref={ element => this._editInput = element }
                    type="text"
                    placeholder={this.props.placeholder}
                />
                <input
                    type="submit"
                    value="OK"
                />
                <input 
                    type="submit"
                    value="Cancel"
                />
            </>
        )
    }
}
class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEditInput: false,
            EditInputId: null
        }
    }

    static contextType = ToDoContext
    componentDidMount() {  
        // const defaultStorageValue = [{id: null, title: ''}]
        // localStorage.setItem("todos", JSON.stringify(defaultStorageValue))         
        console.log("ToDo did mount")
        console.log(this.context)
        JSON.parse(localStorage.todos)
        // console.log(existingTodos)
        // this.context.fetchTodos(existingTodos)
    }
    componentWillUnmount() {
        
        console.log("i will unmount, todos: " + this.context.todos)
        // localStorage.setItem("inputValue", JSON.stringify(value))
        let existingTodos = JSON.stringify(this.context.todos)
        localStorage.setItem("todos", existingTodos)
    }
    handleMouseOverRemove = () => {
        
    }
    handleMouseOutRemove = () => {
        
    }
    handleMouseOverEdit = () => {
       
    }
    handleMouseOutEdit = () => {
        
    }
    editTodo = (id) => {
        this.setState({
            showEditInput: true,
            EditInputId: id
        }) 
        
        
    }
    render() {
        console.log("ToDo context:")
        console.log(this.context)
        let self = this
        return(                        
            <>   
                <ToDoContext.Consumer>{ ({todos}) => {
                   
                 
                    return (
                        <div className="ToDo">
                            {todos.map((e, i) => { 
                                return (
                                    <p className="toDo" key={e.id}>
                                        {this.state.showEditInput && i == this.state.EditInputId - 1 ?                                             
                                            <EditInput 
                                                placeholder={e.title}
                                            />
                                            :
                                            <>{e.title}</>
                                        }
                                        <button>
                                            <img 
                                                className="Icon" 
                                                src={Remove} 
                                                alt="Remove ToDo"
                                                ref={ remove => self._remove = remove }
                                                onMouseOver={this.handleMouseOverRemove}
                                                onMouseOut={this.handleMouseOutRemove}
                                            />
                                        </button>
                                        <button>
                                            <img 
                                                className="Icon" 
                                                src={Edit} 
                                                alt="Edit ToDo"
                                                ref={ edit => self._edit = edit }
                                                onMouseOver={this.handleMouseOverEdit}
                                                onMouseOut={this.handleMouseOutEdit}
                                                onClick={() => this.editTodo(e.id)}
                                            />
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