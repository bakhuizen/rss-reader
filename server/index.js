import express from 'express';
import RSSParser from "rss-parser";

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json())

app.post("/api", (req, res) => {
  (async () => {
    const rssFeed = await new RSSParser().parseURL(req.body.url);
    const transformedResponse = rssFeed.items.map(item => ({title: item.title, contentSnippet: item.contentSnippet}));
    res.json({ message: transformedResponse });
  })()
    
  });

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
});