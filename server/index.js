import express from 'express';
import RSSParser from "rss-parser";

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json())

const transformResponse = (data) => {
  const initialValue = "";
  const allText = data.items.reduce(
    (accumulator, currentItem) => 
      accumulator + " " + currentItem.title + " " + currentItem.contentSnippet,
    initialValue
  );

  const words = allText.toLowerCase().replace(/[^åäöáéa-z\s]/gi, ' ').split(/\s/);

  const frequencyMap = {};
  words.forEach((word) => {
    if(!frequencyMap[word]){
      frequencyMap[word] = 0;
    }
    frequencyMap[word] += 1;
  })

  console.log(frequencyMap);
}

app.post("/api/rss-feed/words", (req, res) => {
  (async () => {
    const rssFeed = await new RSSParser().parseURL(req.body.url);
    transformResponse(rssFeed);
    const transformedResponse = rssFeed.items.map(item => ({title: item.title, contentSnippet: item.contentSnippet}));
    res.json({ message: transformedResponse });
  })()
    
  });

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
});