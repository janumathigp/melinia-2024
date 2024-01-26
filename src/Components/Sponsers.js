import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import { FaHandshake } from "react-icons/fa";

function Sponsors() {
  const sponsors = [
    
    {
      name: "Smartail",
      logo: "https://smartail.ai/wp-content/uploads/2021/09/Site-Identity-Logo-Smartail.svg",
    },
    {
      name:"KLA",
      logo:"https://rootquotient.com/assets/images/new-home-page/rq-logo-secondary-new.png"
    }
    
    // {
    //   name: "KLA",
    //   logo: "/images/klar.png",
    // },
  ];
  return (
    <Box
  sx={{
    marginTop: "80px",
    height: "100%",
    width: "100%",
    background: "linear-gradient(to right, #c6b6c9, #b18dca);",
    padding: "20px"
  }}
>
      <Container
        sx={{
            margin:0,
            padding:0,
          minWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
      <div style={{width:'100%', padding:0}}><span
          className="aboutFont"
          variant="h4"
          component="h1"
          fontWeight="700"
          style={{ marginBottom:'10px', background:'linear-gradient(0deg, #86558d, #3b0043)', webkitBackgroundClip: 'text', backgroundClip: 'text'}}
          mb={2}
        >
          EVENT SPONSORS
          <FaHandshake style={{marginLeft:'15px', fontSize:'60px', marginTop:'-7px'}} />
        </span> <Divider style={{padding:'0', marginTop:'10px', borderColor:'black'}}/></div>
        
       
        {/* <Typography mb={4} variant="body2" component="p" color="#6A6A6A">
          We've had the pleasure to collaborate with a few...
        </Typography> */}

        <Grid container spacing={{xs:0,md:3}} justifyContent="center">
          {sponsors.map((sponsor) => (
            <Grid item key={sponsor.name} xs={12} display="flex" alignItems="center" justifyContent="center">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
                borderRadius={1}
                bgcolor="background.paper"
                width={{ xs: 170, md: 250 }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width="100%"
                  height="80"
                  style={{objectFit:"contain"}}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
       
      </Container>
    </Box>
  );
}

export default Sponsors;
