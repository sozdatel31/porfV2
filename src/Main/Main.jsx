import React from 'react'
import style from './Main.module.css';

function Main() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.container2}>
                    <div className={style.content}>
                        <div className={style.avatar}>
                            <div className={style.image}></div>
                        </div>
                        <div className={style.details}>
                            <h3 className={style.name}>PAVEL HERASIMCHUK </h3>
                            <p className={style.job}>frontend developer from Minsk, Belarus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;