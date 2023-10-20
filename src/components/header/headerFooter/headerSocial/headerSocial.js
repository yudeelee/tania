import React from "react";
import classes from "./headerSocial.module.css";
import instagram from "../../../../img/instagram.png";
import telegram from "../../../../img/telegram.png";
import youtube from "../../../../img/youtube.png";

const HeaderSocial = () => {

    return (
        <ul className={classes.HeaderSocial}>
            <li className={classes.HeaderSocialItem}>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tanyaselezniova_accountant/">
                    <img src={instagram} alt="instagram" />
                </a>
            </li >
            <li className={classes.HeaderSocialItem}>
                <a target="_blank" rel="noreferrer" href="https://t.me/tanyaselezniova_accountant">
                    <img src={telegram} alt="telegram" />
                </a>
            </li>
            <li className={classes.HeaderSocialItem}>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCUIE8QzCvHWnMYMupVenDDQ">
                    <img src={youtube} alt="youtube" />
                </a>
            </li>
        </ul >
    )
}

export default HeaderSocial;