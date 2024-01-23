import { Box, Stack, Typography } from "@mui/material";
import {
  Instagram,
  LinkedIn,
  Twitter,
  Facebook,
  GitHub,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  return (
    <Stack sx={{ paddingX: "6rem", paddingY: "36px" }}>
      <Stack direction="row" sx={{ backgroundColor: "white" }}>
        <Stack sx={{ width: "270px" }}>
          <Stack direction="row" spacing={2}>
            <Box
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ paddingTop: "5px" }}
            >
              <img src="./Group.svg" />
            </Box>
            <Typography variant="h6" sx={{fontWeight:'bold'}}>ClearLink</Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{ textAlign: "start", color: "gray", paddingY: "25px" }}
          >
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            paddingLeft: "50px",
            color: "#667085",
          }}
        >
          <Stack
            sx={{
              fontSize: "10px",
              paddingX: "2rem",
              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
                color:'#667085'
              }}
            >
              Product
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Overview
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Features
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Solution
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Tutorials
            </Typography>
            <Typography sx={{color:'#475467', fontWeight: "bold", fontSize: "14px" }}>
              Pricing
            </Typography>
          </Stack>
          <Stack
            sx={{
              fontSize: "10px",
              paddingX: "2rem",
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            <Typography
              sx={{
                color:'#667085',
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              Company
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Careers
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Press
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              News
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Contact
            </Typography>
          </Stack>
          <Stack
            sx={{
              fontSize: "10px",
              paddingX: "2rem",
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            <Typography
              sx={{
                color: "#667085",
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              Resources
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Events
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Help centre
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Tutorials
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Support
            </Typography>
          </Stack>
          <Stack
            sx={{
              fontSize: "9px",
              paddingX: "2rem",
              textAlign: "start",
              fontWeight: "bold",
            }}
          >
            <Typography
              sx={{
                color: "#667085",
                paddingBottom: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              Legal
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Terms
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Privacy
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Cookies
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Licenses
            </Typography>
            <Typography
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
                color:'#475467'
              }}
            >
              Contact
            </Typography>
          </Stack>
          <Stack
            sx={{ fontSize: "10px", paddingX: "2rem", textAlign: "start" }}
          >
            <Typography
              color="primary"
              sx={{
                paddingBottom: "7px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Get the app
            </Typography>
            <Stack sx={{ paddingBottom: "7px" }}>
              <img src="./Mobile app store badge.png" alt="store" />
            </Stack>
            <Stack>
              <img src="./Mobile app store badge (1).png" alt="store2" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "25px",
          color: "gray",
        }}
      >
        <Typography>© 2023 ClearLink. All rights reserved.</Typography>
        <Stack direction="row" spacing={2}>
          <LinkedIn />
          <Twitter />
          <Facebook />
          <Instagram />
          <GitHub />
          <YouTube />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
