import React from 'react'
import '../css/Input.css'
import { ToDoContext } from '../utils/context'

class Input extends React.Component {
    componentDidMount() {
        this.setInputFocus()
    }
    static contextType = ToDoContext     
    setInputFocus = () => {
        this._input.focus()
    }
    clearInputValue = () => {
        this._input.value = ''
    }
    render() {
        return(
            <>
                <div className="Top">                    
                    <input 
                        className="Input" 
                        type="text" 
                        placeholder="Add ToDo..."
                        onChange={this.context.handleInput}
                        ref = { input => this._input = input }
                    />
                    <button 
                        className="Add"
                        onClick={() => {
                            this.clearInputValue()
                            this.setInputFocus()
                            this.context.addToDo()
                        }}
                    >Add</button>                    
                </div>                
            </>
        )
    }
}

export default Input