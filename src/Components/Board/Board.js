import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import stanleysImage from "../../Assets/stanleyNew.jpg";
import keerthiImage from '../../Assets/keerthikamamupdated.jpg';
import manjuImage from '../../Assets/manjumam.jpeg';
import sujithraImage from '../../Assets/sujithramam.jpeg';
import hemaImage from '../../Assets/hemashreemam.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/poppins'; // Import Poppins font
import '@fontsource/montserrat'; // Import Montserrat font
import { styled } from "@mui/system";
import rohith from '../../Assets/rohith.jpg';

const StyledTypography = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: 700,
  // color: "#4a4a4a", // Dark gray color for an antique look
  color:'rgb(18, 2, 98)',
  textAlign: "center",
  marginBottom: "20px",
  fontFamily: "serif", // Use a serif font for a manuscript feel
  letterSpacing: "1px",
  textTransform: "uppercase",
  // borderBottom: "2px solid #4a4a4a",
  },
);
class Board extends React.Component
{

    cardDataTeachers = [
        {
          name: "Dr.V.Keerthika",
          role: "Event Management",
          department: "Department of Computing",
          phone: "0422-2574071 Extn: 335",
          email: "vkeerthika@cit.edu.in",
          image: keerthiImage,
        },
        {
            name: "Dr.D.Manju",
            role: "Event management",
            department: "Department of Computing",
            phone: "0422-2574071 Extn: 335",
            email: "manju@cit.edu.in",
            image: manjuImage,
          },
          {
            name: "Dr.M.Sujithra",
            role: "Technical Event Management",
            department: "Department of Computing",
            phone: "0422-2574071 Extn: 335",
            email: "sujithra@cit.edu.in",
            image: sujithraImage,
          },
          {
            name: "Mrs.P Hemashree",
            role: "Non-Technical Event Management",
            department: "Department of Computing",
            phone: "0422-2574071 Extn: 335",
            email: "hemashree@cit.edu.in",
            image: hemaImage,
          },

      ];

      cardDataCMSEC=[
        {
          name: "S Rohith",
          role: "Secretary",
          department: "M.Sc. Software Systems",
          phone: "9655898111",
          email: "2031036mss@cit.edu.in",
          image: rohith,
        },
        {
          name: "S Rohith",
          role: "Secretary",
          department: "M.Sc. Software Systems",
          phone: "9655898111",
          email: "2031036mss@cit.edu.in",
          image: rohith,
        }
      ]

