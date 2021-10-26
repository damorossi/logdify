import React from 'react'
import { useState } from 'react/cjs/react.development';
import './taskItem.scss';

const TaskItemComponent = ({description, value, checked, onClickAction, onCalculateNormalized, totalValue}) => {
 
    const [isChecked, setCheked] = useState(checked);
    const handleClick=() => {
        setCheked(!isChecked);
        const val = !isChecked ? value : (value * -1);
        debugger;
        onClickAction(val);
        onCalculateNormalized( (val *100 /totalValue).toFixed(2));
    }
    const classValue = isChecked ? 'fa fa-check item-toggle--active' : 'item-toggle far fa-square';
    return (
         <li className="item"  onClick={handleClick}>
            <span className={classValue}>
            </span>
            <p className="item-description">{description}</p>
            <span>{ (value *100 /totalValue).toFixed(2)}</span>
        </li>
    )
}

export default TaskItemComponent
