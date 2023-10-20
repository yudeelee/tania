import React from "react";
import Logo from "../logo/logo";

const NavPodPopup = ({ close, ordering }) => {
    return (
        <div className="popup_block  small_block">
            <h1 className="h3_button">Навчання по поданню звітності ФОП / ТОВ</h1>
            <p className="popup_text">Навчання проводиться у форматі  індивідуальної on-line зустрічі. Програма і час занять підбираємо індивідуально. Разом з Вами та без помилок сформуємо звіти по ФОП/ТОВ.</p>
            <div className="popup_price">Ціна: 1500 грн / год</div>
            <div className="popup_footer">
                <Logo />
                <button className="popup_button" onClick={e => {
                    close();
                    ordering({ a: 2, b: 2, c: 0 });
                }}>Замовити</button>
            </div>
        </div>
    )
}

export default NavPodPopup;