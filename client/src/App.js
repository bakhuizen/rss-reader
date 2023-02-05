import {useState} from 'react';
import './App.css';
import { sortFrequencyMap, fetchRssfeed } from './utils';

function App() {
  const [data, setData] = useState(null);

  const [url, setUrl] = useState("https://www.svt.se/rss.xml");
  /*
  https://www.svt.se/rss.xml
  https://www.dn.se/rss/
  */

  const handleClick = () => {
    fetchRssfeed(url)
    .then((data) => setData(sortFrequencyMap(data.wordFrequencyMap)));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex', flexDirection:'column'}}>
          <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={() => handleClick()}>Click here</button>
          </div>
          {data && data[0][0]}
        </div>
      </header>
    </div>
  );
}

export default App;
