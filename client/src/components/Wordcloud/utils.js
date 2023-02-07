/*
    Durstenfeld shuffle
    Copied from StackOverflow
    https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const stopWords = ["i", "på", "och", "har", "som", "den", "att", "från", "om", "det", "för", "detta", "inte"];
export const filterStopWords = (words) => {
    return words.filter(word => !stopWords.includes(word[0]));
}