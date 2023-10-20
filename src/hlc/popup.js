import React from "react";
import classes from './hlc.module.css';

const Popup = (props) => {

    const check = e => {
        if (e.target.classList.contains(classes.Popup)) {
            props.close();
        }
    }

    return (
        <div className={classes.Popup + ' ' + classes[props.open]} onClick={e => check(e)}>
            <div className={classes.Popup_content + ' ' + classes[props.open]}>
                <div className={classes.Popup_close} onClick={e => props.close()}></div>
                {props.children}
            </div>
        </div>
    )
}

export default Popup;