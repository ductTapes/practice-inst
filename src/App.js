import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const testJasonPlaceholder = async () => {
    const request = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log('request', request.data)
  }

  return (
    <div className="App">
      <button onClick={testJasonPlaceholder}>json placeholder</button>
    </div>
  );
}

export default App;
