import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import AOS from "aos"
import "aos/dist/aos.css"
import './index.scss'

import coder from "../../images/gif.gif"

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    AOS.init();
    AOS.refresh()
}, [])


  return (
    <>
      <div className="about-page">
        <div className="text-zone" data-aos="fade-right" data-aos-duration="1500">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm passionate about building scalable and user friendly web applications
            using the latest technologies.
          </p>
          <p align="LEFT">
            I'm a MERN stack developer, I use HTML, CSS (and its libraries), Javascript,
            React and Nextjs for frontend development and for for backend I use Nodejs and Express, I am also
            proficient in using databases such as MySQL and MongoDB.
          </p>
          <p>
            In addition to my technical skills, I have excellent problem solving abilities, and
            enjoy working collaboratively as a team. I am constantly learning and staying up-to-date
            with the latest technologies and trends in the industry.
          </p>
          <p>
            I am excited to bring my skills to new and challenging projects and look forward to the
            opportunity to work with innovative companies and teams.
          </p>
          <p>
            Fun facts about me:- I love football, watching animes and of course eating. LOL.
          </p>
        </div>

        <img src={coder} alt="coder"  data-aos="fade-left" data-aos-duration="1500"/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
