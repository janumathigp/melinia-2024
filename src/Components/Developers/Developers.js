import React from "react";
import mohanImage from "../../Assets/mohan.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/poppins'; // Import Poppins font
import '@fontsource/montserrat'; // Import Montserrat font
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
class Developers extends React.Component
{
    icons = [
        { icon: <LinkedInIcon sx={{color:"#0077B5"}} />,link:"https://www.linkedin.com/in/mohan-prasaath-2015651b8/" },
        { icon: <EmailOutlinedIcon sx={{color:"GrayText"}}/>, link: "mailto:mohanprasaath269@gmail.com" },
        { icon: <PhoneCallbackIcon sx={{color:"green"}}/>, link: "tel:+91 9842258390" },
        { icon: <InstagramIcon sx={{color:"#833AB4"}}/>, link: "https://www.instagram.com/mohan._.17" },
      ];
    render()
    {
        return(
<div style={{ backgroundColor: '#ffe6cc', marginTop: '4%', }}>
        <Typography variant="h3" gutterBottom style={{ marginTop: '73px', padding: '10px' }}>
          Developers
        </Typography>

        {/* Card 1: Image on Left */}
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
                  alt="Mohan"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "28px" }, textAlign: { xs: "center", md: "left" }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} fontWeight="700">
                    MOHAN PRASAATH S
                  </Typography>
                  <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
                    Msc Software Systems - 4th Year
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    mt={1}
                    letterSpacing={0.6}
                    lineHeight={1.8}
                    sx={{ textIndent: { xs: "0", md: "20px" }, textAlign: { xs: "center", md: "left" } }}
                  >
                    As someone who loves to explore and learn, I'm always searching
                    for new opportunities to challenge myself and grow. I thrive in
                    dynamic and fast-paced environments, and I'm not afraid to take
                    risks. I'm passionate about making a meaningful impact in my
                    field, and I'm excited to connect with like-minded professionals
                    to discover new possibilities and create something extraordinary
                    together.
                  </Typography>
                  <Box mt={2}>
                    {this.icons.map(({ icon, link }) => (
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
            ANOTHER DEVELOPER
          </Typography>
          <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
            Role - Experience
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mt={1}
            letterSpacing={0.6}
            lineHeight={1.8}
            sx={{ textIndent: { xs: "0", md: "20px" }, textAlign: { xs: "center", md: "left" } }}
          >
            Description about the another developer goes here. Customize it based on your needs.
          </Typography>
          <Box mt={2}>
            {/* Social media icons go here */}
            {/* Example: */}
            <IconButton href="/" target="_blank">
              <EmailOutlinedIcon />
            </IconButton>
            <IconButton href="/" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="/" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton href="/" target="_blank">
              <PhoneCallbackIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={mohanImage}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          alt="Another Developer"
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
                  alt="Mohan"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontSize: { xs: "20px", md: "28px" }, textAlign: { xs: "center", md: "left" }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} fontWeight="700">
                    MOHAN PRASAATH S
                  </Typography>
                  <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
                    Msc Software Systems - 4th Year
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    mt={1}
                    letterSpacing={0.6}
                    lineHeight={1.8}
                    sx={{ textIndent: { xs: "0", md: "20px" }, textAlign: { xs: "center", md: "left" } }}
                  >
                    As someone who loves to explore and learn, I'm always searching
                    for new opportunities to challenge myself and grow. I thrive in
                    dynamic and fast-paced environments, and I'm not afraid to take
                    risks. I'm passionate about making a meaningful impact in my
                    field, and I'm excited to connect with like-minded professionals
                    to discover new possibilities and create something extraordinary
                    together.
                  </Typography>
                  <Box mt={2}>
                    {this.icons.map(({ icon, link }) => (
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
            ANOTHER DEVELOPER
          </Typography>
          <Typography mb={4} color="#6A6A6A" textAlign={{ xs: "center", md: "left" }}>
            Role - Experience
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mt={1}
            letterSpacing={0.6}
            lineHeight={1.8}
            sx={{ textIndent: { xs: "0", md: "20px" }, textAlign: { xs: "center", md: "left" } }}
          >
            Description about the another developer goes here. Customize it based on your needs.
          </Typography>
          <Box mt={2}>
            {/* Social media icons go here */}
            {/* Example: */}
            <IconButton href="/" target="_blank">
              <EmailOutlinedIcon />
            </IconButton>
            <IconButton href="/" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="/" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton href="/" target="_blank">
              <PhoneCallbackIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={mohanImage}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          alt="Another Developer"
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