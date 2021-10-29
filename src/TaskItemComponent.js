import React from 'react';
import { useState } from 'react/cjs/react.development';
import './taskItem.scss';

const TaskItemComponent = ({ description, value, id, checked, onClickAction }) => {
	const [isChecked, setCheked] = useState(checked);
	const handleClick = () => {
		setCheked(!isChecked);
		const val = !isChecked ? value : value * -1;
		onClickAction(id, val);
	};
	const classValue = isChecked ? 'fa fa-check item-toggle--active' : 'item-toggle far fa-square';
	return (
		<li className="item" data-testid={`${id}`} onClick={handleClick}>
			<span className={classValue}></span>
			<p className="item-description">{description}</p>
		</li>
	);
};

export default TaskItemComponent;
