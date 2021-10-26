import React from 'react'
import { useState } from 'react/cjs/react.development';
import TaskItemComponent from './TaskItemComponent';

const TaskListComponent = ({tasks, name, onClickAction}) => {
    let [isActive, setActive] = useState(false);
    
    const toggleAccordion = () => {
        setActive(!isActive);
    }

 
    return (
    <div className="app-accordion">
        <header className="app-contentHeader"  onClick={toggleAccordion}> 
            <h2><i class="fa fa-file-contract" aria-hidden="true"></i> {name}</h2>
        </header>
        {isActive && (
            <ul className="app-groupList">
                {
                tasks.map( ({description, checked, value }) => (
                        <TaskItemComponent
                            onClickAction={onClickAction}
                            description={description}
                            checked={checked} value={value}
                        />)
                )
                }
                {/* <li className="app-groupItem">
                    <ul className="app-itemList">
                    <li>
                        <span className="app-toggle">
                        </span>
                        Task 2-1
                    </li>
                    </ul>
                </li> */}
            </ul>
        )
        }
    </div>
    )
}

export default TaskListComponent
