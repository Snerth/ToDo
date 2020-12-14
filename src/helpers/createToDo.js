export const createToDo = (inputText, importance) => ({
    id: Math.random(),
    title: inputText,
    completed: false,
    importance: importance,
    isEdited: false
})