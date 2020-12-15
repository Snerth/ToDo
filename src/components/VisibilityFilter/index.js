import React from 'react'
import { buttons } from '../../helpers/visibilityFilterButtons'
import VisibilityFilterButton from '../VisibilityFilterButton'
import './style.css'

const VisibilityFilterComponent = ({ changeVisibilityFilter, visibilityFilter }) => {
    console.log('VisibilityFilterComponent rendered')

    return <div className='visibility-filter'>
        {
            buttons.map(button => {
                const { buttonName, action } = button
                const isActive = buttonName === visibilityFilter
                return <VisibilityFilterButton
                    key={buttonName}
                    buttonName={buttonName}
                    handleClick={() => changeVisibilityFilter(action)}
                    isActive={isActive}
                />
            })
        }
    </div>
}

export default VisibilityFilterComponent