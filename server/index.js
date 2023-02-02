import express from 'express';
import RSSParser from "rss-parser";

const PORT = process.env.port || 3001;
const app = express();

const rssFeedUrl = "https://www.svt.se/rss.xml";

const parse = async url => {
  const feed = await new RSSParser().parseURL(url);

  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(`${item.title} - ${item.link}\n${item.contentSnippet}\n\n`);
  });
}

parse(rssFeedUrl);

app.get("/api", (req, res) => {
    res.json({ message: "This is your server speaking!" });
  });

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
});