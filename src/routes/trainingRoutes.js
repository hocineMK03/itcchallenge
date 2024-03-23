
const express = require('express');
const router = express.Router();
const trainingControllers = require('../controllers/trainingControllers');
const jwtverify = require('../middleware/jwtVerify');
router.get('/displaytrainings', trainingControllers.handleDisplayTrainingRequest)
router.post('/join',jwtverify,trainingControllers.handleJoinTrainingrequest)
router.post('/stoptraining',jwtverify, trainingControllers.handleStopTrainingRequest)
router.post('/create',jwtverify, trainingControllers.handleCreateTrainingRequest)
module.exports = router;