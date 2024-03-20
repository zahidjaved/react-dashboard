import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Badge,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import IconButton from "@mui/material/IconButton";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ArticleIcon from "@mui/icons-material/Article";
import WalletIcon from "@mui/icons-material/Wallet";
import HistoryIcon from "@mui/icons-material/History";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const SideNav = () => {
  return (
    <div className="col-lg-2 bg-light">
      <div className="sidebar position-fixed">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2> React</h2>
          </Link>
        </div>
        <div className="sidebar">
          <List>
            <ListItem className="navv" button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: "33px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/security">
              <ListItemIcon>
                <GppGoodIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: "33px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Security" />
            </ListItem>
            <ListItem button component={Link} to="/history">
              <ListItemIcon>
                <HistoryIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: "33px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>

            <ListItem button component={Link} to="/withdraw">
              <ListItemIcon>
                <ArticleIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: "33px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Withdraw" />
            </ListItem>
            <ListItem button component={Link} to="/overview">
              <ListItemIcon>
                <SignalCellularAltIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: "33px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItem>

            <ListItem button component={Link} to="/toggle">
              <ListItemIcon>
                <WalletIcon
                  sx={{
                    color: "secondary.main",
                    fontSize: "33px",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="wallet" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
