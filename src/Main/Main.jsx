import React from 'react'
import style from './Main.module.css';

function Main() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.avatar}>
                <div className={style.image}><img src="https://prikolist.club/wp-content/uploads/2019/06/0-245.jpg" alt="avatar"/></div>
                </div>
                <div className={style.details}>
                    <h3 className={style.name}>PAVEL HERASIMCHUK </h3>
                    <p className={style.job}>frontend developer from Minsk</p>
                </div>

            </div>
        </div>
    );
}

export default Main;