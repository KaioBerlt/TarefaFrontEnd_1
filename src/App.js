import './App.css';
import TodoList from './Components/TodoList/TodoList';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">

        
        <Welcome/> 
      
       <div>

        <TodoList/>

       </div>
      
    </div>
  );
}

export default App;
