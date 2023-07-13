const express = require('express');
const { getAllParticipants, getParticipantById, deleteParticipant } = require('../controllers/adminController');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/participants', isAdmin, getAllParticipants);
router.get('/participants/:id', isAdmin, getParticipantById);
router.delete('/participants/:id', isAdmin, deleteParticipant);

module.exports = router;
