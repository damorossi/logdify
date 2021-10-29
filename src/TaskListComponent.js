import React from 'react';
import { useState } from 'react/cjs/react.development';
import TaskItemComponent from './TaskItemComponent';
import './list.scss';

const TaskListComponent = ({ tasks, name, onClickAction, totalValue }) => {
	let [isActive, setActive] = useState(false);

	const toggleAccordion = () => {
		setActive(!isActive);
	};

	const completedTasks = tasks.reduce((acc, current) => {
		return acc + (current.checked ? 1 : 0);
	}, 0);

	return (
		<div className="list-accordion">
			<header className="list-contentHeader" onClick={toggleAccordion}>
				<h2 className={`${completedTasks === tasks.length && 'list-title--completed'}`}>
					<i className="fa fa-file" aria-hidden="true"></i> {name}
				</h2>
				<span className={`list-toggleAction ${isActive && 'list-toggleAction--active'}`}>
					{isActive ? 'Hide' : 'Show'}
				</span>
			</header>
			{isActive && (
				<ul className="list-groupList">
					{tasks.map(({ description, checked, value, id }) => (
						<TaskItemComponent
							description={description}
							checked={checked}
							value={value}
							id={id}
							totalValue={totalValue}
							onClickAction={onClickAction}
							key={`${id}-${value}`}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default TaskListComponent;
