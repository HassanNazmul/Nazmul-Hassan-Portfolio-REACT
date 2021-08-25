import React from 'react';
import styles from './HeaderStyle.module.css'

import nahidProfile from './../../img/profile.png'

function Header(props) {
    return (
        <React.Fragment>
            <section id={styles.home}>
                <div className="layerGap">
                    <div className="container">
                        <div className={styles.contentBox}>
                            <div className="row">
                                <div className="col-lg-8 col-sm-12">
                                    <div className={styles.contentLeft}>
                                        <span>I am Nazmul Hassan</span>
                                        <h2>Computer Engineer</h2>
                                        <a href="#contact">
                                            <button className="btn btn-outline-warning">Contact Me</button>
                                        </a>
                                        <a href="cv-nazmul-hassan.pdf" target="_blank">
                                            <button className="btn btn-outline-warning" id="cv">Download CV</button>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-12">
                                    <div className={styles.contentRight}>
                                        <div className={styles.profileImg}>
                                            <img alt="profile-pic" src={nahidProfile}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Header;