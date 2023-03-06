import React from "react";
import css from './ListCheckbox.module.css'
import {Checkbox} from "@yonishepelev/rybachok-react-lib";

export const ListCheckbox = ({itemCategories, onChangeCheckbox})=>{
    return (
        <div className={css.listCheckboxContainer}>
            {itemCategories.map((el, index)=>{
                return <div className={css.listItemContainer} key={index}>
                    <Checkbox label={el[0]}
                              value={el[1]}
                              onChange={(event, newValue)=>{
                                  if (typeof onChangeCheckbox !== 'function')
                                      return;
                                  onChangeCheckbox(newValue, index);
                              }}/>
                </div>
            })}

        </div>
    )
}