import React from "react";
import Logo from "../logo/logo";

const TovPopup = ({ close, ordering }) => {
    return (
        <div className="popup_block">
            <h1 className="h3_button">ТОВ / ПП</h1>
            <ul className="popup_list">
                <li className="popup_item">
                    <div className="popup_item_name">Ведення ТОВ / ПП на спрощеній системі без ПДВ</div>
                    <div className="popup_item_price">від 4500 грн / міс</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Ведення ТОВ / ПП на спрощеній системі з ПДВ / акцизом</div>
                    <div className="popup_item_price">від 6500 грн / міс</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Ведення ТОВ / ПП на загальній системі з ПДВ / імпорт / виробництво / акциз</div>
                    <div className="popup_item_price">від 8500 грн / міс</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Ведення ТОВ / ПП з найманими працівниками</div>
                    <div className="popup_item_price">700 грн / пр.міс</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Подача звітності</div>
                    <div className="popup_item_price">1500 грн / звіт</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Оформлення декрету</div>
                    <div className="popup_item_price">2200 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Ведення неприбуткової організації</div>
                    <div className="popup_item_price">4500 грн</div>
                </li>
            </ul>
            <div className="popup_footer">
                <Logo />
                <button className="popup_button" onClick={e => {
                    close();
                    ordering({ a: 1, b: 2, c: 0 })
                }}>Замовити</button>
            </div>
        </div>
    )
}

export default TovPopup;
