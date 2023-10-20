import React from "react";
import Logo from "../logo/logo";

const ConsultPopup = ({ close, ordering }) => {
    return (
        <div className="popup_block">
            <h1 className="h3_button">Консультація</h1>
            <ul className="popup_list">
                <li className="popup_item">
                    <div className="popup_item_name">По бухгалтерії (до 30 хв)</div>
                    <div className="popup_item_price">700 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">По бухгалтерії (1 год)</div>
                    <div className="popup_item_price">1000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">По фінансам (1 год)</div>
                    <div className="popup_item_price">1000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">По інвестуванню (1 год)</div>
                    <div className="popup_item_price">1500 грн</div>
                </li>
            </ul>
            <div className="popup_footer">
                <Logo />
                <button className="popup_button" onClick={e => {
                    close();
                    ordering({ a: 1, b: 1, c: 0 })
                }}>Замовити</button>
            </div>
        </div>
    )
}

export default ConsultPopup;