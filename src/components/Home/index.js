import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import img_1 from "../../images/musty.png"
import cv from "../../images/resume.pdf"
import Logo from './Logo'
import './index.scss'

import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M', 'u', 's', 't', 'a', 'p', 'h', 'a', ',', ' ', '(', 't', 'h', 'e', ' ', 'c', 'o', 'd', 'e', ' ', 'n', 'i', 'n', 'j', 'a', ')', ',']
  const jobArray = [
    'a',
    ' ',
    'f',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])

  return (
    <>
      <div className="home-page">
        <div className="text-zone" data-aos="fade-right" data-aos-duration="1500">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className='m_n'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={1}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={10}
              />
            </span>
          </h1>
          <div className='btn'>
            <Link to="/about" className="flat-button">
              About Me
            </Link>
            <a to="" className="button" href={cv} download="abdussalam-mustapha-resume">
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <img src={img_1} alt="web dev" className='m_img' data-aos="fade-left" data-aos-duration="1500" />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
