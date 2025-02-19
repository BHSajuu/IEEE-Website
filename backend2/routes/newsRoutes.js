const express = require('express');
const { check } = require('express-validator');
const { getNews, createNews, deleteNews } = require('../controllers/newsController');

const router = express.Router();

router.get('/', getNews);
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('newsUrl', 'Image URL is required').not().isEmpty(),
    check('date', 'Valid date is required').isISO8601()
  ],
  createNews
);
router.delete('/:id', deleteNews);

module.exports = router;