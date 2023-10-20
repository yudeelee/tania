import React from "react";
import classes from './hlc.module.css';

const Container = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default Container;