import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((result) => result.json())
      .then((data) => setData(data.message));
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
