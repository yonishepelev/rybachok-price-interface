import React, {useEffect, useState} from "react";
import css from './MainContainer.module.css';
import {Header} from "../Header/Header";
import {FilterZone} from "../FilterZone/FilterZone";
import {getItemCategories, getMarketplaceItemsWithPrices, getMarketplaceShops} from "../Api/api";
import {ListCheckbox} from "../ListCheckbox/ListCheckbox";
import {ToggleSwitch} from "../ToggleSwitch/ToggleSwitch";
import {TableItemPrices} from "../TableItemPrices/TableItemPrices";
import {DatePeriod} from "../DatePeriod/DatePeriod";
import {ListCheckboxMarket} from "../ListCheckbox/ListCheckboxMarket";
import {InputInterest} from "../InputInterest/InputInterest";
import {PriceType} from "../PriceType/PriceType";

const tableHeader = ['Наименование', 'Закупка', 'Розница', 'Наценка',
    'OZON', 'Наценка', 'Период', 'ЯМ', 'Наценка', 'Период', 'WB', 'Наценка', 'Период'];
const marketplacePriceType = ['Закупочная', 'Розничная', 'Закупка +10%', 'Розничная -20%'];

export const MainContainer = () => {
    const [itemCategories, setItemCategories] = useState([]);
    const [itemsPrices, setItemsPrices] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedShops, setSelectedShops] = useState([]);
    const [datePeriod, setDatePeriod] = useState({
        dateFrom: new Date(),
        dateTo: new Date()
    })

    useEffect(() => {
        const data = getItemCategories().map((el) => {
            return [el.item_name, false];
        });
        const shops = getMarketplaceShops().map((el) => {
            return [el.shop_name, false];
        })
        setSelectedShops(shops);
        setItemCategories(data);
        setItemsPrices(getMarketplaceItemsWithPrices());


    }, [])
    return <div className={css.container}>
        <Header/>
        <div className={css.containerText} style={{margin: "33px 0 0 25px"}}>
            Категория товаров
        </div>

        <div className={css.containerToggleSwitch}>
            <ToggleSwitch onChangeToggle={(checked) => {
                console.log(checked)
                const newItems = itemCategories.map((el) => {
                    el[1] = checked;
                    return el;
                });
                setItemCategories(newItems);
            }}/>
        </div>

        <div className={css.listCheckboxContainer}>
            <ListCheckbox itemCategories={itemCategories} onChangeCheckbox={(newValue, index) => {
                itemCategories[index][1] = newValue;
                setItemCategories([...itemCategories]);

            }}/>
        </div>
        <div className={css.containerText} style={{margin: "9px 0 0 25px"}}>
            Выбрать всю номенклатуру
        </div>
        <div className={css.containerToggleSwitch}>
            <ToggleSwitch onChangeToggle={(checked) => {
                if (checked) {
                    const nS = itemsPrices.map((e) => e[0]);
                    setSelectedItems(nS);
                } else {
                    setSelectedItems([]);
                }
            }}/>
        </div>
        <TableItemPrices data={itemsPrices} selectedItems={selectedItems} tableHeader={tableHeader}
                         onChangeCheckbox={(newValue, index) => {

                             const item_name = itemsPrices[index][0];
                             if (newValue) {
                                 selectedItems.push(item_name);
                                 setSelectedItems([...selectedItems]);
                             } else {
                                 const newSelected = selectedItems.filter(el => el !== item_name);
                                 setSelectedItems(newSelected);
                             }
                         }
                         }
        />
        <div className={css.containerPrice}>
            <div><DatePeriod datePeriod={datePeriod} setDatePeriod={setDatePeriod}/></div>
            <InputInterest/>
            <PriceType marketplacePriceType={marketplacePriceType}/>
            <div className={css.listItemContainerMarket}>
                <ListCheckbox itemCategories={selectedShops} onChangeCheckbox={(newValue, index) => {
                    selectedShops[index][1] = newValue;
                    setSelectedShops([...selectedShops]);
                }}/>
            </div>
        </div>


    </div>

}