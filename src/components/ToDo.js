import React from 'react'
import '../css/ToDo.css'
import Edit from '../Edit.svg'
import Remove from '../Remove.svg'
import { UserConsumer } from '../utils/context'

class ToDo extends React.Component {
    static contextType = UserConsumer
    componentDidMount() {        
        const existingTodos = JSON.parse(localStorage.todos).todos
 

    }
    render() {
        
        return(                        
            <>                
                <UserConsumer>{ ({todos}) => {
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
                </UserConsumer>                   
               
            </>
          
        )
    }

}

export default ToDo