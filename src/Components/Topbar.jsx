import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import ThemeSwitcher from "./Switch"

const Topbar = () => {
  return (
    <div className="topbar">
           <ThemeSwitcher/>
           <IconButton aria-label="delete">
  <NotificationsNoneIcon />
</IconButton>

<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>

    </div>
  );
};

export default Topbar;