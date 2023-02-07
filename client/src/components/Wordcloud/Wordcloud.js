import './Wordcloud.css';
import { shuffleArray, filterStopWords } from './utils.js';

export const Wordcloud = (words) => {
    if(!words){
        return '';
    }

    const SCALE_FONT_SIZE_BY = 6;
    const hundredMostUsedWords = words.words.slice(0, 100);

    const filteredWords = filterStopWords(hundredMostUsedWords);

    shuffleArray(filteredWords);

    return (
        <div style={{margin:'50px', display: 'flex', flexWrap: 'wrap'}}>
            {filteredWords.map((word, i) => {
                const fontWeight = word[1]*SCALE_FONT_SIZE_BY;
                return <span key={i} style={{margin: '2px', fontSize: fontWeight}}>{word[0]}</span>
            })}
        </div>
    )
    
}