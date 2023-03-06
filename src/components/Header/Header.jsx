import React from "react";
import css from './Header.module.css'
import Dollar from "./Dollar.svg";
import Arrow from './Arrow.svg';

export const Header=()=>{
    return (
        <div className={css.headerContainer}>
            <img src={Dollar}/>
            <h1>Изменение цен на маркетплейсах</h1>
            <img className={css.arrow} src={Arrow}/>
        </div>
    )
}