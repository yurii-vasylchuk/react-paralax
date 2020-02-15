import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';
import css from './Footer.module.scss';

function Footer() {
    return (
        <div className={css.Footer}>
            <div className={css.Footer_block}>
                <h2>Whoami</h2>
                <p>Hello, I am experienced full-stack developer from Ukraine. I'm working with Java/Angular/React
                    technologies. You can find examples of my work on my <a
                        href="http://yuriiy-vasylchuk-portfolio.herokuapp.com">portfolio</a></p>
            </div>
            <div className={css.Footer_block}>
                <h2>Social links</h2>
                <p>Want to know more? - find my profiles in github and linkedIn</p>
                <div className={css.SocialLinks}>
                    <a href="https://github.com/yurii-vasylchuk" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon size={"3x"} icon={faGithub}/>
                    </a>
                    <a href="https://www.linkedin.com/in/yurii-vasylchuk-40634ba4/" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon size={"3x"} icon={faLinkedin}/>
                    </a>
                </div>
            </div>
            <div className={css.Footer_block}>
                <h2>Got questions?</h2>
                <p>If you have any questions or propositions - <a href="mailto:yriy.vasilchuk@gmail.com">email me</a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