    render()
    {
        return(
<div>
<div style={{ backgroundColor: '#d9d2e9', marginTop: '4%' }}>
  <br></br><br></br>
          <section style={{  marginLeft: 'auto', marginRight: 'auto', maxWidth: '355px'}}>
            <Card
              sx={{
                borderBottom: '10px solid #2C2244',
    borderRadius: '18px',
                width: '100%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Poppins, sans-serif',
                transition: 'transform 0.3s ease-in-out',
                padding:'15px',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '@media (max-width: 600px)': {
                  marginTop: '73px',
                  maxWidth: '100%',
                },
                '@media (min-width: 601px) and (max-width: 1024px)': {
                  maxWidth: '80%',
                },
                '@media (min-width: 1025px) and (max-width: 1440px)': {
                  maxWidth: '80%',
                },
                // backgroundColor: '#f2f2f2 !important',
                backgroundColor:'#f0f0f0'
              }}
            >
              {/* ... (Existing card content) */}
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
            <div style={{ cursor:'pointer',display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" gutterBottom onClick={() => window.location.href=`tel:${'0422-2574071 Extn: 335'}`} sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                0422-2574071 Extn: 335
              </Typography>
            </div>
          </CardContent>
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <div style={{ cursor:'pointer',display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" onClick={() => window.location.href=`mailto:${'stanlyfelix@cit.edu.in'}`} gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                stanlyfelix@cit.edu.in
              </Typography>
            </div>
          </CardContent>
            </Card>
          </section>
          <br></br><br></br>
        {/* New row of four cards */}
        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}> */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {this.cardDataTeachers.map((data, index) => (
            <Card
              key={index}
              sx={{
                borderBottom: '10px solid #2C2244',
    borderRadius: '18px',
                width: '100%',
                maxWidth: '250px', // Adjust the maximum width as needed
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Poppins, sans-serif',
                transition: 'transform 0.3s ease-in-out',
                margin: '0 10px 20px',
                padding:'15px',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '@media (max-width: 600px)': {
                  marginTop: '10px',
                  maxWidth: '100%',
                //   margin: '0 5px 20px',
                },
                '@media (min-width: 601px) and (max-width: 1024px)': {
                  maxWidth: '40%',
                },
                '@media (min-width: 1025px) and (max-width: 1440px)': {
                  maxWidth: '40%',
                },
                backgroundColor: '#f0f0f0 !important',
              }}
            >
              {/* ... (Card content for new row) */}
              <CardMedia
            component="img"
            alt={data.name}
            height="fit-content"
            image={data.image}
            sx={{height:'275px'}}
          />
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
            {data.name}
            </Typography>
            <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
              {data.role}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
                {data.department}
            </Typography>
          </CardContent>
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <div style={{cursor:'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
              onClick={() => window.location.href=`tel:${data.phone}`}
              >
                {data.phone}
              </Typography>
            </div>
          </CardContent>
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <div style={{ cursor:'pointer',display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
              onClick={() => window.location.href=`mailto:${data.email}`}
              >
                {data.email}
              </Typography>
            </div>
          </CardContent>
            </Card>
          ))}
        </div>
        {/* <div>      <Typography variant="h4" gutterBottom>
        Office Bearers
      </Typography></div> */}


<div>
      {/* Use the StyledTypography component */}
      <StyledTypography variant="h4" gutterBottom>
        Office Bearers
      </StyledTypography>
    </div>


      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
          {this.cardDataCMSEC.map((data, index) => (
            <Card
              key={index}
              sx={{
                borderBottom: '10px solid #2C2244',
    borderRadius: '18px',
                width: '100%',
                maxWidth: '250px', // Adjust the maximum width as needed
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Poppins, sans-serif',
                transition: 'transform 0.3s ease-in-out',
                margin: '0 10px 20px',
                padding:'15px',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '@media (max-width: 600px)': {
                  marginTop: '10px',
                  maxWidth: '100%',
                //   margin: '0 5px 20px',
                },
                '@media (min-width: 601px) and (max-width: 1024px)': {
                  maxWidth: '40%',
                },
                '@media (min-width: 1025px) and (max-width: 1440px)': {
                  maxWidth: '40%',
                },
                backgroundColor: '#f0f0f0 !important',
              }}
            >
              {/* ... (Card content for new row) */}
              <CardMedia
            component="img"
            alt="Stanley"
            height="fit-content"
            image={data.image}
          />
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
              {data.name}
            </Typography>
            <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
              {data.role}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
              {data.department}
            </Typography>
          </CardContent>
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                {data.phone}
              </Typography>
            </div>
          </CardContent>
          <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db' }} />
              <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                {data.email}
              </Typography>
            </div>
          </CardContent>
            </Card>
          ))}
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
          {[1, 2].map((index) => (
            <Card
              key={index}
              sx={{
                borderBottom: '10px solid #2C2244',
    borderRadius: '18px',
                width: '100%',
                maxWidth: '250px', // Adjust the maximum width as needed
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Poppins, sans-serif',
                transition: 'transform 0.3s ease-in-out',
                margin: '0 10px 20px',
                padding:'15px',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '@media (max-width: 600px)': {
                  marginTop: '10px',
                  maxWidth: '100%',
                //   margin: '0 5px 20px',
                },
                '@media (min-width: 601px) and (max-width: 1024px)': {
                  maxWidth: '40%',
                },
                '@media (min-width: 1025px) and (max-width: 1440px)': {
                  maxWidth: '40%',
                },
                backgroundColor: '#f0f0f0 !important',
              }}
            >
              {/* ... (Card content for new row) */}
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
          ))}
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {[1, 2, 3, 4].map((index) => (
            <Card
              key={index}
              sx={{
                borderBottom: '10px solid #2C2244',
    borderRadius: '18px',
                width: '100%',
                maxWidth: '250px', // Adjust the maximum width as needed
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Poppins, sans-serif',
                transition: 'transform 0.3s ease-in-out',
                margin: '0 10px 20px',
                padding:'15px',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '@media (max-width: 600px)': {
                  marginTop: '10px',
                  maxWidth: '100%',
                //   margin: '0 5px 20px',
                },
                '@media (min-width: 601px) and (max-width: 1024px)': {
                  maxWidth: '40%',
                },
                '@media (min-width: 1025px) and (max-width: 1440px)': {
                  maxWidth: '40%',
                },
                backgroundColor: '#f0f0f0 !important',
              }}
            >
              {/* ... (Card content for new row) */}
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
          ))}
        </div>
        <br></br>
        </div>
      </div>
          
        );
    }
}

export default Board;