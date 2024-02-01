import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Import images for your cards
import { Bs1CircleFill, Bs2CircleFill, BsPeopleFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

import './Main.css';

import Keycharades from "../../Assets/events/KEY CHARADES.png"
import SEQUELVERSE from "../../Assets/events/SEQUELVERSE.png"
import bidbattle from "../../Assets/events/bidbattle.png"
import codegolf from "../../Assets/events/code golf.png"
import crypticquest from "../../Assets/events/crypticquest.png"
import datacraft from "../../Assets/events/data craft.png"
import somethingfishy from "../../Assets/events/something fishy.png"
import { Container } from 'react-bootstrap';


const cardData = [
    {
        id: 1,
        imageUrl: Keycharades,
        title: 'Key Charades',
        description: 'Welcome to the Land of the Dead, where creativity meets innovation in the magical world of UI/UX Designing! Inspired by the Disney Pixars hit movie Coco, this event challenges participants to instantly develop an innovative design for a given product using tools like Figma and Adobe XD. Participants are expected to instantaneously develop an innovative design for a given product and familiarize themselves with the tools. Showcase your design skills and knowledge of UI/UX principles. Dont miss out on this opportunity to enter the colorful world of UI/UX design and become a part of the legacy of Coco!',
        round1: {
            title: "League",
            detail: "1. Participants are expected to instantaneously develop an innovative design for a given product and familiarize themselves with tools like Figma and Adobe XD.2. The specific topic will only be disclosed at the start of the event.  3. Designs will be evaluated based on the experience as user, colors, look and various visual aspects and how good it solves the problem statement. o the Land of the Dead, where creativity meets innovatio"
        },
        round2: {
            title: "Finale",
            detail: " o the Land of the Dead, where creativity meets innovatio"
        },
        rules: "o the Land of the Dead, where creativity meets innovation in the magical world of UI/UX Designing! Inspired by the Disney Pixars hit movie Coco, this event challenges participants to instantly develop an innovative design for a given product using tools like Figma and Adobe XD. Participants are expected to instantaneously develop an innovative design for a given product and familiarize themselves with the tools. Showcase your design skills and knowledge of UI/UX principles. Dont miss out on this opportunity to enter the colorful world of UI/UX design and become a part of the legacy of Coco!",
        venue: "Room -102",
        note: " Land of the Dead, where cre . Winners will be selected based on their results and the time taken to complete the challenge.  4. A brief explanation of the language will be given to the participants for better understanding.",
        teamsize: 2,
        coordinators: [{ name: "Janu", Num: "9360638869" }, { name: "Gautham", Num: "9360638869" }],
        date: '2022-01-01',
        time: '12:00 PM',
        technical: true,
    }
]


const MainDescription = () => {
    const { id } = useParams();
    const eventId = parseInt(id, 10); // Convert id to integer if it's stored as a string
    const event = cardData.find((event) => event.id === eventId);

    if (!event) {
        return <div>Error: Event not found</div>;
    }

    const { title, description, round1, round2, rules, venue, note, teamsize, coordinators, date, time, technical } = event;

    return (
        <Container className="text-white" style={{ marginTop: "100px" }}>
            <div className='title'>
                <h3 className=" aboutFont text-lg">{title}</h3>
            </div>
            {technical ? (
    <div>
        Technical Event
    </div>
) : (
    <div>
        Non - Technical Event
    </div>
)}


            <div className='description text-md text-lg' style={{ textAlign: "justify", marginBottom: "40px" }}>
                {description}
            </div>

            <div className='info-event row text-white' style={{ marginBottom: "40px" }}>
                <div className='venue col-md-4' >
                    <IoLocation style={{ fontSize: "20px" }} />
                    <p className='info-detail text-md text-lg' style={{ fontSize: '20px' }}>{venue}</p>
                </div>

                <div className='time col-md-4'>
                    <MdOutlineAccessTimeFilled style={{ fontSize: "20px" }} />
                    <p className='info-detail text-md text-lg' style={{ fontSize: '20px' }}>{date} {time}</p>
                </div>

                <div className='teamsize col-md-4'>
                    <BsPeopleFill style={{ fontSize: "20px" }} />
                    <p className='info-detail text-md text-lg' style={{ fontSize: '20px' }}>{teamsize}</p>
                </div>
            </div>

            <div className='round-rules row' style={{ padding: "20px" }}>
                <div className='rounds col-md-6'>
                    <h3 className="text-lg">Rounds</h3>
                    <div className='element-2' style={{ marginBottom: "20px" }}>
                        <Bs1CircleFill style={{ fontSize: '50px' }} />
                        <h3 className="text-md text-lg">{round1.title}</h3>
                    </div>
                    <div className='element-3'>
                        <p className="text-md text-lg">{round1.detail}</p>
                    </div>
                    <div className='element-2' style={{ marginBottom: "20px" }}>
                        <Bs2CircleFill style={{ fontSize: '50px' }} />
                        <h3 className="text-md text-lg">{round2.title}</h3>
                    </div>
                    <div className='element-3'>
                        <p className="text-md text-lg">{round2.detail}</p>
                    </div>
                </div>
                <div className='rules col-md-6'>
                    <h3 className="text-lg" style={{ marginBottom: "20px" }}>Rules</h3>
                    <p className='element-3 text-md text-lg'>{rules}</p>
                </div>
            </div>


            <div className='row' style={{ display: "flex", flexDirection: "row" }}>
                <h3 className="text-lg">Coordinators</h3>
                <div className='coord1' style={{ display: "flex", flexDirection: "row", margin: "20px 0", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="text-md">{coordinators[0].name}</div>
                        <div className="text-md">{coordinators[0].Num}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                        <a href={`https://wa.me/${coordinators[0].Num}`} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href={`tel:${coordinators[0].Num}`} target="_blank" rel="noopener noreferrer">
                            <FaPhoneAlt />
                        </a>
                    </div>
                </div>
                <div className='coord1' style={{ display: "flex", flexDirection: "row", margin: "20px 0", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="text-md">{coordinators[1].name}</div>
                        <div className="text-md">{coordinators[1].Num}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                        <a href={`https://wa.me/${coordinators[1].Num}`} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href={`tel:${coordinators[1].Num}`} target="_blank" rel="noopener noreferrer">
                            <FaPhoneAlt />
                        </a>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='note col-md-12' style={{ marginBottom: "20px", padding: "20px" }}>
                    <h3 className="text-lg">Note</h3>
                    <p className='element-3 text-md text-lg'>{note}</p>
                </div>
            </div>

        </Container>
    )
};

export default MainDescription;
