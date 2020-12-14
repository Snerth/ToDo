import * as t from './actionTypes'

export const add = (todo) => ({
  type: t.ADD,
  payload: todo
})

export const remove = (id) => ({
    type: t.REMOVE,
    payload: id
})

export const edit = (id) => ({
    type: t.EDIT,
    payload: id
})

export const save = (id, todo) => ({
    type: t.SAVE,
    payload: {id, todo}
})

export const cancel = (id) => ({
    type: t.CANCEL,
    payload: id
})

export const complete = (id) => ({
    type: t.COMPLETE,
    payload: id
})

export const completeAll = () => ({
    type: t.COMPLETE_ALL
})

export const removeAll = () => ({
    type: t.REMOVE_ALL
})