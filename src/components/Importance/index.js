import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Importance = ({ importance }) => <ProgressBar striped variant="info" now={importance} max={5} min={0} style={{height: '5px'}} />
    
export default Importance