import React from "react";
import classes from "./headerFooter.module.css";
import HeaderLanguage from "./headerLanguage/headerLanguage";
import HeaderSocial from "./headerSocial/headerSocial";
import Slog from "./Slog/Slog";

const HeaderFooter = () => {
    return (
        <div className={classes.headerFooter}>
            <Slog />
            {/* <div className={classes.headfoot_wrapper}>
                <HeaderLanguage />
            </div> */}
            <div className={classes.headfoot_wrapper}>
                <HeaderSocial />
            </div>
        </div>
    )
}

export default HeaderFooter;