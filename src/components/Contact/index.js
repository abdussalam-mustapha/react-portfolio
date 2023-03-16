import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'

import AOS from "aos"
import "aos/dist/aos.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import m3 from "../../images/m3.png"

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

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
      <div className="contact-page">
        <div className="text_zone">
          <div className='form' data-aos="fade-right" data-aos-duration="1500">
            <h1 className='page-title'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially on ambitious
              or large projects. However, if you have any other requests or
              questions, don't hesitate to contact me using below form either.
            </p>
            <div className="contact-form">
              <form ref={form}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <img className='brick' src={m3} alt="brick_text" data-aos="fade-left" data-aos-duration="1500" />
        </div>
        <ul className='socials'>
        <li>
          <a
            href="https://www.linkedin.com/in/abdussalam-mustapha-53a312238/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abdussalam-mustapha"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mustaph10543271" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
