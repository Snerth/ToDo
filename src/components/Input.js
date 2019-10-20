import React, { Component } from 'react'
import '../css/Input.css'
import { ToDoContext } from '../utils/context'



class Input extends React.Component {
    static contextType = ToDoContext     

    render() {   
        console.log(this.context)
        return(
            <>
            
            
            
            <div className="Top">
                
                <input 
                    className="Input" 
                    type="text" 
                    placeholder="Add ToDo..."
                    onChange={this.context.handleInput}

                />
                <button className="Add" >
                     Add</button>
                
            </div>
                
            </>
        )
    }
}

export default Input