import {useState} from 'react';
import ReactWordcloud from 'react-wordcloud';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const [url, setUrl] = useState("https://www.svt.se/rss.xml");
  const [words, setWords] = useState([{text: 'hello', value: 64,}])
  /*
  https://www.svt.se/rss.xml
  https://www.dn.se/rss/
  */

  const fetchRssfeed = (rssLink) => {
    fetch("/api", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: rssLink }),
    }).then((result) => result.json())
      .then((data) => setData(data.message));
  }

  const transformData = (list) => {
    return list?.map(item => ({text: item?.contentSnippet || '', value: 20}))
  }

  const handleButtonClick = () => {
    fetchRssfeed(url)
    if(data){
      const newWords = transformData(data);
      console.log(newWords);
      setWords(newWords);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex', flexDirection:'column'}}>
          <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={() => handleButtonClick()}>Click here</button>
          </div>
          {data && <ReactWordcloud words={words}/>}
        </div>
      </header>
    </div>
  );
}

export default App;
