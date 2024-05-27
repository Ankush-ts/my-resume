import React, { useState } from 'react';
import { AppBar, Box, Tabs, Tab, Toolbar, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <AppBar position='sticky' sx={{ bgcolor: 'primary' }}>
            <Toolbar>
                <Box >
                    <NavLink
                        to={'/'}
                        onClick={() => setValue(0)}
                    >
                        <Typography variant="h5" color="inherit">
                            Resume Builder
                        </Typography>
                    </NavLink>


                </Box>

                <Box display={'flex '} flexGrow={1} justifyContent="flex-end">
                    <Tabs textColor='inherit'
                        onChange={handleChange}
                        value={value}>

                        <Tab LinkComponent={Link} to="/" label={"Resume Templates"} />
                        <Tab LinkComponent={Link} to="/myresume" label={"My Resumes"} />
                        <Tab LinkComponent={Link} to="/about" label={"About Us"} />

                    </Tabs>
                </Box>

            </Toolbar>

        </AppBar>
    );
};

export default Header;

