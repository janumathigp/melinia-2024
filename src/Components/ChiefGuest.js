import { Avatar, span } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import chief from "../Assets/crew/chief.jpg"

function ChiefGuest() {
  return (
    <Box sx={{ marginTop: "60px",height:"100%",width:"100%",padding:"20px"  }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <span className="font1" variant="h4" component="h1" fontWeight="700" style={{color:'white', fontSize:{sm:'2em', md:'3em'}}} mb={1} textAlign="center">
            MEET OUR CHIEF GUEST
          </span>
        

          <Avatar src={chief} sx={{width:300,objectFit:"contain",height:300,borderRadius:"100%"}} />

          <span className="font2" color="white"  variant="h6" style={{marginTop:8, color:'#d3d3d3', fontWeight:'bolder', fontSize:'1.5em', marginBottom:4}}>Mr. Sathish Nandagopal</span>
          <span className="font3" variant="subtitle2" style={{color:'#d3d3d3', fontWeight:'bolder', marginBottom:4}}>(Co-Founder and CEO of SMARTAIL)</span>

          <span className="font3" color="#d3d3d3" textAlign="center" style={{color:'#d3d3d3', fontWeight:'bolder', marginBottom:4}}>Mr. Ganesan will be joining us as Chief Guest for our National Level Technical Symposium Melinia 2024 . He has been instrumental in revolutionizing the education industry through the integration of cutting-edge technology. His expertise and knowledge in the field of AI and DT have been widely recognized, and we are honored to have him to grace our event as Chief Guest.</span>
        </Box>
      </Container>
    </Box>
  );
}

export default ChiefGuest;
