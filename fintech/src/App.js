import './App.css';
import Welcome from "./components/Welcome";
import State from "./components/State";
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Welcome userName="채한빈"></Welcome>
      <Welcome userName="홍길동"></Welcome>
      
      <State></State>
      <List></List>
    </div>
  );
}

export default App;
