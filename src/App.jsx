import Home from "./components/Home";
import Social from "./components/Social";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial"
import Support from "./components/Support";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack
      sx={{
        margin: "auto",
      }}
    >
      <Home />
      <Social />
      <Benefits />
      <Testimonial />
      <Support />
    </Stack>
  );
}

export default App;
