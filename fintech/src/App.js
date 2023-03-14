import './App.css';
import Welcome from "./components/Welcome";
import State from "./components/State";

function App() {
  return (
    <div className="App">
      <Welcome userName="채한빈"></Welcome>
      <Welcome userName="홍길동"></Welcome>
      <Welcome userName="길딩동"></Welcome>
      <Welcome userName="도레미"></Welcome>
      
      <State></State>

    </div>
  );
}

export default App;
