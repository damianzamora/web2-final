const express = require('express');
const router = express.Router();

const leagueController = require('../controllers/league.controller')

//GET All leagues
router.get("/leagues", leagueController.getLeagues)

//Get league by ID
router.get("/league/:id", leagueController.getLeagueById)

//POST league
router.post("/league", leagueController.createLeague)

//DELETE league
router.delete("/league/:id", leagueController.deleteLeague)

//UPDATE league
router.put("/league/:id", leagueController.updateLeague)

module.exports = router;