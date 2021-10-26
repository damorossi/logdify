import mockData from "./mockData";
import './app.scss';
// import './app.scss';

function App() {
  const taskGroups = mockData;
  return (
    <div className="app">
      <header className="app-header">
        <h1> Logdify Grouped Tasks  </h1>
        <span className="app-progressBar"></span>
      </header>
      <section className="app-content">
        {
          taskGroups.map(group => (
            <div className="app-accordion">
              <header className="app-contentHeader"> 
              <h2><i class="fa fa-file-contract" aria-hidden="true"></i> Group 1</h2>
              </header>
                <ul className="app-groupList">
                  <li className="app-groupItem">
                      <ul className="app-itemList">
                        <li>
                          <span className="app-toggle">
                          </span>
                            Task 2-1
                          </li>
                          <li>
                            <span className="app-toggle">
                            </span>
                              Task 2-2
                          </li>
                      </ul>
                  </li>
                </ul>
            </div>
          ))
        }
      </section>
    </div>
  );
}
export default App;
