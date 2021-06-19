import React from 'react'
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <div className={style.body}>
                    <div><a href="">HOME</a></div>
                    <div><a href="">ABOUT ME</a></div>
                    <div><a href="">MY PORTFOLIO</a></div>
                    <div><a href="">MY SKILLS</a></div>
                    <div><a href="">CONTACT</a></div>
            </div>
        </div>
    );
}

export default Nav;
