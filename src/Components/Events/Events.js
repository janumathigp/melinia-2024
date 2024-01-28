import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {Link} from 'react-router-dom';
import MainDescription from './MainDescription';

// Import images for your cards
import Keycharades from "../../Assets/events/KEY CHARADES.png"
import SEQUELVERSE from "../../Assets/events/SEQUELVERSE.png"
import bidbattle from "../../Assets/events/bidbattle.png"
import codegolf from "../../Assets/events/code golf.png"
import crypticquest from "../../Assets/events/crypticquest.png"
import datacraft from "../../Assets/events/data craft.png"
import somethingfishy from "../../Assets/events/something fishy.png"


const cardData = [
  {
    id: 1,
    imageUrl: Keycharades,
    title: 'Key Charades',
    date: '2022-01-01',
    time: '12:00 PM',
    technical: true,
  },
  {
    id: 2,
    imageUrl: SEQUELVERSE,
    title: 'Sequel verse',
    date: '2022-02-01',
    time: '03:30 PM',
    technical: true,

  },
  {
    id: 3,
    imageUrl: codegolf,
    title: 'Code Golf',
    date: '2022-03-01',
    time: '06:45 PM',
    technical: true,

  },
  {
    id: 4,
    imageUrl: bidbattle,
    title: 'Bid Battle',
    date: '2022-01-01',
    time: '12:00 PM',
    technical: true,

  },
  {
    id: 5,
    imageUrl: crypticquest,
    title: 'Cryptic Quest',
    date: '2022-02-01',
    time: '03:30 PM',
    technical: true,

  },
  {
    id: 6,
    imageUrl: datacraft,
    title: 'Datacraft',
    date: '2022-03-01',
    time: '06:45 PM',
    technical: true,

  },
  {
    id: 7,
    imageUrl: somethingfishy,
    title: 'Something Fishy',
    date: '2022-01-01',
    time: '12:00 PM',
    technical: true,

  },
  // {
  //   id: 8,
  //   imageUrl: card1Image,
  //   title: 'Card 2 Title',
  //   content: 'Card 2 Content. More details about the event go here.',
  //   date: '2022-02-01',
  //   time: '03:30 PM',
  //   technical: true,

  // },

];

const Events = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const dragControls = useAnimation();
    let dragStartX = 0;
  
    const handleDragStart = (event, info) => {
      dragStartX = info.point.x;
    };
  
    const handleDragEnd = (event, info) => {
      const dragDistance = info.point.x - dragStartX;
      const totalCards = cardData.length;
    
      let newSelectedCard = selectedCard;
    
      if (dragDistance > 50) {
        newSelectedCard = (selectedCard + 1) % totalCards;
      } else if (dragDistance < -50) {
        newSelectedCard = (selectedCard - 1 + totalCards) % totalCards;
      }
    
      setSelectedCard(newSelectedCard);
      dragControls.start({ x: 0, y: 0 }); // Reset only the x-coordinate
    };
  
    const cardWidth = 350;
    const cardHeight = 350;
  
    return (
        <div style={{ display: 'flex', flexDirection: 'row',  height: '500px' }}>
          <div style={{ textAlign: 'center',display:'flex', flex: 1 , alignItems: 'center', justifyContent:'center'}}>
            <h1 className='aboutFont'>EVENTS</h1>
          </div>
          <div style={{ display:'flex',textAlign: 'center', flex: 1,  alignItems: 'center', justifyContent:'center'}}>
            <AnimatePresence>
              {cardData.map((card, index) => (

                <motion.div
                  key={card.id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  animate={dragControls}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    setSelectedCard(index);
                  }}
                  style={{
                    position: 'absolute',
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    zIndex: index === selectedCard ? 2 : 1,
                    transformOrigin: 'bottom center',
                 
                  }}
                >
          <Link key={card.id} to={`events/${card.id}`} style={{textDecoration:"none", color:"violet"}}>

                  <img src={card.imageUrl} alt={`Card ${card.id}`} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                  <div>
                    <p>{card.technical}</p>
                    <h2>{card.title}</h2>
                    <p>Date: {card.date}</p>
                    <p>Time: {card.time}</p>
                  </div>
          </Link>

                </motion.div>
                // </div>

              ))}
            </AnimatePresence>
          </div>
        </div>
      );
    };
    
    export default Events;