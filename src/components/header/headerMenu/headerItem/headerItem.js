import React from "react";
import classes from "./headerItem.module.css"

const HeaderItem = ({ name, ind, hd, tg }) => {

    return (
        <li className={classes.headerItem} onClick={() => {
            hd(ind);
            if (tg) { tg(); }
        }}>
            {/* <a href={props.url}>{props.name}</a> */}
            {name}
        </li>
    )
}

export default HeaderItem;