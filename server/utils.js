export const getWordFrequencyInRssFeed = (data) => {
    const initialValue = "";
    const allText = data.items.reduce(
        (accumulator, currentItem) => 
        accumulator + currentItem.title + " " + currentItem.contentSnippet + " ",
        initialValue
    );

    const words = allText.toLowerCase().replace(/[^åäöáéa-z\s]/gi, ' ').split(/\s+/);

    const frequencyMap = {};
    words.forEach((word) => {
        if(!frequencyMap[word]){
        frequencyMap[word] = 0;
        }
        frequencyMap[word] += 1;
    })

    return frequencyMap;
}