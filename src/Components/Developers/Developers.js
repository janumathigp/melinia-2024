import React from "react";
import mohanImage from "../../Assets/mohan.jpg";
import '@fontsource/poppins'; // Import Poppins font
import '@fontsource/montserrat'; // Import Montserrat font
import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import rithik from "../../Assets/rithik.png";
import abhinivesh from "../../Assets/abhinivesh.JPG";
import susma from "../../Assets/susma.jpg";
class Developers extends React.Component
{
    iconsAbhinivesh = [
        { icon: <LinkedInIcon sx={{color:"#0077B5"}} />,link:"https://www.linkedin.com/in/abhinivesh0305/" },
        { icon: <EmailOutlinedIcon sx={{color:"GrayText"}}/>, link: "mailto:abhinivi67@gmail.com" },
        { icon: <PhoneCallbackIcon sx={{color:"green"}}/>, link: "tel:+91 9345884174" },
        { icon: <InstagramIcon sx={{color:"#833AB4"}}/>, link: "https://www.instagram.com/sound_of_keys/" },
      ];
      iconsRithik = [
        { icon: <LinkedInIcon sx={{color:"#0077B5"}} />,link:"https://www.linkedin.com/in/rithiksuthan/" },
        { icon: <EmailOutlinedIcon sx={{color:"GrayText"}}/>, link: "rithiksuthan123@gmail.com" },
        { icon: <PhoneCallbackIcon sx={{color:"green"}}/>, link: "tel:+91 6383704021" },
        { icon: <InstagramIcon sx={{color:"#833AB4"}}/>, link: "https://www.instagram.com/rithik_suthan/" },
      ];
      iconsJanumathi = [
        { icon: <LinkedInIcon sx={{color:"#0077B5"}} />,link:"https://www.linkedin.com/in/janumathi-g-p/" },
        { icon: <EmailOutlinedIcon sx={{color:"GrayText"}}/>, link: "mailto:janusivan05@gmail.com" },
        { icon: <PhoneCallbackIcon sx={{color:"green"}}/>, link: "tel:+91 9360638869" },
        { icon: <InstagramIcon sx={{ color: "#833AB4", cursor: 'not-allowed' }} onClick={() => null} />, link: null },
      ];
      iconsSusma = [
        { icon: <LinkedInIcon sx={{color:"#0077B5"}} />,link:"https://www.linkedin.com/in/susmav/" },
        { icon: <EmailOutlinedIcon sx={{color:"GrayText"}}/>, link: "mailto:susmav1012@gmail.com" },
        { icon: <PhoneCallbackIcon sx={{color:"green"}}/>, link: "tel:+91 6385480548" },
        { icon: <InstagramIcon sx={{color:"#833AB4"}}/>, link: "https://www.instagram.com/susmavijayakumar/" },
      ];
    render()
    {
        return(
<div style={{ backgroundColor: '#b5b5b5', marginTop: '4%', }}>
        <Typography variant="h3" gutterBottom style={{ marginTop: '73px', padding: '10px' }}>
          Developers
        </Typography>

        {/* Card 1: Image on Left */}
        <Box sx={{ marginTop: "20px", marginBottom: "50px", minWidth: '300px', maxWidth: '800px', margin: 'auto' }}>
          <Card sx={{ height: "auto", maxWidth: "100%", margin: "auto" }} elevation="none">
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src={abhinivesh}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="Abhinivesh"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "28px" }, textAlign: { xs: "center", md: "left" }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} fontWeight="700">
                  Abhinivesh S
                  </Typography>
                  <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
                  M.Sc. Decision and Computing Sciences - 4th Year
                  </Typography>
                  <Box mt={2}>
                    {this.iconsAbhinivesh.map(({ icon, link }) => (
                      <IconButton key={link} href={link} target="_blank">
                        {icon}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <br></br>
{/* Card 2: Image on Right */}
<Box sx={{ marginTop: "20px", marginBottom: "50px", minWidth: '300px', maxWidth: '800px', margin: 'auto' }}>
  <Card sx={{ height: "auto", maxWidth: "100%", margin: "auto" }} elevation="none">
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "28px" }, textAlign: { xs: "center", md: "left" }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} fontWeight="700">
          Rithik Suthan S
          </Typography>
          <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
          M.Sc. Software Systems - 4th Year
          </Typography>
                  <Box mt={2}>
                    {this.iconsRithik.map(({ icon, link }) => (
                      <IconButton key={link} href={link} target="_blank">
                        {icon}
                      </IconButton>
                    ))}
                  </Box>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={rithik}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          alt="Rithik"
        />
      </Grid>
    </Grid>
  </Card>
</Box>
<br></br>
<Box sx={{ marginTop: "20px", marginBottom: "50px", minWidth: '300px', maxWidth: '800px', margin: 'auto' }}>
          <Card sx={{ height: "auto", maxWidth: "100%", margin: "auto" }} elevation="none">
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src={mohanImage}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="Janumathi"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "28px" }, textAlign: { xs: "center", md: "left" }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} fontWeight="700">
                  Janumathi G P 
                  </Typography>
                  <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
                  M.Sc. Software Systems - 4th Year
                  </Typography>
                  <Box mt={2}>
                    {this.iconsJanumathi.map(({ icon, link }) => (
                      <IconButton key={link} href={link} target="_blank" onClick={link ? null : () => null}>
                        {icon}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <br></br>
{/* Card 2: Image on Right */}
<Box sx={{ marginTop: "20px", marginBottom: "50px", minWidth: '300px', maxWidth: '800px', margin: 'auto' }}>
  <Card sx={{ height: "auto", maxWidth: "100%", margin: "auto" }} elevation="none">
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "28px" }, textAlign: { xs: "center", md: "left" }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} fontWeight="700">
            Susma V
          </Typography>
          <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
          M.Sc. Software Systems - 4th Year
          </Typography>
                  <Box mt={2}>
                    {this.iconsSusma.map(({ icon, link }) => (
                      <IconButton key={link} href={link} target="_blank">
                        {icon}
                      </IconButton>
                    ))}
                  </Box>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={susma}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          alt="Susma"
        />
      </Grid>
    </Grid>
  </Card>
</Box>
<br></br>
      </div>
        );
    }
}
export default Developers;