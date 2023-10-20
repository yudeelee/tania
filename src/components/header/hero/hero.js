import React from "react";
import classes from "./hero.module.css";
import heroImg from "../../../img/headerphoto.png";

const Hero = () => {
    return (
        <div className={classes.hero}>
            <img src={heroImg} alt="Hero" />
        </div>
    )
}

export default Hero;