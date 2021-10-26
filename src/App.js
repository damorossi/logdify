import mockData from "./mockData";
import TaskListComponent from "./TaskListComponent";
import { useState } from "react";
import './app.scss';

function App() {

  const taskGroups = mockData;
  const arr = taskGroups.map(x => {
    const items = x.tasks.filter( y => y.checked).map(x => x.value);
    let values = items.reduce((acc, current) => {
      return acc + current;
    }, 0 );
    return values;
  } );
  
  const total = arr.reduce((acc, current) => {
    return acc + current;
  }, 0, )
  
  


  const [totalValue, setTotalValue] = useState(total);
  const [normalized, setNormalized] = useState(0);

  
  const onClickAction = (value) => {
    setTotalValue(totalValue + value);
  }

  const calculateValues = (value) => {
    const arr = taskGroups.map(x => {
      const items = x.tasks.filter( y => y.checked).map(x => x.value);
      
      let values = items.reduce((acc, current) => {
        return acc + ((current *100 /totalValue).toFixed(2));
      }, value );
      return values;
    } );
  }
  
  const onCalculateNormalized = (value) => {
      setNormalized(calculateValues(value));
  }

  return (
    <div className="app">
      <header className="app-header">
       <p>
          {totalValue} and {normalized} normalized values </p>
        <h1> Logdify Grouped Tasks  </h1>
        <span className="app-progressBar"></span>
      </header>
      <section className="app-content">
        {
          taskGroups.map(group => (
            <TaskListComponent
              key={group.name}
              totalValue={totalValue}
              tasks={group.tasks}
              name={group.name}
              onClickAction={ onClickAction }
              onCalculateNormalized={ onCalculateNormalized }
            />
          ))
        }
      </section>
    </div>
  );
}
export default App;
