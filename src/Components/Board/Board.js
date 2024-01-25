import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import stanleysImage from "../../Assets/stanley.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/poppins'; // Import Poppins font
import '@fontsource/montserrat'; // Import Montserrat font


class Board extends React.Component
{
    render()
    {
        return(
<div style={{ backgroundColor: '#ffe6cc', marginTop: '4%' }}>
  <section style={{ marginBottom: '6%', marginRight: '6%', marginLeft: 'auto', marginRight: 'auto', maxWidth: '300px' }}>
    <Card
      sx={{
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins, sans-serif',
        transition: 'transform 0.3s ease-in-out',
        padding:'5px',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        '@media (max-width: 600px)': {
          marginTop: '73px',
          maxWidth: '100%', // Make the card take full width on small screens
        },
        '@media (min-width: 601px) and (max-width: 1024px)': {
          maxWidth: '80%', // Adjust the maximum width for laptops
        },
        '@media (min-width: 1025px) and (max-width: 1440px)': {
          maxWidth: '80%', // Adjust the maximum width for larger laptops
        },
        backgroundColor: '#f2f2f2 !important',
      }}
    >
          <CardMedia
            component="img"
            alt="Stanley"
            height="fit-content"
            image={stanleysImage}
          />
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
              Dr. C. Stanley Felix
            </Typography>
            <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
              Faculty Advisor
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
              Department of Computing
            </Typography>
          </CardContent>
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                0422-2574071 Extn: 335
              </Typography>
            </div>
          </CardContent>
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                stanlyfelix@cit.edu.in
              </Typography>
            </div>
          </CardContent>
        </Card>
      </section>
            </div>

          
        );
    }
}

export default Board;