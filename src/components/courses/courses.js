import React, { useState } from "react";
import classes from "./courses.module.css";
import Container from '../../hlc/container';
import Popup from "../../hlc/popup";
import FopCurPopup from './../popups/fopcurpopup';
import PasPopup from './../popups/paspopup';

const Courses = ({ ordering }) => {

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
        <div className={classes.courses} id="courses" >
            <Container>
                <div className={classes.courses_wrapper}>
                    <div className={classes.courses_title}>Курси</div>
                    <ul className={classes.courses_list}>
                        <li className={classes.courses_item} onClick={e => {
                            setPopNum(1);
                            openPopup();
                        }}>
                            <div className={classes.info}>
                                <h3 className="h3_button">ФОП. Облік. Податки</h3>
                                <p className="p_buttom">П’ятиденний інтенсив для тих, хто хоче оновити або
                                    отримати перші знання з “бухгалтерії”!</p>
                            </div>
                            <div className={classes.courses_more}>Детальніше</div>
                        </li>
                        <li className={classes.courses_item} onClick={e => {
                            setPopNum(2);
                            openPopup();
                        }}>
                            <div className={classes.info}>
                                <h3 className="h3_button">Пасивний дохід</h3>
                                <p className="p_buttom">Ти навчишся заробляти на інвестиціях в будь-який час,
                                    впорядкуєш фінанси і побудуєш фінансовий план на майбутнє!</p>
                            </div>
                            <div className={classes.courses_more}>Детальніше</div>
                        </li>
                    </ul>
                </div>
            </Container>
            <Popup open={popupCol} close={closePopup}>
                {popNum === 1 && <FopCurPopup close={closePopup} ordering={ordering} />}
                {popNum === 2 && <PasPopup close={closePopup} ordering={ordering} />}
            </Popup>
        </div >
    )
}

export default Courses;