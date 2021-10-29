import mockData from './mockData';
import TaskListComponent from './TaskListComponent';
import { useState } from 'react';
import './app.scss';

function App() {
	const [percentege, setPercentege] = useState(-1);
	let onlyTasksArray = null;

	const getData = () => {
		return mockData;
	};

	const onlyTasks = () => {
		let onlyTasksArray = [];
		indexedArr.map((g) => {
			return g.tasks.map((t) => {
				t.finalReduced = (t.value * 100) / 227;
				t.currentReduced = (t.value * 100) / totalInicial;
				onlyTasksArray.push(t);
				return t;
			});
		});
		return onlyTasksArray;
	};

	const getTotalValue = (arr) => {
		const data = arr
			?.map((x) => {
				const items = x.tasks.filter((y) => y.checked).map((x) => x.value);
				let values = items.reduce((acc, current) => {
					return acc + current;
				}, 0);
				return values;
			})
			.reduce((acc, current) => {
				return acc + current;
			}, 0);
		return data;
	};

	const totalSumArray = () => {
		const total = onlyTasks().reduce((acc, sum) => {
			return acc + sum.value;
		}, 0);
		return total;
	};

	const [indexedArr] = useState(getData());
	const totalInicial = getTotalValue(indexedArr);
	const [totalValue, setTotalValue] = useState(totalInicial);
	const [tasks, setTasks] = useState(onlyTasks());
	const tot = totalSumArray();

	const setPercenteges = () => {
		const completed = tasks.filter((x) => x.checked);
		const percentege = completed.reduce((acc, curr) => {
			return acc + (curr.value / tot) * 100;
		}, 0);
		setPercentege(percentege);
	};

	const getPercentege = () => {
		setPercenteges();
	};

	if (percentege < 0) {
		getPercentege();
	}

	const onClickAction = (id, value) => {
		onlyTasksArray = onlyTasks().map((x) => {
			if (x.id === id) {
				x.checked = !x.checked;
			}
			return x;
		});

		setTotalValue(totalValue + value);
		setTasks(onlyTasksArray);
		calculateValues(id, +value);
	};

	const calculateValues = (id, value = 0) => {
		onlyTasksArray = onlyTasks();
		const completed = tasks.filter((x) => x.checked);
		const completedData = completed.reduce((ac, cur) => {
			return ac + (cur.value * 100) / totalValue;
		}, 0);
		setPercenteges();
		setTotalValue(totalValue + value);
		return completedData;
	};

	const style = {
		progressBar: {
			width: percentege + '%'
		}
	};
	return (
		<div className="app">
			<header className="app-header">
				<h1> Logdify Grouped Tasks </h1>
				<div className="app-progresBarContainer">
					<span style={style.progressBar} className="app-progressBar">
						<span className="app-progressBarContent">{`${percentege.toFixed(0)}%`}</span>
					</span>
				</div>
			</header>
			<section className="app-content">
				{indexedArr.map((group) => (
					<TaskListComponent
						key={`${group.id}-${group.name}`}
						id={group.id}
						tasks={group.tasks}
						name={group.name}
						onClickAction={onClickAction}
					/>
				))}
			</section>
		</div>
	);
}
export default App;
