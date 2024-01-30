import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FcNext } from "react-icons/fc";

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
  const [selectedCard, setSelectedCard] = useState(0);

  const handleNext = () => {
    setSelectedCard((selectedCard + 1) % cardData.length);
  };

  const cardWidth = 350;
  const cardHeight = 350;

  return (
    <div id="events" className='aboutBox2' style={{ display: 'flex', flexDirection: 'row', height: '500px' }}>
      <div style={{ textAlign: 'center', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <h1 className='aboutFont' style={{ padding: "30px" }}>DIVERSE EVENTS, ENDLESS POSSIBILITIES</h1>
      </div>
      <div style={{ display: 'flex', textAlign: 'center', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative'}}>
          <Link key={cardData[selectedCard].id} to={`events/${cardData[selectedCard].id}`} style={{ textDecoration: "none", color: "violet" }}>
            <img src={cardData[selectedCard].imageUrl} alt={`Card ${cardData[selectedCard].id}`} style={{ width: '80%', borderRadius: '10px' }} />
          </Link>
        </div>
        <div>
          <button onClick={handleNext}><FcNext size={30} /></button>
        </div>
      </div>
    </div>
  );
};

export default Events;