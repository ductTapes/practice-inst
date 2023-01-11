import logo from './logo.svg';
import './App.css';
import axios from "axios";

function setupInsta(){
  let appId = "661391742446159";
  // let redUri = window.location.origin + '/inst';
  let redUri = 'https://ducttapes.github.io/practice-inst/';
  let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile&response_type=code`;
  window.open(url, "_blank").focus();
}


function App() {
  const testJasonPlaceholder = async () => {
    const request = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log('request', request.data)
  }



  return (
    <div className="App">
      <button onClick={testJasonPlaceholder}>json placeholder</button>
      <button onClick={setupInsta}>inst</button>
    </div>
  );
}

export default App;
