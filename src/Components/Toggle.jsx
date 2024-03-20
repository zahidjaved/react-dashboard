import {
  Box,
  Skeleton,
  Stack,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Typography,
} from "@mui/material";
import {
  DateRangePicker,
  TabContext,
  TabList,
  TabPanel,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  LoadingButton,
  Alert,
  AlertTitle,

} from "@mui/lab";
import EmailIcon from "@mui/icons-material/Email";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import React, { useState } from "react";



const Toggle = () => {


  const [value, setValue] = useState("1");
  const [loading, setLoad] = useState(false);

  const handlechange = (e, newvalue) => {
    setValue(newvalue);
  };

  const handleload = () => {
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };
  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>one</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>one</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>one</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>one</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList aria-label="tab-example" onChange={handlechange}>
              <Tab label="one" value="1" />
              <Tab label="two" value="2" />
              <Tab label="three" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1"> Panel one</TabPanel>
          <TabPanel value="2"> Panel two</TabPanel>
          <TabPanel value="3"> Panel three</TabPanel>
        </TabContext>
      </Box>

      <Stack direction="row" spacing={2}>
        <LoadingButton
          loading
          variant="outlined"
          color="secondary"
          loadingIndicator="sending..."
        >
          {" "}
          loading..
        </LoadingButton>
        <LoadingButton
          disabled={loading}
          onClick={handleload}
          variant="outlined"
          loadingIndicator="Saving..."
          color="secondary"
        >
          {" "}
          Save
        </LoadingButton>
      </Stack>

      <Stack spacing={1} width="250px" my={3}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} animation="wave" />
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <ListItemIcon>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemIcon>
              </ListItemAvatar>

              <ListItemText primary="List item 1" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <ListItemIcon>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemIcon>
              </ListItemAvatar>

              <ListItemText primary="List item 1" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <ListItemIcon>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemIcon>
              </ListItemAvatar>

              <ListItemText primary="List item 1" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <SpeedDial
        ariaLabel="speed dail"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<FolderCopyIcon />} tooltipTitle="copy" />
        <SpeedDialAction icon={<LocalPrintshopIcon />} tooltipTitle="print" />
        <SpeedDialAction icon={<ScreenShareIcon />} tooltipTitle="share" />
      </SpeedDial>

    </>
  );
};

export default Toggle;
