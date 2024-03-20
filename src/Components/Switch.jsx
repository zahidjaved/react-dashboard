import React, { useState } from 'react';
import { Switch, FormControlLabel, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Create theme based on the selected mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
        label={isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
      />
   
    </ThemeProvider>
  );
}

export default ThemeSwitcher;
