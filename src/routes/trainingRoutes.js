
const express = require('express');
const router = express.Router();
const trainingControllers = require('../controllers/trainingControllers');
const jwtverify = require('../middleware/jwtverify');
router.get('/displaytrainings', trainingControllers.handleDisplayTrainingRequest)
router.use(jwtverify)
router.post('/join', trainingControllers.handleJoinTrainingrequest)
router.post('/stoptraining', trainingControllers.handleStopTrainingRequest)
router.post('/create', trainingControllers.handleCreateTrainingRequest)
module.exports = router;