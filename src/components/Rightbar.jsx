import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box sx={{
            flex: 1,
            backgroundColor: 'blue',
            p : 3,
            display: { xs: 'none', sm: 'block' }
        }}>
            Sidebar
        </Box>
    )
}

export default Rightbar