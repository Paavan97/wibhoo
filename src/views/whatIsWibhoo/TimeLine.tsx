import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Typography } from "@mui/material";

const OutlinedTimeline: React.FC = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem sx={{m:'auto', alignItem:"center" , display:'flex', flexDirection:{xs:'row-reverse', md:'row'}}}>
        
        <TimelineContent sx={{ marginTop: "40px" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#8FE1AA",
                // marginTop: "48px",
              }}
            >
              Environmental Impact
            </Typography>
            <Typography>
              <Typography>
                ► 12,000+ kg of direct plastic waste prevention from polluting
                our environment, with multi-thousand kg in collaboration
                efforts.
              </Typography>
              <Typography>
                ► Offsetting 20,000 kg of direct CO2 emissions for cleaner air.
              </Typography>
              <Typography>
                ► Plantation of 1000 trees to achieve carbon neutrality.
              </Typography>
            </Typography>
          </Box>
        </TimelineContent>

        <TimelineSeparator>
          <Box
            style={{
              borderRadius: "15px",
              border: "1px solid gold",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "gold"
            }}
          >
            1
          </Box>
          <TimelineConnector sx={{ backgroundColor: "gold" }} />
        </TimelineSeparator>

        <TimelineOppositeContent
          sx={{
            display: {xs:"none",md:"flex"},
            marginTop: "40px",
            justifyContent: "center",
            alignItems: "center",
            alignItem: "center",
          }}
          color="text.secondary"
        >
          {/* <img style={{width:"100%", display:{md:"block", xs:"none"}}} src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" /> */}
        </TimelineOppositeContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', color:'white'}}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#8FE1AA",
                // marginTop: "48px",
              }}
            >
              Environmental Impact
            </Typography>
            <Typography>
              <Typography>
                ► 12,000+ kg of direct plastic waste prevention from polluting
                our environment, with multi-thousand kg in collaboration
                efforts.
              </Typography>
              <Typography>
                ► Offsetting 20,000 kg of direct CO2 emissions for cleaner air.
              </Typography>
              <Typography>
                ► Plantation of 1000 trees to achieve carbon neutrality.
              </Typography>
            </Typography>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Box
            sx={{
              borderRadius: "15px",
              border: "1px solid gold",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "gold"
            }}
          >
            2
          </Box>
          <TimelineConnector sx={{ backgroundColor: "gold" }}  />
        </TimelineSeparator>
        <TimelineContent  sx={{
            display: {xs:"none",md:"flex"},
            marginTop: "40px",
            justifyContent: "center",
            alignItems: "center",
            alignItem: "center",
          }}></TimelineContent>
      </TimelineItem>

      <TimelineItem sx={{ alignItem: "" , display:'flex', flexDirection:{xs:'row-reverse', md:'row'}}} >
        <TimelineOppositeContent color="text.secondary">
          <Box sx={{color:'white', textAlign:'left'}} >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#8FE1AA",
                // marginTop: "48px",
              }}
            >
              Environmental Impact3
            </Typography>
            <Typography>
              <Typography>
                ► 12,000+ kg of direct plastic waste prevention from polluting
                our environment, with multi-thousand kg in collaboration
                efforts.
              </Typography>
              <Typography>
                ► Offsetting 20,000 kg of direct CO2 emissions for cleaner air.
              </Typography>
              <Typography>
                ► Plantation of 1000 trees to achieve carbon neutrality.
              </Typography>
            </Typography>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Box
            sx={{
              borderRadius: "15px",
              border: "1px solid gold",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "gold"
            }}
          >
            3
          </Box>
          <TimelineConnector sx={{ backgroundColor: "gold" }}  />
        </TimelineSeparator>
        <TimelineContent  sx={{
            display: {xs:"none",md:"flex"},
            marginTop: "40px",
            justifyContent: "center",
            alignItems: "center",
            alignItem: "center",
          }}></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
export default OutlinedTimeline;
