export const sortFrequencyMap = (wordFrequencyMap) => {
    let sortable = [];
    for (var key in wordFrequencyMap) {
        sortable.push([key, wordFrequencyMap[key]]);
    };

    const sortedWordFrequencyMap = sortable.sort((a, b) => {
        return b[1] - a[1];
    });

    return sortedWordFrequencyMap;
}

export const fetchRssfeed = (rssLink) => {
    return fetch("/api/rss-feed/words", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: rssLink }),
    }).then((result) => result.json());  
}