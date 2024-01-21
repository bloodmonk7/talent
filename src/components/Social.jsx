import { Box, Stack, Typography } from "@mui/material";

function Social() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        paddingX: "6rem",
        marginY: "2rem",
      }}
    >
      <Typography
        p={5}
        sx={{ color: "#475467", fontWeight: "bold", textAlign: "center" }}
      >
        Join 1,500+ companies already video conferencing the ClearLink way
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "36px",
        }}
      >
        <img src="./Shopify.com svg.png" alt="shopify" />
        <img src="./Coinbase svg.png" alt="coin" />
        <img src="./Dropbox svg.png" alt="drobbox" />
        <img src="./Intercom svg.png" alt="intercom" />
        <img src="./Marvel svg.png" alt="marvel" />
        <img src="./Automattic svg.png" alt="Auto" />
      </Stack>
    </Box>
  );
}

export default Social;
