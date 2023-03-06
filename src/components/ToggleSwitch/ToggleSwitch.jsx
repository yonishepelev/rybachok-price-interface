import React from "react";
import css from './ToggleSwitch.module.css';


export const ToggleSwitch = ({onChangeToggle, checked} ) => {

    return (
        <label className={css.switch}>
            <input type='checkbox' checked={checked} onChange={(event)=>{
                if (typeof onChangeToggle === 'function')
                    onChangeToggle(event.target.checked);
            }
            }/>
            <span className={css.slider +' '+ css.round}></span>
        </label>
    )

}