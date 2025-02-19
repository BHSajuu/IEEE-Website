const Team = require('../models/Team');
const { validationResult } = require('express-validator');

const getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.json({ data: members });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTeamMember = async (req, res) => {
    // Check for express-validator errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  try {
    const member = await Team.create(req.body);
    res.status(201).json(member);
  } catch (error) {
        
    // Check for Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ errors: messages });
    }
    res.status(400).json({ error: error.message });
  }
};

const deleteTeamMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTeamMembers, createTeamMember, deleteTeamMember };