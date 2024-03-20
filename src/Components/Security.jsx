import {
  Box,
  TextField,
  Avatar,
  Typography,
  Button,
  Stack,
  createTheme,
  colors,
  ThemeProvider,
  Grid,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { orange } from "@mui/material/colors";
import imag from "../assets/pose-m-1.png"

const Security = () => {
 
  return (
    <div className="charts" >
      <Box
        sx={{
          background: "#fff",
          display: "flex",
          borderRadius: "8px",
          margin: "30px 30px 0px 0px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: {
              xs: 500,
              lg: 1400,
              xxl: 1400
          }
        }}
        p={4}
      >
         <Grid container spacing={2}  borderBottom={1} borderColor="#c0b0b0be" my={4} >
         <Grid item xs={6} direction="column"> 
         <TextField
          id="outlined-basic"
          label="Current Password"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%", marginBottom: "20px" }}
        />

        <TextField
          id="outlined-basic"
          label="New Password"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%", marginBottom: "20px" }}
        />

        <TextField
          id="outlined-basic"
          label="Confirm New Password"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%", marginBottom: "60px" }}
        />
        </Grid>

        <Grid item xs={6} direction="column"> 
          <div className="images">
       <img src={imag} alt="img" />
          </div>
         </Grid>
         </Grid>
          
        <Avatar sx={{ bgcolor: " #7c29ac", margin: "auto" }} variant="rounded">
          <LockIcon color="white" />
        </Avatar>

        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "5px" }}
        >
          Two factor authentication is not enabled yet.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            maxWidth: "380px",
            width: "100%",
            margin: "auto",
          }}
        >
          Two-factor authentication adds an additional layer of security to your
          account by requiring more than just a password to log in. Learn more.
        </Typography>

        <Stack direction="row" spacing={2} mt={5}>
          <Button variant="contained" color="secondary">
            Save change
          </Button>
          <Button variant="outlined" color="secondary">
            Reset
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Security;
