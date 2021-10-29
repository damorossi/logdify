import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen, fireEvent } from '@testing-library/react';
import TaskItemComponent from './TaskItemComponent';
import mockData from './mockData';

let { description, checked, value, id } = mockData[0].tasks[3];
const onClickAction = (id) => {
	return id;
};
it('Renders content', () => {
	render(
		<TaskItemComponent
			description={description}
			checked={checked}
			value={value}
			id={id}
			onClickAction={onClickAction}
			key={`${id}-${value}`}
		/>
	);

	const taskName = screen.getByText(/Provide websites page url/);
	expect(taskName).toBeInTheDocument();
});

it('Should add a class if checkbox selected', () => {
	checked = false;
	const component = render(
		<TaskItemComponent
			description={description}
			checked={checked}
			value={value}
			id={id}
			onClickAction={onClickAction}
			key={`${id}-${value}`}
		/>
	);

	const trigger = component.getByTestId(id);
	fireEvent.click(trigger);
	const isClassElementIndDocument = trigger.firstChild.classList.contains('item-toggle--active');
	expect(isClassElementIndDocument).toBe(true);
});
it('Should not have a class if checkbox selected', () => {
	checked = true;
	const component = render(
		<TaskItemComponent
			description={description}
			checked={checked}
			value={value}
			id={id}
			onClickAction={onClickAction}
			key={`${id}-${value}`}
		/>
	);
	const trigger = component.getByTestId(id);
	fireEvent.click(trigger);
	const isClassElementIndDocument = trigger.firstChild.classList.contains('item-toggle--active');
	expect(isClassElementIndDocument).toBe(false);
});
