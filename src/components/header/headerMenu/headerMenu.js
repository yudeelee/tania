import React, { useState, useEffect } from "react";
import HeaderItem from "./headerItem/headerItem";
import classes from "./headerMenu.module.css"
import { db } from '../../../firebase';
import {
    collection, query, onSnapshot
} from 'firebase/firestore';
import Logo from "../../logo/logo";
import Burger from "./burger/burger";
import HeaderLanguage from "../headerFooter/headerLanguage/headerLanguage";
import Container from "../../../hlc/container";

const HeaderMenu = ({ hd }) => {

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


    return (
        <nav className={classes.headerNav}>
            <Container>
                <div className={`${classes.headerNav} ${classes.headerNavwrap}`}>
                    <Logo />
                    {/* <div className={classes.HeaderLanguage}>
                <HeaderLanguage />
            </div> */}
                    <ul className={classes.headerList}>
                        {menuItems.map((menuItem, index) => {
                            return <HeaderItem key={index} name={menuItem.name} url={menuItem.url} ind={index} hd={hd} />
                        })}
                    </ul>
                    <Burger hd={hd} />
                </div>
            </Container>
        </nav>
    )
}

export default HeaderMenu;