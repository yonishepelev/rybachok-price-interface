import React from "react";
import {Button, DatePicker} from "@yonishepelev/rybachok-react-lib";
import css from './DatePeriod.module.css'

export const DatePeriod = ({datePeriod, setDatePeriod}) => {
    return (
        <div>
            <div className={css.datePeriodContainer}>
                <div>
                    <div className={css.label}>Дата с:</div>
                    <DatePicker zIndex={3} date={datePeriod.dateFrom} setDate={(value) => {
                        datePeriod.dateFrom = value;
                        setDatePeriod({...datePeriod})
                    }}/>
                </div>
                <div className={css.dateToContainer}>
                    <div className={css.label}>Дата по:</div>
                    <DatePicker zIndex={3} date={datePeriod.dateTo} setDate={(value) => {
                        datePeriod.dateTo = value;
                        setDatePeriod({...datePeriod})
                    }}/>
                </div>
            </div>
            <div className={css.buttonContainer}><Button colorScheme={"bondi"} label={'Временное изменение цен'} onClick={()=>{
                console.log('click')
            }}/></div>
        </div>
    )
}