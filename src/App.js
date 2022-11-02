import logo from './logo.svg';
import './App.css';

const f=()=>{alert("hy")}
function App() {
  return (
    <div className="App">
      <button onClick={f}>Click me</button>
        <input placeholder='login' type='text'/>
        <input placeholder='password' type='password'/>
    </div>
  );
}

export default App;
