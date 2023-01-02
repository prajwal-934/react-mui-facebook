import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
    return (
        <Box sx={{
            flex: 1,
            backgroundColor: 'yellow',
            p :3,
            display: { xs: 'none', sm: 'block' }
        }}>
            Sidebar
        </Box>
    )
}

export default Sidebar