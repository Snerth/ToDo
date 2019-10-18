import React from 'react'

function Info () {
    return (
        <div className="Info">
            <h1>Components' Lifecycles</h1>
            <h3>Functions of each Phase of Lifecycle</h3>
            <p>Initialization: In this phase the developer has to define the props and initial state ofthe component this is generally done in the constructor of the component. The following code snippet describes the initialization process.</p>
            <p>Mounting: Mounting is the phase of the component lifecyle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time in the webpage. Now React follows a default procedure in the Naming Conventions of this predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. Mounting phase consists of two such predefined functions as described below.</p>
            <p>componentWillMount() Function: As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.</p>
            <p>componentDidMount() Function: Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time.</p>
            <p>Updation: React is a JS library that helps create Active web pages easily. Now active web pages are specific pages that behave according to its user. For example, let’s take the GeeksforGeeks IDE webpage, the webpage acts differently with each user. User A might write some code in C in the Light Theme while another User may write a Python code in the Dark Theme all at the same time. This dynamic behavior that partially depends upon the user itself makes the webpage an Active webpage. Now how can this be related to Updation? Updation is the phase where the states and props of a component are updated followed by some user events such as clicking, pressing a key on keyboard etc. The following are the descriptions of functions that are invoked at different points of Updation phase.</p>
            <p>componentWillRecieveProps() Function: This is a Props exclusive Function and is independent of States. This function is invoked before a mounted component gets its props reassigned. The function is passed the new set of Props which may or may not be identical to the original Props. Thus checking is a mandatory step in this regards. The following code snippet shows a sample use-case.</p>
            <p>setState() Function: This is not particularly a Lifecycle function and can be invoked explicitly at any instant. This function is used to update the State of a component. You may refer to this article for detailed information.</p>
            <p>shouldComponentUpdate() Function: By default, every state or props update re-render the page but this may not always be the desired outcome, sometimes it is desired that on updating the page will not be repainted. The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received. If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.</p>
            <p>componentWillUpdate() Function: As the name clearly suggests, this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.</p>
            <p>componentDidUpdate() Function: Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.</p>
            <p>Unmounting: This is the final phase of the lifeycle of the component that is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.</p>
            <p>componentWillUnmount() Function: This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.</p>
        </div>
    )
    
}

export default Info