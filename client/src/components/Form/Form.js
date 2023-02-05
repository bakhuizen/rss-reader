import { sortFrequencyMap, fetchRssfeed } from '../../utils';
import { Fragment, useState } from 'react';

export const Form = ({updateData}) => {
    const [url, setUrl] = useState("https://www.svt.se/rss.xml");

    const handleClick = () => {
        fetchRssfeed(url)
        .then((data) => {
            if(data.error){
                alert("Error: " + data.error);
            }
            updateData(sortFrequencyMap(data.wordFrequencyMap));
        });
    }

    return (
        <Fragment>
            <div>
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                <button onClick={() => handleClick()}>Generate word cloud</button>
            </div>            
            <div>
                <h6>RSS link examples:</h6> 
                <p>https://www.svt.se/rss.xml</p>
                <p>https://www.dn.se/rss/</p> 
            </div>
        </Fragment>
    )
}