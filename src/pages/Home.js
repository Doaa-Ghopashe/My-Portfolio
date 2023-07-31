import React from 'react'
import Header from '../components/Header'
import Slider from './../components/Slider';
import styles from "../pagestyle/Home.module.css";
import { faAnglesDown as down } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home() {
  const scrollDown = () => {
    window.scroll({
      top:document.body.scrollHeight,
      behavior:"smooth"
  })
  }
  return (
    <>
      <Header>
      <div className="headertext">
          <h1>Hello, I'm Doaa</h1>
          <span className={styles.jobtitle}>FullStack developer </span>
          <p>
            passionate about developing an interactive applications, producing quality work with dynamic user experience.
            <br/>
            <span className={styles.highlight}>feel free to scroll down</span>
          </p>
          
        </div>
        <button className={`${styles.scrollbtn}`} onClick={scrollDown}>{<FontAwesomeIcon icon={down} />}</button>
      </Header>
      <main className={styles.HomeBody}>
        <section className='IntroVideo'>
          <div className='container'>
            <div className='row'>
              <div className='video'>
                <video poster="https://res.cloudinary.com/dmozswvnl/image/upload/v1690821735/Portfolio_kqbxfb.png" controls>
                  <source src="https://res.cloudinary.com/dmozswvnl/video/upload/v1690394753/Portfolio-Demo_ntpgqk.mp4" type='video/mp4'/>
                  <source src="https://github.com/Doaa-Ghopashe/Store/blob/main/Videos/Portfolio-Demo.ogg" type='video/ogg'/>

                </video>
              </div>
            </div>
          </div>
        </section>
        <section className='LatestProjects'>
          <div className={styles.sectionTitle}>
            <h1>Latest Projects</h1>
          </div>
          <Slider/>
        </section>
        
      </main>
    </>
  )
}
