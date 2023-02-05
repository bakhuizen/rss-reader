import {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const [url, setUrl] = useState("https://www.svt.se/rss.xml");
  /*
  https://www.svt.se/rss.xml
  https://www.dn.se/rss/
  */

  const sortFrequencyMap = (wordFrequencyMap) => {
    let sortable = [];
    for (var key in wordFrequencyMap) {
      sortable.push([key, wordFrequencyMap[key]]);
    };

    const sortedWordFrequencyMap = sortable.sort((a, b) => {
        return b[1] - a[1];
    });

    return sortedWordFrequencyMap;
  }

  const fetchRssfeed = (rssLink) => {
    fetch("/api/rss-feed/words", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: rssLink }),
    }).then((result) => result.json())
      .then((data) => setData(sortFrequencyMap(data.wordFrequencyMap)));  
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex', flexDirection:'column'}}>
          <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={() => fetchRssfeed(url)}>Click here</button>
          </div>
          {data && data[0][0]}
        </div>
      </header>
    </div>
  );
}

export default App;
