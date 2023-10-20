import React, { useState, useEffect } from "react";
import classes from './order.module.css';
import axios from "axios";
import Container from "../../hlc/container";
import orders from "../../data";
import Footer from "../footer/footer";

const Order = ({ selSection }) => {

    // const TOKEN = "5308519273:AAGNwEV_QI-YZCEggFwXW3j0aci1f5n5lcQ";
    // const CHAT_ID = "-1001606250875";
    // const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const TOKEN = "5530765545:AAFy5U47-r8OYc198-5blcgCR-cKB3_jowE";
    const CHAT_ID = "-1001517912943";
    const URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    console.log(selSection.categories || '');

    const [data, setData] = useState({ section: selSection.name, categories: selSection.categories || [], category: selSection.category || '', positions: selSection.positions || [] });
    const [sec, setSec] = useState('');
    const [sec1, setSec1] = useState('');
    const [sec2, setSec2] = useState('');
    const [err, setErr] = useState('');
    const [good, setGood] = useState('');
    const [errmsg, setErrMsg] = useState('');

    useEffect(() => {
        setData({ section: selSection.name, categories: selSection.categories || [], category: selSection.category, positions: selSection.positions || [] });
    }, [selSection])

    console.log(data);

    const pay = () => {
        if (!data.section) {
            setErrMsg('Оберіть Розділ');
            toogleErr();
            return;
        }

        if (!data.category) {
            setErrMsg('Оберіть Категорію');
            toogleErr();
            return;
        }

        if (!data.position) {
            setErrMsg('Оберіть Послугу');
            toogleErr();
            return;
        }

        window.open(`https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%225169330524999023%22%2C%22amt%22%3A%22${data.price || 100}%22%2C%22ccy%22%3A%22UAH%22%7D`, '_blank');
    }

    const sendMessage = () => {

        if (!data.name) {
            setErrMsg('Введіть Імя');
            toogleErr();
            return;
        }

        if (!data.email) {
            setErrMsg('Введіть E-mail');
            toogleErr();
            return;
        }

        if (!data.phone) {
            setErrMsg('Введіть Телефон');
            toogleErr();
            return;
        }

        if (!data.phone) {
            setErrMsg('Введіть Телефон');
            toogleErr();
            return;
        }

        if (!data.section) {
            setErrMsg('Оберіть Розділ');
            toogleErr();
            return;
        }

        if (!data.category) {
            setErrMsg('Оберіть Категорію');
            toogleErr();
            return;
        }

        if (!data.position) {
            setErrMsg('Оберіть Послугу');
            toogleErr();
            return;
        }


        let message = `${data.name}\n${data.phone}\n${data.email}\n${data.section}\n${data.category}\n${data.position}\n${data.message}\n${data.price} грн`;

        console.log(data.categories);

        axios.post(URI, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'html'
        })
            .then(res => {
                setData({ categories: [], positions: [] });
                toogleGood();
            })
            .catch(err => {
                setErrMsg('Виникла непередбачувана ситуація: ' + err);
                toogleErr();
            })
        console.log(data.categories);
    }

    const toogleSel = (par) => {
        if (par === "section") {
            if (sec === '') {
                setSec(classes.show);
            }
            else {
                setSec('');
            }
        }
        if (par === "categories") {
            if (sec1 === '') {
                setSec1(classes.show);
            }
            else {
                setSec1('');
            }
        }
        if (par === "positions") {
            if (sec2 === '') {
                setSec2(classes.show);
            }
            else {
                setSec2('');
            }
        }
    }

    const selSec = (par) => {
        if (par === 'Послуги') {
            setData({ ...data, section: par, category: '', position: '', positions: [], categories: orders.cat_pos });
        }
        if (par === 'Навчання') {
            setData({ ...data, section: par, category: '', position: '', positions: [], categories: orders.cat_nav });
        }
        if (par === 'Курси') {
            setData({ ...data, section: par, category: '', position: '', positions: [], categories: orders.cat_cur });
        }
        toogleSel("section");
    }

    const selCat = (par) => {
        if (par === 'Консультація') {
            setData({ ...data, category: par, position: '', positions: orders.consult });
        }
        if (par === 'ТОВ / ПП') {
            setData({ ...data, category: par, position: '', positions: orders.tov });
        }
        if (par === 'ФОП') {
            setData({ ...data, category: par, position: '', positions: orders.fop });
        }
        if (par === 'Облік / аудит') {
            setData({ ...data, category: par, position: '', positions: orders.oblik });
        }
        if (par === 'Навчання по веденню бухгалтерії ФОП / ТОВ') {
            setData({ ...data, category: par, position: '', positions: orders.navved });
        }
        if (par === 'Навчання по поданню звітності ФОП / ТОВ') {
            setData({ ...data, category: par, position: '', positions: orders.navpod });
        }
        if (par === 'Фінансово-економічна гра Cash Flow') {
            setData({ ...data, category: par, position: '', positions: orders.cash });
        }
        if (par === 'ФОП. Облік. Податки') {
            setData({ ...data, category: par, position: '', positions: orders.fopcur });
        }
        if (par === 'Пасивний дохід') {
            setData({ ...data, category: par, position: '', positions: orders.pas });
        }
        toogleSel("categories");
    }

    const selPos = (name, price) => {
        setData({ ...data, position: name, price: price });
        toogleSel("positions");
    }

    const toogleErr = () => {
        if (err === '') {
            setErr(classes.show);
        }
        else {
            setErr('');
        }
    }

    const toogleGood = () => {
        if (good === '') {
            setGood(classes.show);
        }
        else {
            setGood('');
        }
    }

    return (
        <div className={classes.order_wrapper}>
            <Container>
                <div className={classes.Order}>
                    <div className={classes.Order_title}>Замовлення</div>
                    <div className={classes.Order_body}>
                        <div className={classes.form_data}>
                            <input type="text" onChange={(e) => setData({ ...data, name: e.target.value })} name="name" placeholder="Введіть Ваше ім'я..." value={data.name || ''} />
                        </div>
                        <div className={classes.form_data}>
                            <input type="phone" onChange={(e) => setData({ ...data, phone: e.target.value })} name="phone" placeholder="Введіть Ваш номер телефону..." value={data.phone || ''} />
                            <input type="email" onChange={(e) => setData({ ...data, email: e.target.value })} name="email" placeholder="Введіть Ваш email..." value={data.email || ''} />
                        </div>
                        <div className={classes.form_data}>
                            <div className={classes.select_input} onClick={e => toogleSel("section")}>{data.section || 'Оберіть розділ...'}</div>
                            <div className={classes.select_input_variants + ' ' + sec}>
                                {orders.section.map((sec, index) => {
                                    return <div key={index} onClick={e => selSec(sec.name)} className={classes.select_input_variant}>{sec.name}</div>
                                })}
                            </div>
                            <div className={classes.trback + ' ' + sec} onClick={e => toogleSel("section")}></div>
                        </div>
                        <div className={classes.form_data}>
                            <div className={classes.select_input} onClick={e => toogleSel("categories")}>{data.category || 'Оберіть категорію...'}</div>
                            <div className={classes.select_input_variants + ' ' + sec1}>
                                {data.categories.map((sec, index) => {
                                    return <div key={index} onClick={e => selCat(sec.name)} className={classes.select_input_variant}>{sec.name}</div>
                                })}
                            </div>
                            <div className={classes.trback + ' ' + sec1} onClick={e => toogleSel("categories")}></div>
                        </div>
                        <div className={classes.form_data}>
                            <div className={classes.select_input} onClick={e => toogleSel("positions")}>{data.position || 'Оберіть послугу...'}</div>
                            <div className={classes.select_input_variants + ' ' + sec2}>
                                {data.positions.map((sec, index) => {
                                    return <div key={index} onClick={e => selPos(sec.name, sec.price)} className={classes.select_input_variant}>{sec.name}</div>
                                })}
                            </div>
                            <div className={classes.trback + ' ' + sec2} onClick={e => toogleSel("positions")}></div>
                        </div>
                        <div className={classes.form_data}>
                            <textarea name="message" onChange={(e) => setData({ ...data, message: e.target.value })} value={data.message || ''} placeholder="Введіть Ваш коментар...">

                            </textarea>
                        </div>

                        <div className={classes.form_data}>
                            <button onClick={sendMessage} >Замовити</button>
                            {/* <a className={classes.aaa} href={`https://www.privat24.ua/rd/transfer_to_card/?hash=rd%2Ftransfer_to_card%2F%7B%22from%22%3A%22%22%2C%22to%22%3A%225169330524999023%22%2C%22amt%22%3A%22${data.price || 100}%22%2C%22ccy%22%3A%22UAH%22%7D`} target="_blank" rel="noreferrer">Оплатити</a> */}
                            <button onClick={pay} >Оплатити</button>
                        </div>
                        <Footer />
                        <div className={classes.error + ' ' + err}>{errmsg}</div>
                        <div className={classes.good + ' ' + good}>Ваше замовлення отримане, найближчим часом з Вами звяжеться наш менеджер</div>
                        <div className={classes.trback + ' ' + good} onClick={e => toogleGood()}></div>
                        <div className={classes.trback + ' ' + err} onClick={e => toogleErr()}></div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Order;
