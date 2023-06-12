
import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={ 9000} position="SE" company="apple" />
      <Job salary={6000} position="QA" company="tesla" />
      <Job salary={ 3000} position="HR" company="amazon" />
    </div>
  );
}

const Job = (props) => { 
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};


export default App;
