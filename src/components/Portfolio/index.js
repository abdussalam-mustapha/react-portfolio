import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import img_1 from "../Portfolio/images/1.jpg"
import img_2 from "../Portfolio/images/2.jpg"
import img_3 from "../Portfolio/images/3.jpg"
import img_5 from "../Portfolio/images/5.jpg"
import img_6 from "../Portfolio/images/b.jpg"
import img_7 from "../Portfolio/images/c.jpg"
import img_8 from "../Portfolio/images/d.jpg"
import img_9 from "../Portfolio/images/s.jpg"

// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const portfolio = [
        {
            id: 0,
            image: img_1,
            name: "mustysama",
            description: "lord musty lives on"

        },
        {
            id: 1,
            image: img_2,
            name: "mustysama",
            description: "lord musty lives on"

        },
        {
            id: 2,
            image: img_3,
            name: "mustysama",
            description: "lord musty lives on"

        },
        {
            id: 3,
            image: img_5,
            name: "mustysama",
            description: "lord musty lives on"

        },
        {
            id: 4,
            image: img_6,
            name: "mustysama",
            description: "lord musty lives on"

        },
        {
            id: 5,
            image: img_7,
            name: "mustysama",
            description: "lord musty lives on"

        },
        {
            id: 6,
            image: img_8,
            name: "mustysama",
            description: "lord musty lives on"

        },
        {
            id: 7,
            image: img_9,
            name: "mustysama",
            description: "lord musty lives on"

        },
    ]

    // useEffect(() => {
    //     getPortfolio();
    // }, []);

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <br /> <br />
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Web Projects".split("")}
                        idx={15}
                    />
                </h1>

                <div>{renderPortfolio(portfolio)}</div>
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Mobile app Projects.".split("")}
                        idx={15}
                    />
                </h1>
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"COMING SOON...".split("")}
                        idx={15}
                    />
                </h1>
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Blockchain Projects.".split("")}
                        idx={15}
                    />
                </h1>
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"COMING SOON...".split("")}
                        idx={15}
                    />
                </h1>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;