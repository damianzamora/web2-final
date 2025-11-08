const express = require('express');
const router = express.Router();

const leagueController = require('../controllers/league.controller')

//GET All leagues
router.get("/leagues", leagueController.getLeagues)

//Get league by ID
router.get("/leagues/:id", leagueController.getLeagueById)

//POST league
router.post("/leagues", leagueController.createLeague)

//DELETE league
router.delete("/leagues/:id", leagueController.deleteLeague)

//UPDATE league
router.put("/leagues/:id", leagueController.updateLeague)

module.exports = router;