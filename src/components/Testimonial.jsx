import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Rating,
  IconButton,
  Avatar,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function Testimonial() {
  const [value, setValue] = React.useState(5);

  return (
    <Box sx={{ paddingY: "36px", paddingX: "6rem" }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack spacing={3} sx={{ width: "640px" }}>
          <Stack sx={{ width: "60px", }}>
            <img src="./Shopify.com svg.png" alt="shopify"/>
          </Stack>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="small"
          />
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: "bold",
              fontSize: "35px",
              lineHeight: "40px",
            }}
          >
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing,and top-notch security make it essential for our
            team.
          </Typography>
          <Stack direction="row" spacing={26}>
            <Stack direction="row" spacing={2} sx={{ width: "300px" }}>
              <Stack sx={{ width: "50px" }}>
                <img src="./Sarah.png" alt="Sarah" />
              </Stack>
              <Stack sx={{ textAlign: "start", fontWeight: "bold" }}>
                <Typography sx={{fontWeight: 'bold'}}>Sarah Thompson</Typography>
                <Typography sx={{color: '#475467'}}>Project Manager, Shopify</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <IconButton
                size="small"
                color="primary"
                variant="contained"
                elevation={5}
              >
                <Avatar
                  sx={{ backgroundColor: "white", color: "#175CD3" }}
                  elevation={4}
                >
                  <ArrowBack />
                </Avatar>
              </IconButton>
              <IconButton size="small" color="primary">
                <Avatar
                  sx={{ backgroundColor: "white", color: "#175CD3" }}
                  elevation={4}
                >
                  <ArrowForward />
                </Avatar>
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ width: "500px" }}>
          <img src="./groupPhoto.png" alt="grouped-photo" />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Testimonial;
