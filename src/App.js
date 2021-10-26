import mockData from "./mockData";
import './app.scss';
import TaskListComponent from "./TaskListComponent";
// import './app.scss';

function App() {
  const taskGroups = mockData;
  const onClickAction = (value) => {
      console.log('sumando y calculando ', value);
  }
  return (
    <div className="app">
      <header className="app-header">
        <h1> Logdify Grouped Tasks  </h1>
        <span className="app-progressBar"></span>
      </header>
      <section className="app-content">
        {
          taskGroups.map(group => (
            <TaskListComponent onClickAction={onClickAction} tasks={group.tasks} name={group.name} />
          ))
        }
      </section>
    </div>
  );
}
export default App;
