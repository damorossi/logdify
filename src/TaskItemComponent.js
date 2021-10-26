import React from 'react'
import { useState } from 'react/cjs/react.development';
import './taskItem.scss';

const TaskItemComponent = ({description, value, checked, onClickAction}) => {
    
    const [isChecked, setCheked] = useState(checked);
    const handleClick=() => {
        setCheked(!isChecked);
        onClickAction(value);
        console.log(isChecked);
    }
    const classValue = isChecked ? 'fa fa-check item-toggle--active' : 'item-toggle far fa-square';
    return (
         <li className="item"  onClick={handleClick}>
            <span className={classValue}>
            </span>
            <p className="item-description">{description}</p>
        </li>
    )
}

export default TaskItemComponent
