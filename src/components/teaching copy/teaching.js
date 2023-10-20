import React, { useState } from "react";
import classes from "./teaching.module.css";
import Container from '../../hlc/container';
import Popup from "../../hlc/popup";

const Teaching = () => {

    const [popupCol, setPopupCol] = useState('');

    const openPopup = () => {
        document.body.style.overflowY = 'hidden';
        setPopupCol('open');

    }

    const closePopup = () => {
        document.body.style.overflowY = 'scroll';
        setPopupCol('close');
    }

    return (
        <div className={classes.teaching} id="teaching" >
            <Container>
                <div className={classes.teaching_wrapper}>
                    <div className={classes.teaching_title}>Навчання</div>
                    <ul className={classes.teaching_list}>
                        <li className={classes.teaching_item} onClick={openPopup}>
                            <h3 className={classes.teaching_head}>Консультація</h3>
                            <div className={classes.teaching_more}>Детальніше</div>
                        </li>
                        <li className={classes.teaching_item}>
                            <h3 className={classes.teaching_head}>Консультація</h3>
                            <div className={classes.teaching_more}>Детальніше</div>
                        </li>
                        <li className={classes.teaching_item}>
                            <h3 className={classes.teaching_head}>Консультація</h3>
                            <div className={classes.teaching_more}>Детальніше</div>
                        </li>
                    </ul>
                </div>
            </Container>
            <Popup open={popupCol} close={closePopup}>
                Hello
            </Popup>
        </div >
    )
}

export default Teaching;