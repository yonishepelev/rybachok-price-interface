import React, {useEffect, useState} from "react";
import css from './MainContainer.module.css';
import {Header} from "../Header/Header";
import {FilterZone} from "../FilterZone/FilterZone";
import {getItemCategories, getMarketplaceItemsWithPrices} from "../Api/api";
import {ListCheckbox} from "../ListCheckbox/ListCheckbox";
import {ToggleSwitch} from "../ToggleSwitch/ToggleSwitch";
import {TableItemPrices} from "../TableItemPrices/TableItemPrices";
import {DatePeriod} from "../DatePeriod/DatePeriod";

const tableHeader = ['Наименование', 'Закупка', 'Розница', 'Наценка',
    'OZON', 'Наценка', 'Период', 'ЯМ', 'Наценка', 'Период', 'WB', 'Наценка', 'Период'];

export const MainContainer = () => {
    const [itemCategories, setItemCategories] = useState([]);
    const [itemsPrices, setItemsPrices] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [datePeriod, setDatePeriod] = useState({
        dateFrom: new Date(),
        dateTo: new Date()
    })

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
        <div>Выбрать всю номенклатуру</div>
        <ToggleSwitch onChangeToggle={(checked)=>{
            if (checked){
                const nS = itemsPrices.map((e)=>e[0]);
                setSelectedItems(nS);
            } else {
                setSelectedItems([]);
            }
        }
        }/>
        <DatePeriod datePeriod={datePeriod} setDatePeriod={setDatePeriod}/>
        <TableItemPrices data={itemsPrices} selectedItems={selectedItems} tableHeader={tableHeader}
                         onChangeCheckbox={( newValue, index) => {

                             const item_name = itemsPrices[index][0];
                             if (newValue) {
                                 selectedItems.push(item_name);
                                 setSelectedItems([...selectedItems]);
                             } else {
                                 const newSelected = selectedItems.filter(el=>el !== item_name);
                                 setSelectedItems(newSelected);
                             }
                         }
                         }
        />



    </div>

}