import React from 'react'
import style from './AboutMe.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'

function AboutMe() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.container2}>
                    <div className={style.AboutImage}>
                        <img src="http://tokyo.ibthemespro.com/assets/img/slider/1.jpg"
                             alt="about"/>
                    </div>
                    <div className={style.description}>
                        <h3 className={style.name}>
                            Pavel Herasimchuk & FrontEnd developer</h3>
                        <div className={style.descInner}>
                            <div className={style.left}>
                                <p>Hello. I am doing front-end development. I will be glad to work with you.</p>
                                <div className="tokyo_tm_button">
                                    <button className="ib-button">Download CV</button>
                                </div>
                            </div>
                            <div className={style.right}>
                                <ul>
                                    <li><p><span>Birthday:</span>21.01.1997</p></li>
                                    <li><p><span>Age:</span>24</p></li>
                                    <li><p><span>Address:</span>Minsk, Belarus</p></li>
                                    <li><p><span>Email:</span><a href="mailto:pavlik.gerasim@yandex.by">pavlik.gerasim@yandex.by</a></p>
                                    </li>
                                    <li><p><span>Phone:</span><a href="tel:+375336934912">+375 33 693 49 12</a></p></li>
                                    <li><p><span>Study:</span>Belarusian National Technical University</p></li>
                                    <li><p><span>Freelance:</span>Available</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;