import express from 'express';
import RSSParser from "rss-parser";
import { getWordFrequencyInRssFeed } from './utils.js';

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json())

app.post("/api/rss-feed/words", (req, res) => {
  (async () => {
    const rssFeed = await new RSSParser().parseURL(req.body.url);
    const wordFrequencyMap = getWordFrequencyInRssFeed(rssFeed);
    res.json({ wordFrequencyMap });
  })()
    
  });

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
});