import {Fragment, useState} from 'react';
import './App.css';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Wordcloud } from './components/Wordcloud/Wordcloud.js';
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
        <Header/>
        <Fragment>
          <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={() => handleClick()}>Click here</button>
          </div>
          {data && <Wordcloud words={data}/>}
        </Fragment>
        <Footer/>
    </div>
  );
}

export default App;
