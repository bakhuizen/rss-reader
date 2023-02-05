import {useState} from 'react';
import './App.css';
import { Wordcloud } from './Wordcloud/Wordcloud.js';
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
        <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
          <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={() => handleClick()}>Click here</button>
          </div>
          {data && <Wordcloud words={data}/>}
        </div>
      </header>
    </div>
  );
}

export default App;
