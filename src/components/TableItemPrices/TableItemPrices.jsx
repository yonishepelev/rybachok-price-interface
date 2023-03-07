import React, {Fragment} from "react";
import css from './TableItemPrices.module.css';
import {Checkbox} from "@yonishepelev/rybachok-react-lib";

export const TableItemPrices = ({tableHeader, selectedItems, data, onChangeCheckbox}) => {


    return (
        <div className={css.tableContainer}>
            <table className={css.table}>
                <thead className={css.thead}>
                <tr>
                    {tableHeader.map((header, index) => {
                        const classNames = [];
                        if (header === 'OZON') {
                            classNames.push(css.ozon);
                        }
                        if (header === 'ЯМ') {
                            header = <Fragment>
                                <font color="#FF2626">Я</font>
                                <font color="#252A34">М</font>
                            </Fragment>
                        }
                        if (header === 'WB') {
                            classNames.push(css.wb)
                        }
                        if (index === 0)
                            return <th key={index} colSpan={2} className={classNames.join(" ")}>{header}</th>
                        else
                            return <th key={index} className={classNames.join(" ")}>{header}</th>
                    })}


                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => {

                    return <tr key={index} className={css.tableTr}>
                        <td>
                            <Checkbox value={selectedItems.includes(row[0])} onChange={(event, newValue) => {
                                if (typeof onChangeCheckbox === 'function')
                                    onChangeCheckbox(newValue, index)
                            }}/>


                        </td>
                        {row.map((data, index) => {
                            return <td key={index}>{data}</td>
                        })}
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
}