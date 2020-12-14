import React from 'react'
// import { edit } from '../../containers/ToDoList/actions'
import './style.css'

const Input = ({ inputText, setInputText }) =>
    <input
        className="todo-input"
        type="text"
        placeholder="Add ToDo..."
        value={inputText}
        onChange={e => setInputText(e.target.value)}
    // ref={input => this._input = input}
    />

export default Input

// class Input extends React.Component {
//     componentDidMount() {
//         this.setInputFocus()
//     }
//     static contextType = ToDoContext     
//     setInputFocus = () => {
//         this._input.focus()
//     }
//     clearInputValue = () => {
//         this._input.value = ''
//     }
//     render() {
//         return(
//             <>
//                 <div className="Top">                    
//                     <input 
//                         className="Input" 
//                         type="text" 
//                         placeholder="Add ToDo..."
//                         onChange={this.context.handleInput}
//                         ref = { input => this._input = input }
//                     />
//                     <button 
//                         className="Add"
//                         onClick={() => {
//                             this.clearInputValue()
//                             this.setInputFocus()
//                             this.context.addToDo()
//                         }}
//                     >Add</button>                    
//                 </div>                
//             </>
//         )
//     }
// }

// export default Input