export const Wordcloud = (words) => {
    if(words){
        return words.words[0][0];
    }

    return '';
}