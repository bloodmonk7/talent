import * as React from "react";
import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Stack,
  Button,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  AvatarGroup,
  Rating,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [value, setValue] = React.useState(5);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        backgroundImage: "url('./Background pattern.png')",
        paddingX: "6rem",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "#F2F4F7",
          borderRadius: "100px",
          marginTop: "2rem",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" spacing={1}>
            <Box
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ paddingTop: "5px" }}
            >
              <img src="./Group.svg" />
            </Box>
            <Typography variant="h6" sx={{color: "black",fontWeight: "bold"}}>ClearLink</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              id="products-button"
              onClick={handleClick}
              aria-control={open ? "products-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDown />}
              sx={{color: '#667085'}}
            >
              <Typography >Products</Typography>
            </Button>
            <Button
              color="inherit"
              id="solution-button"
              onClick={handleClick}
              aria-control={open ? "solution-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDown />}
              sx={{color: '#667085'}}
            >
              Solution
            </Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              aria-control={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDown />}
              sx={{color: '#667085'}}
            >
              Resources
            </Button>
            <Button sx={{color: '#667085'}} color="inherit">Pricing</Button>
          </Stack>
          <Menu
            id="products-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ "aria-labelledby": "products-button" }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Lorem</MenuItem>
            <MenuItem onClick={handleClose}>Ipsum</MenuItem>
          </Menu>
          <Stack direction="row" spacing={2}>
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderRadius: "25px",
                borderColor: "black",
                color: "black",
                backgroundColor: 'white',
                fontWeight: "bold"
              }}
            >
              Talk to Sales
            </Button>

            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{ borderRadius: "25px" }}
            >
              Sign up for Free
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Stack mt={17} direction="row" justifyContent="space-between">
        <Stack md={6} sx={{ width: "500px" }}>
          <Stack spacing={3} sx={{ textAlign: "start" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#1D2939",
                fontSize: "46px",
                lineHeight: "55px",
              }}
            >
              Uniting the world,<br />one video call at a time
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "gray" }}>
              Experience the future of communication with ClearLink where
              crystal-clear video conferencing meets unparalleled simplicity.
            </Typography>
            <Stack direction="row" spacing={3}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                sx={{ borderRadius: "25px" }}
              >
                Start your free trial
              </Button>
              <Button color="primary" size="medium">
                <Stack sx={{ paddingRight: "5px", paddingBottom: "5px",fontWeight: 'bold' }}>
                  <img src="./Group 2.png" alt="bot" />
                </Stack>
                <Typography sx={{fontWeight: 'bold'}}>
                  Discover AI assistant
                </Typography>
              </Button>
            </Stack>
            <Stack direction="row" spacing={2}>
              <AvatarGroup size="small">
                <Avatar src="./Avatar.png" />
                <Avatar src="./Avatar (1).png" />
                <Avatar src="./Avatar (2).png" />
                <Avatar src="./Avatar (3).png" />
                <Avatar src="./Avatar (4).png" />
              </AvatarGroup>
              <Stack spacing={1}>
                <Stack direction="row">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="small"
                  />
                  <Typography variant="caption">5.0</Typography>
                </Stack>
                <Typography variant="caption">from 3000+ reviews</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{
            borderColor: '#B2DDFF',
            bgcolor: "#EFF8FF",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Stack sx={{ width: "360px", paddingBottom: "30px" }}>
            <img src="./Frame 27.png" />
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ width: "300px", margin: "auto" }}
          >
            <Stack sx={{ width: "40px" }}>
              <img src="./zap.png" />
            </Stack>
            <Stack sx={{ width: "40px" }}>
              <img src="./zap (1).png" />
            </Stack>
            <Stack sx={{ width: "40px" }}>
              <img src="./zap (2).png" />
            </Stack>
            <Stack sx={{ width: "40px" }}>
              <img src="./zap (3).png" />
            </Stack>
            <Stack sx={{ width: "40px" }}>
              <img src="./zap (4).png" />
            </Stack>
            <Stack sx={{ width: "40px" }}>
              <img src="./zap (5).png" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Home;
