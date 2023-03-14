import React from "react";
import css from "./PriceType.module.css";
import {Button} from "@yonishepelev/rybachok-react-lib";

export const PriceType = () => {
    return (
        <div className={css.containerPriceType}>
            <div>Вид цены</div>
            <select  name="price_type" required="required">
                <option value="">Выберите значение</option>
                <option value="1">Закупочная</option>
                <option value="2">Розничная</option>
                <option value="3">Закупка +10%</option>
                <option value="4">Розничная -20%</option>
            </select>
            <div className={css.buttonContainer}>
                <Button colorScheme={"orange"}
                        label={'Изменить цены для отмеченных товаров'} onClick={() => {
                    console.log('click')
                }}/></div>
        </div>
    )
}