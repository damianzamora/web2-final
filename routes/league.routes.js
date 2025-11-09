const express = require('express');
const router = express.Router();

const leagueController = require('../controllers/league.controller')

const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/isAdmin')

//GET All leagues
router.get("/leagues", leagueController.getLeagues)

//Get league by ID
router.get("/leagues/:id", leagueController.getLeagueById)

//POST league
router.post("/leagues", leagueController.createLeague)

//DELETE league
router.delete("/leagues/:id", [auth, isAdmin], leagueController.deleteLeague)

//UPDATE league
router.put("/leagues/:id", [auth], leagueController.updateLeague)

module.exports = router;