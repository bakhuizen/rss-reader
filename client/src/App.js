import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const requestData = { url: "https://www.svt.se/rss.xml" };

  useEffect(() => {
    fetch("/api", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
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
