const News = require('../models/News');

const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json({ data: news });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getNews, createNews, deleteNews };