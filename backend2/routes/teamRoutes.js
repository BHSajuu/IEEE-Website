const express = require('express');
const { check } = require('express-validator');
const { getTeamMembers, createTeamMember, deleteTeamMember } = require('../controllers/teamController');

const router = express.Router();

router.get('/', getTeamMembers);
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('role', 'Role is required').not().isEmpty(),
    check('year', 'Year is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('link', 'Valid URL is required').isURL()
  ],
  createTeamMember
);
router.delete('/:id', deleteTeamMember);

module.exports = router;