import React from 'react';
import {Box, Typography} from "@mui/material";

const NotFound = () => {
    return (
        <div>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "20vh"}}>
                <Typography variant="h1" color="black">404</Typography>
            </Box>

        </div>
    );
};

export default NotFound;
