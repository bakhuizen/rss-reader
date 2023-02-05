import './Wordcloud.css';
import { shuffleArray } from './utils.js';

export const Wordcloud = (words) => {
    if(!words){
        return '';
    }

    const SCALE_FONT_SIZE_BY = 4;
    const hundredMostUsedWords = words.words.slice(0, 100);

    shuffleArray(hundredMostUsedWords);

    return (
        <div style={{margin:'50px', display: 'flex', flexWrap: 'wrap'}}>
            {hundredMostUsedWords.map((word, i) => {
                const fontWeight = word[1]*SCALE_FONT_SIZE_BY;
                return <span key={i} style={{margin: '2px', fontSize: fontWeight}}>{word[0]}</span>
            })}
        </div>
    )
    
}