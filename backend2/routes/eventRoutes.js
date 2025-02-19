const express = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

router.get('/', getEvents);
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('link', 'Valid URL is required').isURL(),
    check('image', 'Image is required').not().isEmpty(),
    check('date', 'Valid date is required').isISO8601()
  ],
  createEvent
);
router.delete('/:id', deleteEvent);

module.exports = router;