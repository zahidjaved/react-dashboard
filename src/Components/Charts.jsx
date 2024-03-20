import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SquareIcon from "@mui/icons-material/Square";
import PaidIcon from '@mui/icons-material/Paid';
const Charts = () => {
  return (
    <div className="charts">
      <Grid container my={0} spacing={4}>
        <Grid item xs={6}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <AccessTimeFilledIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>Company Exchange Working</h3>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <CurrencyBitcoinIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>Bitcoin</h3>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <StrikethroughSIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>Ethereum</h3>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <AttachMoneyIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>USTD</h3>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <AutoModeIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>Daily Earning</h3>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <BookmarksIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>REF. BONUS</h3>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <SquareIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>Withdrawals</h3>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <PaidIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>Deposited</h3>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{ background: "#fff", display: "flex", borderRadius: "8px" }}
            p={4}
          >
            <PaidIcon
              sx={{
                marginRight: "20px",
                color: "secondary.main",
                fontSize: "47px",
              }}
            />
            <h3>1st Level Deposited</h3>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Charts;
