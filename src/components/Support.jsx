import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

function Support() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: "white", paddingY: "40px", paddingX: "6rem" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ gap: "20px" }}
      >
        <Stack sx={{ textAlign: "start", maxWidth: "400px" }}>
          <Typography color="primary" sx={{ fontSize: "14px", fontWeight:'bold' }}>
            Support
          </Typography>
          <Typography variant="h2">FAQs</Typography>
          <Typography variant="body1" sx={{color:'#667085'}}>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please <a href="#"><Typography sx={{color:'#667085'}}>chat to our friendly
            team.</Typography></a>
          </Typography>
        </Stack>
        <Stack sx={{ maxWidth: "560px" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, "panel1")
            }
          >
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMore />}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                How many participants can join a ClearLink video conference?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, "panel2")
            }
          >
            <AccordionSummary
              id="panel2-header"
              aria-controls="panel2-content"
              expandIcon={<ExpandMore />}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                Can I use ClearLink on multiple devices?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique expedita deserunt velit ratione suscipit, quis maiores
                id pariatur, sunt modi quae veniam quod earum adipisci tempore
                nisi aut ea ipsam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, "panel3")
            }
          >
            <AccordionSummary
              id="panel3-header"
              aria-controls="panel3-content"
              expandIcon={<ExpandMore />}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                Is ClearLink compatible with other video conferencing platforms?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique expedita deserunt velit ratione suscipit, quis maiores
                id pariatur, sunt modi quae veniam quod earum adipisci tempore
                nisi aut ea ipsam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, "panel4")
            }
          >
            <AccordionSummary
              id="panel4-header"
              aria-controls="panel4-content"
              expandIcon={<ExpandMore />}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                How does ClearLink ensure the security of my video conferences?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique expedita deserunt velit ratione suscipit, quis maiores
                id pariatur, sunt modi quae veniam quod earum adipisci tempore
                nisi aut ea ipsam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, "panel5")
            }
          >
            <AccordionSummary
              id="panel5-header"
              aria-controls="panel5-content"
              expandIcon={<ExpandMore />}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                Do I need to download any software to use ClearLink?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique expedita deserunt velit ratione suscipit, quis maiores
                id pariatur, sunt modi quae veniam quod earum adipisci tempore
                nisi aut ea ipsam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={(_event, isExpanded) =>
              handleChange(isExpanded, "panel6")
            }
          >
            <AccordionSummary
              id="panel6-header"
              aria-controls="panel6-content"
              expandIcon={<ExpandMore />}
            >
              <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                What kind of customer support does ClearLink provide?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique expedita deserunt velit ratione suscipit, quis maiores
                id pariatur, sunt modi quae veniam quod earum adipisci tempore
                nisi aut ea ipsam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Support;
