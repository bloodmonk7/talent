import Home from "./components/Home";
import Social from "./components/Social";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial"
import Support from "./components/Support";
import Action from './components/Action'
import Footer from './components/Footer'
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
      <Action />
      <Footer />
    </Stack>
  );
}

export default App;
