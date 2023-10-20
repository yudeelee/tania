import React from "react";
import Logo from "../logo/logo";

const FopCurPopup = ({ close, ordering }) => {
    return (
        <div className="popup_block">
            <h1 className="h3_button">ФОП Облік Податки</h1>
            <h2 className="h4_button">Для кого цей курс?</h2>
            <p className="popup_text">Даний курс розрахований на людей, які хочуть змінити професію, яких приваблюють операції з цифрами, можуть концентрувати увагу, хочуть започаткувати свій бізнес, але не знають з чого
                почати та людей, які хочуть відкрити для себе нову сторінку в житті і стати бухгалтером! Тривалість курсу: два тижні щодня по 1.5 год вдень.Понеділок / середа / п'ятниця - лекція, вівторок / четвер / субота - робота над засвоєнням матеріалу.<br /></p>
            <h2 className="h4_button">Якими навичками я володітиму по закінченню курсу ?</h2>
            <ul className="ul_popup">
                <li className="li_popup">Навчишся правильно обирати систему оподаткування;</li>
                <li className="li_popup">Дізнаєшся, які податки платить ФОП і куди їх платити;</li>
                <li className="li_popup">Навчишся підбирати види діяльності без помилок;</li>
                <li className="li_popup">Навчишся реєструвати ФОП on - line;</li>
                <li className="li_popup">Будеш працювати в електронному кабінеті платника податків;</li>
                <li className="li_popup">Дізнаєшся про правила документообігу;</li>
                <li className="li_popup">Будеш рахувати доходи і подавати звітність;</li>
                <li className="li_popup">Виконаєш 5 практичних завдань;</li>
                <li className="li_popup">А найголовніше станеш сам собі бухгалтер!</li>
            </ul>
            <h2 className="h4_button">Модулі курсу:</h2>
            <ul className="ul_popup">
                <li className="li_popup">Обрання системи оподаткування;</li>
                <li className="li_popup">Види діяльності.Дозволене та заборонене;</li>
                <li className="li_popup">Реєстрація ФОП;</li>
                <li className="li_popup">Первинні документи та звітність;</li>
                <li className="li_popup">ФОП і РРО(касовий апарат);</li>
            </ul>
            <h2 className="h4_button">Для пакету “Преміум”:</h2>
            <ul className="ul_popup">
                <li className="li_popup">Штрафні санкції за порушення податкового законодавства;</li>
                <li className="li_popup">Нарахування заробітної плати працівникам;</li>
            </ul>
            <div className="wrapper_popup">
                <div className="wrapper_left">
                    <h3 className="h5_button">Пакет “СТАНДАРТ”</h3>
                    <ol className="ul_popup">
                        <li className="li_popup">Відеозаписи лекцій;</li>
                        <li className="li_popup">Презентації 5 - ти модулів;</li>
                        <li className="li_popup">Відповіді на запитання 24 / 7;</li>
                    </ol>
                    <div className="popup_price">Ціна: 6000 грн</div>
                </div>
                <div className="wrapper_right">
                    <h3 className="h5_button">Пакет “ПРЕМІУМ”</h3>
                    <ol className="ul_popup">
                        <li className="li_popup">“Живі” лекції зі спікером;</li>
                        <li className="li_popup">Відеозаписи лекцій;</li>
                        <li className="li_popup">Презентації 7-ми модулів;</li>
                        <li className="li_popup">Перевірка домашніх завдань;</li>
                        <li className="li_popup">Відповіді на запитання 24 / 7;</li>
                    </ol>
                    <div className="popup_price">Ціна: 9000 грн</div>
                </div>
            </div>
            <div className="popup_footer">
                <Logo />
                <button className="popup_button" onClick={e => {
                    close();
                    ordering({ a: 3, b: 1, c: 0 });
                }}>Замовити</button>
            </div>
        </div>
    )
}

export default FopCurPopup;

