import express from 'express';
import RSSParser from "rss-parser";

const PORT = process.env.port || 3001;
const app = express();

const rssFeedUrl = "https://www.svt.se/rss.xml";

const parseAndTransform = async url => {
  const feed = await new RSSParser().parseURL(url);

  const transformedResponse = feed.items.map(item => ({title: item.title, contentSnippet: item.contentSnippet}));
  return transformedResponse;
}

app.use(express.json())

app.post("/api", (req, res) => {
  (async () => {
    const list = await parseAndTransform(req.body.url)
    res.json({ message: list });
  })()
    
  });

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
});