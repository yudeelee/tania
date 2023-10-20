import React from "react";
import classes from './footer.module.css';
import HeaderSocial from "../header/headerFooter/headerSocial/headerSocial";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <strong className={classes.tel}>(073) 418-71-47</strong>
            <HeaderSocial />
        </div>
    )
}

export default Footer;