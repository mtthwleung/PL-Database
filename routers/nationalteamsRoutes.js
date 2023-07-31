const express = require("express");
const router = express.Router();

const knexfile = require("../knexfile").development;
const knex = require("knex")(knexfile);

//similar to info for all club teams
router.get('/', async (req, res) => {
    let natInfo = await knex('national_teams')
        .select('national_teams.id', 'national_teams.country', 'managers.manager_name', 'stadiums.name as stadium_name', 'national_teams.world_cup_wins', 'national_teams.most_appearances', 'national_teams.most_goals')
        .join('stadiums', 'national_teams.stadium_id', '=', 'stadiums.id')
        .join('managers', 'national_teams.id', '=', 'managers.national_team_id')
    
    res.render('nationalTeams', { natInfo: natInfo });
})

//joining 3 tables together - a table (players) can have multiple foreign keys
router.get('/:teamId', async (req, res) => {
    let teamId = req.params.teamId;

    let teamPlayers = await knex('national_teams')
        .select()
        .join('players', 'national_teams.id', '=', 'players.national_team_id')
        .join('teams', 'players.team_id', '=', 'teams.id')
        .where({ 'national_teams.id': teamId })
        .orderBy('players.player_name');
    
    res.render('nationalPlayers', { teamPlayers: teamPlayers });
})

module.exports = router;