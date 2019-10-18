import React, { Component } from 'react'
import '../css/Input.css'
class Input extends Component {
    render() {
        return(
            <div className="Top">
                <input className="Input" type="text" placeholder="Add ToDo..."/>
                <button className="Add">Add</button>

            </div>
        )
    }
}

export default Input