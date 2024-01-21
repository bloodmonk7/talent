import Home from "./components/Home";
import Social from "./components/Social";
import Benefits from "./components/Benefits";
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
    </Stack>
  );
}

export default App;
