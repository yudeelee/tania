import React from "react";
import Logo from "../logo/logo";

const FopPopup = ({ close, ordering }) => {
    return (
        <div className="popup_block">
            <h1 className="h3_button">ФОП</h1>
            <ul className="popup_list">
                <li className="popup_item">
                    <div className="popup_item_name">Відкриття ФОП</div>
                    <div className="popup_item_price">1500 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Реєстрація ПРРО</div>
                    <div className="popup_item_price">2500 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Відкриття ФОП + реєстрація ПРРО</div>
                    <div className="popup_item_price">2700 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Ведення ФОП без РРО</div>
                    <div className="popup_item_price">1500 грн / міс</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Ведення ФОП з РРО</div>
                    <div className="popup_item_price">2700 грн / міс</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Ведення ФОП з найманими працівниками</div>
                    <div className="popup_item_price">700 грн / пр.міс</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Закриття ФОП</div>
                    <div className="popup_item_price">від 2000 грн</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Подача звітності</div>
                    <div className="popup_item_price">1500 грн / звіт</div>
                </li>
                <li className="popup_item">
                    <div className="popup_item_name">Оформлення декрету</div>
                    <div className="popup_item_price">2200 грн</div>
                </li>
            </ul>
            <div className="popup_footer">
                <Logo />
                <button className="popup_button" onClick={e => {
                    close();
                    ordering({ a: 1, b: 3, c: 0 })
                }}>Замовити</button>
            </div>
        </div>
    )
}

export default FopPopup;

