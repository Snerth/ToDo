import * as vf from './actionTypes'

export const changeVisibilityFilter = (filter) => ({
    type: vf.CHANGE_FILTER,
    payload: filter
})