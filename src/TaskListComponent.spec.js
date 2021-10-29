import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen, fireEvent } from '@testing-library/react';
import TaskListComponent from './TaskListComponent';
import mockData from './mockData';

let group = mockData[0];
const onClickAction = (id) => {
	return id;
};
it('Renders content', () => {
	render(<TaskListComponent id={group.id} tasks={group.tasks} name={group.name} onClickAction={onClickAction} />);

	const taskName = screen.getByText(/General Infos/);
	expect(taskName).toBeInTheDocument();
});

it('Should Show "Hide" text if accordion is  cliked', () => {
	const component = render(
		<TaskListComponent id={group.id} tasks={group.tasks} name={group.name} onClickAction={onClickAction} />
	);
	const trigger = component.getByTestId('accordion');
	fireEvent.click(trigger);
	const hideText = screen.getByText(/Hide/);
	expect(hideText).toBeInTheDocument();
});

it('Should add a class if tassks of a group all all finished', () => {
	group.tasks.forEach((x) => (x.checked = true));

	const component = render(
		<TaskListComponent id={group.id} tasks={group.tasks} name={group.name} onClickAction={onClickAction} />
	);
	const element = component.getByTestId('accordion');
	const isClassElementIndDocument = element.firstChild.classList.contains('list-title--completed');
	expect(isClassElementIndDocument).toBe(true);
});

it('Should not have a class if all task are not finished', () => {
	group.tasks.forEach((x) => (x.checked = true));
	group.tasks[0].checked = false;

	const component = render(
		<TaskListComponent id={group.id} tasks={group.tasks} name={group.name} onClickAction={onClickAction} />
	);
	const element = component.getByTestId('accordion');
	const isClassElementIndDocument = element.firstChild.classList.contains('list-title--completed');
	expect(isClassElementIndDocument).toBe(false);
});
