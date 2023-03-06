import React, {useEffect, useState} from "react";
import css from './MainContainer.module.css';
import {Header} from "../Header/Header";
import {FilterZone} from "../FilterZone/FilterZone";
import {getItemCategories, getMarketplaceItemsWithPrices} from "../Api/api";
import {ListCheckbox} from "../ListCheckbox/ListCheckbox";
import {ToggleSwitch} from "../ToggleSwitch/ToggleSwitch";
import { TableItemPrices} from "../TableItemPrices/TableItemPrices";
const tableHeader = ['Наименование', 'Закупка', 'Розница', 'Наценка',
    'OZON', 'Наценка', 'Период', 'ЯМ', 'Наценка', 'Период', 'WB', 'Наценка', 'Период'];

export const MainContainer = () => {
    const [itemCategories, setItemCategories] = useState([]);
    const [itemsPrices, setItemsPrices] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const data = getItemCategories().map((el) => {
            return [el.item_name, false];
        });
        setItemCategories(data);
        setItemsPrices(getMarketplaceItemsWithPrices());


    }, [])
    return <div className={css.container}>
        <Header/>
        <FilterZone itemCategories={itemCategories}/>
        <br/>
        <div>Toggle</div>

        <ToggleSwitch onChangeToggle={(checked) => {
            console.log(checked)
            const newItems = itemCategories.map((el) => {
                el[1] = checked;
                return el;
            });
            setItemCategories(newItems);
        }}/>

        <div>ListCheckbox</div>
        <ListCheckbox itemCategories={itemCategories} onChangeCheckbox={(newValue, index) => {
            itemCategories[index][1] = newValue;
            setItemCategories([...itemCategories]);

        }}/>

        <TableItemPrices data={itemsPrices} selectedItems={selectedItems} tableHeader={tableHeader}/>
    </div>

}