import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Col, Container } from 'react-bootstrap';

import Keycharades from '../../Assets/events/KEY CHARADES.png';
import SEQUELVERSE from '../../Assets/events/SEQUELVERSE.png';
import bidbattle from '../../Assets/events/bidbattle.png';
import codegolf from '../../Assets/events/code golf.png';
import crypticquest from '../../Assets/events/crypticquest.png';
import datacraft from '../../Assets/events/data craft.png';
import somethingfishy from '../../Assets/events/something fishy.png';
import mixpanel from 'mixpanel-browser';

const cardData = [
  { id: 1, imageUrl: Keycharades },
  { id: 2, imageUrl: SEQUELVERSE },
  { id: 3, imageUrl: codegolf },
  { id: 4, imageUrl: bidbattle },
  { id: 5, imageUrl: crypticquest },
  { id: 6, imageUrl: datacraft },
  { id: 7, imageUrl: somethingfishy },
];

const Events = () => {
  const [index, setIndex] = useState(0);
  const [numImagesPerSet, setNumImagesPerSet] = useState(3);
  const [imageSize, setImageSize] = useState({ width: '200px', height: '200px' });
  const [extendedCardData, setExtendedCardData] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // Update the number of images per set based on screen width
    const updateCarouselSettings = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setNumImagesPerSet(1);
        setImageSize({ width: '225px', height: '150px' });
      } else if (screenWidth < 992) {
        setNumImagesPerSet(2);
        setImageSize({ width: '150px', height: '150px' });
      } else {
        setNumImagesPerSet(3);
        setImageSize({ width: '250px', height: '200px' });
      }
    };

    // Call the function on mount and resize
    updateCarouselSettings();
    window.addEventListener('resize', updateCarouselSettings);

    // Generate an extended list of images for smooth transition
    const extendedData = [];
    for (let i = 0; i < 100; i++) {
      extendedData.push(...cardData);
    }
    setExtendedCardData(extendedData);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateCarouselSettings);
    };
  }, []);
  const handleLinkClick = (cardId) => {
    if(cardId===1){
      mixpanel.track("keycharades event clicked", {
        page:"home"
      });
    }
    else if(cardId===2){
      mixpanel.track("sequelverse event clicked", {
        page:"home"
      });
    }
    else if(cardId===3){
      mixpanel.track("codegolf event clicked", {
        page:"home"
      });
    }
    else if(cardId===4){
      mixpanel.track("bidbattle event clicked", {
        page:"home"
      });
    }
    else if(cardId===5){
      mixpanel.track("crypticquest event clicked", {
        page:"home"
      });
    }
    else if(cardId===6){
      mixpanel.track("datacraft event clicked", {
        page:"home"
      });
    }
    else if(cardId===7){
      mixpanel.track("somethingfishy event clicked", {
        page:"home"
      });
    }
    // You can call your custom function or perform any other actions here
  };
  const renderCarouselItems = () => {
    const items = [];

    for (let i = 0; i < extendedCardData.length; i += numImagesPerSet) {
      const setOfImages = extendedCardData.slice(i, i + numImagesPerSet);

      items.push(
        <Carousel.Item key={i}>
          <div className="d-flex justify-content-around">
            {setOfImages.map((card, j) => (
              <Link onClick={() => handleLinkClick(card.id)}  key={`${card.id}-${j}`} to={`events/${card.id}`} style={{ textDecoration: 'none'}}>
                <img
                  src={card.imageUrl}
                  alt={`Card ${card.id}`}
                  className="img-fluid rounded"
                  style={{
                    minWidth: imageSize.width,
                    height: imageSize.height,
                    borderRadius: '10px',
                    marginRight: `${j < numImagesPerSet - 1 ? 20 : 0}px`, // Add gap only between the first n-1 images
                  }}
                />
              </Link>
            ))}
          </div>
        </Carousel.Item>
      );
    }

    return items;
  };

  return (
    <Container fluid style={{ padding: '30px' }} id='events'>
      <span className="aboutFont" >
        DIVERSE EVENTS, ENDLESS POSSIBILITIES
      </span>
      <Col style={{ paddingTop:"20px"}}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} indicators={false} wrap={true}>
          {renderCarouselItems()}
        </Carousel>
      </Col>
    </Container>
  );
};

export default Events;
