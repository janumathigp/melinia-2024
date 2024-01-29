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
        <div style={{ marginTop: '100px', backgroundColor: 'white' }}>
            <div className='element-1' style={{ display: 'flex' }}>
                <h2 className="aboutFont" style={{ margin: '10px' }}>{title}</h2>
            </div>

            <p className='element-1'>{description}</p>

            <div className='info'>
                <div className='venue element-4'>
                    <IoLocation style={{ fontSize: "30px" }} />
                    <p className='info-detail' style={{ fontSize: '25px' }}>{venue}</p>
                </div>

                <div className='time element-4' >
                    <MdOutlineAccessTimeFilled style={{ fontSize: "30px" }} />
                    <p className='info-detail' style={{ fontSize: '25px' }}>{date} {time}</p>
                </div>

                <div className='teamsize element-4' >
                    <BsPeopleFill style={{ fontSize: "30px" }} />
                    <p className='info-detail' style={{ fontSize: '25px' }}>{teamsize}</p>
                </div>
            </div>

            <div className='round-rules'>
                <div className='rounds'>
                    <div className='element-2'>
                        <Bs1CircleFill style={{ fontSize: '50px' }} />
                        <h3>{round1.title}</h3>
                    </div>
                    <div className='element-3'>
                        <p>{round1.detail}</p>
                    </div>
                    <div className='element-2'>
                        <Bs2CircleFill style={{ fontSize: '50px' }} />
                        <h3>{round2.title}</h3>
                    </div>
                    <div className='element-3'>
                        <p>{round2.detail}</p>
                    </div>
                </div>
                <div className='rules'>
                    <h3 className='element-2'>Rules</h3>
                    <p className='element-3'>{rules}</p>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div className='element-5 '>
                <h3 >Coordinators</h3>
                <ul className='coord '>
                    {coordinators.map((coordinator) => (

                        <li key={coordinator.name} style={{ fontSize: '20px' }}>
                            <div className='sep'>
                            <div className='details'>
                                <div> {coordinator.name}</div> <div>{coordinator.Num}</div>
                            </div>
                            <div className='link'>
                                <a
                                    href={`https://wa.me/${coordinator.Num}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp />
                                </a>
                            
                                <a
                                    href={`tel:${coordinator.Num}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaPhoneAlt />
                                </a>
                            </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='note'>
                <h3 className='element-5'>Note</h3>
                <p className='element-3'>{note}</p>
            </div>
            </div>
        </div>

    );

};

export default MainDescription;