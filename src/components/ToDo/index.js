import React from 'react'
import CompleteButton from '../CompleteButton'
import EditButton from '../EditButton'
import EditInput from '../EditInput'
import Importance from '../Importance'
import RemoveButton from '../RemoveButton'
import './style.css'

const ToDoComponent = ({ todo, cancel, complete, save, newToDoTitle, setNewToDoTitle }) => {
    return <li className='todo'>
        {
            todo.isEdited ?
                <div>
                    <EditInput newToDoTitle={newToDoTitle} setNewToDoTitle={setNewToDoTitle} />
                    <button onClick={() => cancel(todo.id)} >Cancel</button>
                    <button onClick={() => save(todo.id, newToDoTitle)} >Save</button>
                </div>
                :
                <p className='todo-title'>{todo.title}</p>
        }
        <Importance importance={todo.importance} />
        <EditButton id={todo.id} />
        <RemoveButton id={todo.id} />
        <CompleteButton todoId={todo.id} handleClick={complete} />
    </li>
}

export default ToDoComponent

// import Edit from '../Edit.svg'
// import Remove from '../Remove.svg'
// import { ToDoContext } from '../utils/context'

// class EditInput extends React.Component {
//     static contextType = ToDoContext
//     handleEdit = e => {
//         this.context.inputvalue = e.target.value
//     }
//     componentDidMount() {
//         this._editInput.focus()
//     }
//     render() {
//         let inputStyle={
//             margin: "0px 10px",
//             backgroundColor: "transparent",
//             outline: "none",
//             border: "none",
//             borderBottom: "1px solid black",
//             width: "50%"
//         }
//         let submitStyle={
//             color: "rgb(235, 235, 235)",
//             margin: "0px 2px",
//             backgroundColor: "rgb(187, 159, 214)",
//             padding: "5px",
//             width: "60px",
//             border: "none",
//             borderRadius: "10px"
//         }
//         return(
//             <>
//                 <input
//                     style={inputStyle}
//                     ref={ element => this._editInput = element }
//                     type="text"
//                     placeholder={this.props.placeholder}
//                     onChange={this.handleEdit}
//                 />
//                 <input
//                     style={submitStyle}
//                     type="submit"
//                     value="OK"
//                     onClick={() => {
//                         this.context.editToDo(this.props.EditInputId)
//                         this.props.hideInput()
//                     }}
//                 />
//                 <input 
//                     style={submitStyle}
//                     type="submit"
//                     value="Cancel"
//                     onClick={() => this.props.hideInput()}
//                 />
//             </>
//         )
//     }
// }
// class ToDo extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             showEditInput: false,
//             EditInputId: null
//         }
//     }
//     static contextType = ToDoContext
//     componentDidMount() {  
//         let existingTodos = []
//         if(localStorage.length !== 0)
//             existingTodos = JSON.parse(localStorage.getItem("todos"))
//         this.context.fetchTodos(existingTodos)
//     }
//     componentWillUnmount() { 
//         let existingTodos = JSON.stringify(this.context.todos)
//         console.log(existingTodos)
//         localStorage.setItem("todos", existingTodos)
//     }
//     // handleMouseOverRemove = () => {

//     // }
//     // handleMouseOutRemove = () => {

//     // }
//     // handleMouseOverEdit = () => {

//     // }
//     // handleMouseOutEdit = () => {

//     // }
//     editTodo = (id) => {
//         this.setState({
//             showEditInput: true,
//             EditInputId: id
//         }) 
//     }
//     hideInput = () => {
//         this.setState({showEditInput: false})
//     }

//     render() {
//         return(                        
//             <>   
//                 <ToDoContext.Consumer>{ ({todos}) => {
//                     return (
//                         <div className="ToDo">
//                             {todos.map((e, i) => { 
//                                 return (
//                                     <p className="toDo" key={e.id}>
//                                         {this.state.showEditInput && e.id === this.state.EditInputId ?                                             
//                                             <EditInput
//                                                 EditInputId={this.state.EditInputId} 
//                                                 placeholder={e.title}
//                                                 hideInput={this.hideInput}
//                                             />
//                                             :
//                                             <>{e.title}</>
//                                         }
//                                         <button>
//                                             <img 
//                                                 className="Icon" 
//                                                 src={Remove} 
//                                                 alt="Remove ToDo"
//                                                 ref={ remove => this._remove = remove }
//                                                 onMouseOver={this.handleMouseOverRemove}
//                                                 onMouseOut={this.handleMouseOutRemove}
//                                                 onClick={() => this.context.removeToDo(e.id)}
//                                             />
//                                         </button>
//                                         <button>
//                                             <img 
//                                                 className="Icon" 
//                                                 src={Edit} 
//                                                 alt="Edit ToDo"
//                                                 ref={ edit => this._edit = edit }
//                                                 onMouseOver={this.handleMouseOverEdit}
//                                                 onMouseOut={this.handleMouseOutEdit}
//                                                 onClick={() => this.editTodo(e.id)}
//                                             />
//                                         </button>
//                                     </p>
//                                 )
//                             })} 

//                         </div>
//                     )}}
//                 </ToDoContext.Consumer>    
//             </>

//         )
//     }

// }

// export default ToDo