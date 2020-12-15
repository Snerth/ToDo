import * as vf from './VisibilityFilters'

export const buttons = [
    {   
        buttonName: 'All',
        action: vf.showAll
    },
    {
        buttonName: 'Active',
        action: vf.showActive
    }, 
    {
        buttonName: 'Completed',
        action: vf.showCompleted
    }
]