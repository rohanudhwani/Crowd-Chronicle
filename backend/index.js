const express = require('express');
const app = express();
const News = require('./news/news.js');

app.use(express.static('public'));

const news = new News();
const data = news.getAll();

const test = async () => {
  const data = await news.getByCategory('Technology');
  console.log(data);
}

test();

app.listen(3000, () => {
  console.log('Port is listening.');
});