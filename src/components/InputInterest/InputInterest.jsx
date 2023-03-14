import React from "react";
import css from "./InputInterest.module.css";
import {Button} from "@yonishepelev/rybachok-react-lib";

export const InputInterest = () => {
    return (
        <div className={css.containerInputInterest}>
            <div>
                Введите %
            </div>
            <input className={css.containerInput} type="text"/>
            <div className={css.buttonContainer}><Button colorScheme={"bondi"} label={'Рассчитать'} onClick={() => {
                console.log('click')
            }}/></div>
        </div>
    )
}