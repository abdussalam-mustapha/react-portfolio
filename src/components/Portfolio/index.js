import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import AOS from "aos"
import "aos/dist/aos.css"

import img_0 from "../Portfolio/images/mave.jpg"
import img_1 from "../Portfolio/images/1.jpg"
import img_2 from "../Portfolio/images/2.jpg"
import img_3 from "../Portfolio/images/3.jpg"
import img_5 from "../Portfolio/images/5.jpg"
import img_6 from "../Portfolio/images/b.jpg"
import img_7 from "../Portfolio/images/c.jpg"
import img_8 from "../Portfolio/images/d.jpg"
import img_9 from "../Portfolio/images/s.jpg"


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        AOS.init();
        AOS.refresh()
    }, [])

    const portfolio = [
        {
            id: 0,
            image: img_0,
            name: "My Portfolio",
            description: "Vanilla js | React | SCSS | Nodejs | MongoDB",
            url: "https:mavedadev.vercel.app"
        },
        {
            id: 1,
            image: img_3,
            name: "Getblack",
            description: "Vanilla js | React | SCSS | Nodejs | Express | Mongoose | MongoDb",
            url: "https://getblack.ca"
        },
        {
            id: 2,
            image: img_1,
            name: "One wallet",
            description: "React | SCSS",
            url: "https://one-walllet.vercel.app"
        },
        {
            id: 3,
            image: img_7,
            name: "Credivore",
            description: "React | SCSS | AOS",
            url: "https://credivore.netlify.app"
        },
        {
            id: 4,
            image: img_8,
            name: "Melody",
            description: "HTML | CSS | Vanilla Js",
            url: "https://abdussalam-mustapha.github.io/OLM"
        },
        {
            id: 5,
            image: img_6,
            name: "Style conference",
            description: "HTML | CSS | Vanilla Js",
            url: ""
        },
        {
            id: 6,
            image: img_5,
            name: "Loyalbaze",
            description: "React | CSS ",
            url: "https://loyalbaze.vercel.app"
        },
        {
            id: 7,
            image: img_2,
            name: "Mock-up portfolio",
            description: "React | Tailwind CSS",
            // url: "https://ama-v01.vercel.app"
        },
        {
            id: 8,
            image: img_9,
            name: "Youtube clone",
            description: "React | CSS | Shell",
            // url: "https://youtube-clone-self.vercel.app"
        },
    ]

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx} data-aos="fade-up" data-aos-duration="1500">
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
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;