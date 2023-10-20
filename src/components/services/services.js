import React, { useState } from "react";
import classes from "./services.module.css";
import Container from './../../hlc/container';
import Popup from "../../hlc/popup";
import ConsultPopup from "../popups/consultpopup";
import TovPopup from './../popups/tovpopup';
import FopPopup from './../popups/foppopup';
import OblikPopup from './../popups/oblikpopup';

const Services = ({ ordering }) => {

    const [popNum, setPopNum] = useState('')
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
        <div className={classes.services} id="services" >
            <Container>
                <div className={classes.servises_wrapper}>
                    <div className={classes.services_title}>Послуги</div>
                    <ul className={classes.services_list}>
                        <li className={classes.services_item} onClick={e => {
                            setPopNum(1);
                            openPopup();
                        }}>
                            <h3 className="h3_button">Консультація</h3>
                            <div className={classes.services_more}>Детальніше</div>
                        </li>
                        <li className={classes.services_item} onClick={e => {
                            setPopNum(2);
                            openPopup();
                        }}>
                            <h3 className="h3_button">ТОВ / ПП</h3>
                            <div className={classes.services_more}>Детальніше</div>
                        </li>
                        <li className={classes.services_item} onClick={e => {
                            setPopNum(3);
                            openPopup();
                        }}>
                            <h3 className="h3_button">ФОП</h3>
                            <div className={classes.services_more}>Детальніше</div>
                        </li>
                        <li className={classes.services_item} onClick={e => {
                            setPopNum(4);
                            openPopup();
                        }}>
                            <h3 className="h3_button">Облік / аудит</h3>
                            <div className={classes.services_more}>Детальніше</div>
                        </li>
                    </ul>
                </div>
            </Container>
            <Popup open={popupCol} close={closePopup}>
                {popNum === 1 && <ConsultPopup close={closePopup} ordering={ordering} />}
                {popNum === 2 && <TovPopup close={closePopup} ordering={ordering} />}
                {popNum === 3 && <FopPopup close={closePopup} ordering={ordering} />}
                {popNum === 4 && <OblikPopup close={closePopup} ordering={ordering} />}
            </Popup>
        </div >
    )
}

export default Services;