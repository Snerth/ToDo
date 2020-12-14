import React, { useState } from 'react'
import Input from './components/Input'
import AddButton from './components/AddButton'
import ToDoList from './containers/ToDoList'
import VisibilityFilter from './containers/VisibilityFilter'
import ImportanceInput from './components/ImportanceInput'
import { createToDo } from './helpers/createToDo'

function App() {
  const [inputText, setInputText] = useState('')
  const [importance, setImportance] = useState(0)
  console.log('App rendered')
  return (
    <>
      <Input inputText={inputText} setInputText={setInputText} />
      <ImportanceInput importance={importance} setImportance={setImportance} />
      <AddButton createToDo={createToDo(inputText, importance)} />
      <VisibilityFilter />
      <ToDoList />
    </>
  )
}

export default App
