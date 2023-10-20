import React from "react";
import Logo from "../logo/logo";

const PasPopup = ({ close, ordering }) => {
    return (
        <div className="popup_block">
            <h1 className="h3_button">Пасивний дохід</h1>
            <p className="popup_text">Хочеш бути щасливим і насолоджуватись життям ?<br />
                Хочеш самостійно керувати своїм часом ?<br />
                Хочеш взяти відповідальність за фінанси у свої руки ?<br />
                Хочеш ефективно примножувати фінанси ?<br />
                Хочеш отримувати пасивний дохід ?<br /><br />
                Пропоную пройти цей ТЕСТ і за результатом ти зрозумієш чи
                дійсно тобі це потрібно.<br /><br />

                Якщо твоя відповідь: “так”, то цей курс для тебе, оскільки кожен
                заслуговує на те, щоб мати фінансовий успіх, який є невід'ємною
                складовою достатку та добробуту.<br /></p>
            <h2 className="h4_button">Про що цей курс ?</h2>
            <p className="popup_text">
                Про те, як правильно користуватись грошима.Гроші - це
                інструмент, за допомогою якого ти можеш змінити світ на краще,
                будувати бізнес та проекти, допомагати ближнім.Гроші дуже
                важливі, але вони стають надто важливі коли їх немає.
                Завдання курсу впорядкувати твої фінанси і виробити навички
                цінування, заощадження, зберігання, інвестування та головне -
                примноження грошей.Тривалість курсу: два тижні щодня
                по 1.5 год вдень.Понеділок / середа / п'ятниця - лекція,
                вівторок / четвер / субота - робота над засвоєнням матеріалу.</p>
            <h2 className="h4_button">Структура курсу:</h2>
            <ul className="ul_popup_light">
                <li className="li_popup">День 1: &nbsp;&nbsp;Основні чотири навика досягнення фінансової свободи;</li>
                <li className="li_popup">День 2: &nbsp;&nbsp;Відеоматеріали та робота над аналізом витрат;</li>
                <li className="li_popup">День 3: &nbsp;&nbsp;Переконання, які заважають привести фінанси до ладу;</li>
                <li className="li_popup">День 4: &nbsp;&nbsp;Інвестування у бізнес. Як почати та де отримати фінансування?<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Грант на власну справу та формування бізнес-плану;</li>
                <li className="li_popup">День 5: &nbsp;&nbsp;Інвестиції та їх види. Правила формування інвестиційного портфеля;</li>
                <li className="li_popup">День 6: &nbsp;&nbsp;Питання, які виникають перед початком інвестування;</li>
                <li className="li_popup">День 7: &nbsp;&nbsp;Хто такий брокер та як його обрати?;</li>
                <li className="li_popup">День 8: &nbsp;&nbsp;Недержавні пенсійні фонди: плюси та мінуси.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Альтернативні інвестиційні фонди: S-group, Star life та ін.;</li>
                <li className="li_popup">День 9: &nbsp;&nbsp;Індивідуальна робота. Відкриття брокерського рахунку;</li>
                <li className="li_popup">День 10: Фундаментальний аналіз компанії, IPO.</li>
            </ul>
            <h2 className="h4_button">І пам’ятай: гроші - це інструмент для досягнення твоїх цілей!</h2>
            <div className="wrapper_popup">
                <div className="wrapper_left">
                    <h3 className="h5_button">Пакет “СТАНДАРТ”</h3>
                    <ol className="ul_popup">
                        <li className="li_popup">On-line зустрічі зі спікером;</li>
                        <li className="li_popup">Відеозаписи всіх лекцій;</li>
                        <li className="li_popup">Презентації 6-ти модулів;</li>
                        <li className="li_popup">Відповіді на запитання 24 / 7;</li>
                    </ol>
                    <div className="popup_price">Ціна: 6000 грн</div>
                </div>
                <div className="wrapper_right">
                    <h3 className="h5_button">Пакет “ПРЕМІУМ”</h3>
                    <ol className="ul_popup">
                        <li className="li_popup">On-line зустрічі зі спікером;</li>
                        <li className="li_popup">Відеозаписи всіх лекцій;</li>
                        <li className="li_popup">Презентації 6-ти модулів;</li>
                        <li className="li_popup">Відповіді на запитання 24 / 7;</li>
                        <li className="li_popup">Особиста консультація;</li>
                        <li className="li_popup">Перевірка домашніх завдань;</li>
                        <li className="li_popup">Гра Cash Flow у подарунок у Львові;</li>
                    </ol>
                    <div className="popup_price">Ціна: 9000 грн</div>
                </div>
            </div>
            <div className="popup_footer">
                <Logo />
                <button className="popup_button" onClick={e => {
                    close();
                    ordering({ a: 3, b: 2, c: 0 });
                }}>Замовити</button>
            </div>
        </div>
    )
}

export default PasPopup;


