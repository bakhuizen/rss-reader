import {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const [url, setUrl] = useState("https://www.svt.se/rss.xml");
  /*
  https://www.svt.se/rss.xml
  https://www.dn.se/rss/
  */

  const fetchRssfeed = (rssLink) => {
    fetch("/api/rss-feed/words", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: rssLink }),
    }).then((result) => result.json())
      .then((data) => setData(data.message[0].title));
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex', flexDirection:'column'}}>
          <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={() => fetchRssfeed(url)}>Click here</button>
          </div>
          {data}
        </div>
      </header>
    </div>
  );
}

export default App;
