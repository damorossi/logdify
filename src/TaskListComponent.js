import React from 'react'
import { useState } from 'react/cjs/react.development';
import TaskItemComponent from './TaskItemComponent';

const TaskListComponent = ({tasks, name, onClickAction, onCalculateNormalized, totalValue}) => {
    let [isActive, setActive] = useState(false);
    
    const toggleAccordion = () => {
        setActive(!isActive);
    }

    return (
    <div className="app-accordion">
        <header className="app-contentHeader"  onClick={toggleAccordion}> 
            <h2><i className="fa fa-file-contract" aria-hidden="true"></i> {name}</h2>
        </header>
        {isActive && (
            <ul className="app-groupList">
                {
                tasks.map( ({description, checked, value}) => (
                        <TaskItemComponent
                            description={description}
                            checked={checked} value={value}
                            totalValue={totalValue}
                            onClickAction={onClickAction}
                            onCalculateNormalized={onCalculateNormalized}
                            key={description}
                        />)
                )}
            </ul>
        )
        }
    </div>
    )
}

export default TaskListComponent
