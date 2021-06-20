import React from 'react'
import style from './Projects.module.css';


function Projects() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.container2}>
                    <div className={style.title}>
                        <div className={style.title_flex}>
                            <h3>My Projects</h3>
                        </div>
                    </div>
                    <div className={style.wrapper}>
                        <div>
                                <ul className={style.portfolio_list}>
                                    <li>
                                        <div className={style.inner}>
                                            <img
                                                src="https://image.freepik.com/free-vector/social-network-connections_1010-422.jpg"
                                                alt="SN"/>
                                                Read More
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.inner}>
                                            <img
                                                src="https://image.freepik.com/free-vector/social-network-connections_1010-422.jpg"
                                                alt="SN"/>Read More
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.inner}>
                                            <img
                                                src="https://image.freepik.com/free-vector/social-network-connections_1010-422.jpg"
                                                alt="SN"/>Read More
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.inner}>
                                            <img
                                                src="https://image.freepik.com/free-vector/social-network-connections_1010-422.jpg"
                                                alt="SN"/>Read More
                                        </div>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Projects;