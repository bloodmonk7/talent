import { Typography, Stack, Grid } from "@mui/material";

function Benefits() {
  return (
    <Stack
      sx={{ paddingX: "6rem", paddingY: "36px", backgroundColor: "white" }}
    >
      <Stack sx={{ textAlign: "start", padding: "7px" }}>
        <Typography color="primary" sx={{ fontWeight: "bold" }}>
          The ClearLink Advantage
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#1D2939", paddingY: "8px" }}
        >
          Why choose ClearLink?
        </Typography>
        <Typography variant="body2" sx={{ color: "#667085", width: "530px" }}>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </Typography>
        {/* <img src="src\assets\arrow.png" alt="arrow" /> */}
      </Stack>
      <Stack direction="row" justifyContent="space-between" py={6}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={3}
          sx={{ width: "600px" }}
        >
          <Grid item md={6} sx={{ textAlign: "start" }}>
            <img src="./video.png" alt="video" />
            <Typography
              variant="subtitle2"
              sx={{ color: "#101828", fontWeight: "bold" }}
            >
              Crystal-clear HD video
            </Typography>
            <Typography variant="body2">
              No more pixelation or blurriness just stunning, lifelike clarity
              that brings your team closer in meetings.
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ textAlign: "start" }}>
            <img src="./voice.png" alt="voice" />
            <Typography
              variant="subtitle2"
              sx={{ color: "#101828", fontWeight: "bold" }}
            >
              Noise-canceling audio
            </Typography>
            <Typography variant="body2">
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ textAlign: "start" }}>
            <img src="./file.png" alt="file" />
            <Typography
              variant="subtitle2"
              sx={{ color: "#101828", fontWeight: "bold" }}
            >
              Scheduling made easy
            </Typography>
            <Typography variant="body2">
              Streamline your agenda with ClearLinks intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ textAlign: "start" }}>
            <img src="./lock.png" alt="lock" />
            <Typography
              variant="subtitle2"
              sx={{ color: "#101828", fontWeight: "bold" }}
            >
              Bank-grade security
            </Typography>
            <Typography variant="body2">
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </Typography>
          </Grid>
        </Grid>
        <Stack sx={{ width: "400px" }}>
          <img src="./Rectangle 1.png" alt="benefited" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Benefits;
