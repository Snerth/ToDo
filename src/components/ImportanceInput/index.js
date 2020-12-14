import React, { memo } from 'react'

const ImportanceInput = ({ importance, setImportance }) => {
    console.log('ImportanceInput rendered')
    return <input
        type='text'
        placeholder='0'
        value={importance}
        onChange={(e) => setImportance(e.target.value)}
    />
}

export default memo(ImportanceInput)