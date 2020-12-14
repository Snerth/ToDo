import React, { useState } from 'react'
import Input from './components/Input'
import AddButton from './components/AddButton'
import ToDoList from './containers/ToDoList'
import VisibilityFilter from './containers/VisibilityFilter'
import AddImportance from './components/AddImportance'

function App() {
  const [inputText, setInputText] = useState('')
  console.log(inputText)
  return (
    <>
      <Input inputText={inputText} setInputText={setInputText} />
      <AddImportance />
      <AddButton />
      <VisibilityFilter />
      <ToDoList />
    </>
  )
}

export default App
