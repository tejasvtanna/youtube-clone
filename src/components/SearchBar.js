import React, { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'

export default ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('')

    // const handleChange = (event) => setSearchTerm(event.target.value)

    const handleKeyPress = (event) => {
        console.log('onKeyPress')

        if (event.key === 'Enter') {
            onSubmit(searchTerm)
        }
    }

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <TextField
                fullWidth
                label="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </Paper>
    )
}
