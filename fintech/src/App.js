import logo from './logo.svg';
import './App.css';

const Welcome = (props) =>{
  console.log(props);
  return <p>안녕하세요 {props.userName} 님 반갑습니다. </p>
};

function App() {
  return (
    <div className="App">
      <Welcome userName="채한빈"></Welcome>
      <Welcome userName="홍길동"></Welcome>
      <Welcome userName="길딩동"></Welcome>
      <Welcome userName="도레미"></Welcome>
    </div>
  );
}

export default App;
