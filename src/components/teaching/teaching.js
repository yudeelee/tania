import React, { useState } from "react";
import classes from "./teaching.module.css";
import Container from './../../hlc/container';
import Popup from "../../hlc/popup";
import NavVedPopup from "../popups/navvedpopup";
import NavPodPopup from './../popups/navpodpopup';
import CashPopup from "../popups/cashpopup";

const Teaching = ({ ordering }) => {

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
        <div className={classes.teaching} id="teaching" >
            <Container>
                <div className={classes.teaching_wrapper}>
                    <div className={classes.teaching_title}>Навчання</div>
                    <ul className={classes.teaching_list}>
                        <li className={classes.teaching_item} onClick={e => {
                            setPopNum(1);
                            openPopup();
                        }}>
                            <div className={classes.info}>
                                <h3 className="h3_button">Навчання по веденню
                                    бухгалтерії ФОП / ТОВ</h3>
                                <p className="p_buttom">Індивідуальні on-line зустрічі для розширення та поглиблення
                                    знань в бухгалтерії на конкретній ділянці обліку!</p>
                            </div>
                            <div className={classes.teaching_more}>Детальніше</div>
                        </li>
                        <li className={classes.teaching_item} onClick={e => {
                            setPopNum(2);
                            openPopup();
                        }}>
                            <div className={classes.info}>
                                <h3 className="h3_button">Навчання по поданню
                                    звітності ФОП / ТОВ</h3>
                                <p className="p_buttom">Швидко та без помилок сформуємо звіт по ФОП / ТОВ
                                    для подальшої подачі звіту самостійно!</p>
                            </div>
                            <div className={classes.teaching_more}>Детальніше</div>
                        </li>
                        <li className={classes.teaching_item} onClick={e => {
                            setPopNum(3);
                            openPopup();
                        }}>
                            <div className={classes.info}>
                                <h3 className="h3_button">Фінансово-економічна
                                    гра Cash Flow</h3>
                                <p className="p_buttom">Маєте бажання підвищити рівень фінансової освіти та
                                    грамотності чи розширити знання про інвестиції? Вам сюди!</p>
                            </div>
                            <div className={classes.teaching_more}>Детальніше</div>
                        </li>
                    </ul>
                </div>
            </Container>
            <Popup open={popupCol} close={closePopup}>
                {popNum === 1 && <NavVedPopup close={closePopup} ordering={ordering} />}
                {popNum === 2 && <NavPodPopup close={closePopup} ordering={ordering} />}
                {popNum === 3 && <CashPopup close={closePopup} ordering={ordering} />}
            </Popup>
        </div >
    )
}

export default Teaching;