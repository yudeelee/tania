import React from "react";
import classes from "./header.module.css";
import Hero from "./hero/hero";
import Container from "../../hlc/container";
import HeaderFooter from "./headerFooter/headerFooter";

const Header = () => {
    return (
        <div className={classes.header}>

            <Container>
                <Hero />
                <HeaderFooter />
            </Container>
        </div>
    )
}

export default Header;