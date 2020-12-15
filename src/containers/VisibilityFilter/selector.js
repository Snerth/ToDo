import { createSelector } from 'reselect'

const getVisibilityFilter = state => state.VisibilityFilter 

export const selectVisibilityFilter = createSelector(
    [getVisibilityFilter],
    (filter) => {
        return {
            'VisibilityFilter/SHOW_ALL': () => 'All',
            'VisibilityFilter/SHOW_ACTIVE': () => 'Active',
            'VisibilityFilter/SHOW_COMPLETED': () => 'Completed'
        }[filter]()
    }
)