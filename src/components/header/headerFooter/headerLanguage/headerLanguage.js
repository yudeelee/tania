import React from "react";
import classes from "./headerLanguage.module.css";

const HeaderLanguage = () => {
    return (
        <div className={classes.HeaderLanguage}>
            <button>Eng</button>/
            <button>Укр</button>
        </div>
    )
}

export default HeaderLanguage;
