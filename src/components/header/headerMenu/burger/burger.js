import React, { useState, useEffect } from "react";
import classes from './burger.module.css';
import { db } from '../../../../firebase';
import {
    collection, query, onSnapshot
} from 'firebase/firestore';
import HeaderItem from "../headerItem/headerItem";

const Burger = ({ hd }) => {

    const [open, setOpen] = useState('');

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "munuItems"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let menuArray = [];
            querySnapshot.forEach((doc) => {
                menuArray.push({ ...doc.data(), id: doc.id });
            });
            menuArray.sort((a, b) => a.order - b.order);
            setMenuItems(menuArray);
        });
        return () => unsub();
    }, []);

    const toggleBurger = () => {
        if (open === '') {
            setOpen(classes.open);
        } else {
            setOpen('');
        }
    }

    return (
        <div className={classes.Burger_wrapper}>
            <div className={classes.Burger} onClick={toggleBurger}>
                <div className={classes.Burger_inner + ' ' + open}>

                </div>
            </div>
            <div className={classes.Burger_content + ' ' + open}>
                <ul className={classes.burgerList}>
                    {menuItems.map((menuItem, index) => {
                        return <HeaderItem key={index} name={menuItem.name} ind={index} hd={hd} url={menuItem.url} tg={toggleBurger} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Burger;