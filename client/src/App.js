import {Fragment, useState} from 'react';
import './App.css';
import { Header } from './components/Header/Header.js';
import { Form } from './components/Form/Form.js';
import { Wordcloud } from './components/Wordcloud/Wordcloud.js';
import { Footer } from './components/Footer/Footer.js';

function App() {
  const [data, setData] = useState(null);
  const updateData = (data) => {
    setData(data);
  }

  return (
    <div className="App">
        <Header/>
        <Fragment>
          <Form updateData={updateData}/>
          {data && <Wordcloud words={data}/>}
        </Fragment>
        <Footer/>
    </div>
  );
}

export default App;
