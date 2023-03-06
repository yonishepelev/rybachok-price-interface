import React from "react";
import css from './TableItemPrices.module.css';

export const TableItemPrices = ({tableHeader, selectedItems, data, onChangeCheckbox}) => {


    return (
        <div className={css.tableContainer}>
            <table className={css.table}>
                <thead className={css.tableth}>
                <tr>

                    {tableHeader.map((header, index) => {
                        if (header === 'OZON') {
                            return <th key={index} className={css.ozon}>{header}</th>
                        }
                        if (header === 'ЯМ') {
                            return <th key={index} className={css.tableth}>
                                <font color="#FF2626">Я</font>
                                <font color="#252A34">М</font></th>
                        }
                        if (header === 'WB') {
                            return <th key={index} className={css.wb}>{header}</th>
                        }
                        if (index === 0)
                            return <th key={index} colSpan={2} className={css.tableth}>{header}</th>
                        else
                            return <th key={index} className={css.tableth}>{header}</th>

                    })}


                </tr>
                </thead>
                <tbody>

                {data.map((row, index) => {

                    return <tr key={index}>
                        <td className={css.tabletd}>
                            <input checked={selectedItems.includes(row[0])} type='checkbox' title='выбрать'
                                   onChange={(event) => {

                                       if (typeof onChangeCheckbox === 'function')
                                           onChangeCheckbox(index, event.target.checked)
                                   }}/>
                        </td>
                        {row.map((data, index) => {
                            return <td key={index} className={css.tabletd}>{data}</td>
                        })}
                    </tr>

                })}

                </tbody>

            </table>
        </div>
    );
}