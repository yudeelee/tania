import React from "react";
import Logo from "../logo/logo";

const OblikPopup = ({ close, ordering }) => {
    return (
        <div className="popup_block">
            <h1 className="h3_button">Облік / аудит</h1>
            <ul className="popup_list">
                <li className="popup_item">
                    <div className="popup_item_name">Облік в програмах BAF, Finmap, Zoho books</div>
                    <div className="popup_item_price">від 3000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Аудит електронного кабінету платника</div>
                    <div className="popup_item_price">1000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Формування фінансової звітності P & L, Cash Flow, Balance</div>
                    <div className="popup_item_price">від 15 000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Бізнес план</div>
                    <div className="popup_item_price">від 5000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Формування бюджету</div>
                    <div className="popup_item_price">від 5000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Формування фінансового плану для грантів</div>
                    <div className="popup_item_price">від 5000 грн</div>
                </li>
            </ul>
            <div className="popup_footer">
                <Logo />
                <button className="popup_button" onClick={e => {
                    close();
                    ordering({ a: 1, b: 4, c: 0 })
                }}>Замовити</button>
            </div>
        </div>
    )
}

export default OblikPopup;
