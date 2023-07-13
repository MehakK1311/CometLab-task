const User = require('../models/User');

const getAllParticipants = async (req, res) => {
  try {
    const participants = await User.find({ role: 'participant' });
    res.json(participants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get participants' });
  }
};

const getParticipantById = async (req, res) => {
  try {
    const { id } = req.params;
    const participant = await User.findById(id);
    if (!participant || participant.role !== 'participant') {
      return res.status(404).json({ error: 'Participant not found' });
    }
    res.json(participant);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get participant' });
  }
};

const deleteParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const participant = await User.findByIdAndDelete(id);
    if (!participant || participant.role !== 'participant') {
      return res.status(404).json({ error: 'Participant not found' });
    }
    res.json({ message: 'Participant deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete participant' });
  }
};

module.exports = {
  getAllParticipants,
  getParticipantById,
  deleteParticipant,
};
