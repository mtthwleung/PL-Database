const express = require('express');
const router = express.Router();

const knexfile = require("../knexfile").development;
const knex = require("knex")(knexfile);

// a table (teams) can have both a foreign key linking to another primary key, and a foreign key from another table linking to its primary key
router.get('/', async (req, res) => {
    let teamInfo = await knex('teams')
        .select('teams.id', 'teams.name as team_name', 'stadiums.name as stadium_name', 'teams.transfer_budget', 'teams.league_wins', 'teams.european_cup_wins', 'managers.manager_name')
        // .select() // can't use simple select because teams.name and stadiums.name clashes
        .join('stadiums', 'teams.stadium_id', '=', 'stadiums.id')
        .join('managers', 'teams.id', '=', 'managers.team_id')
        .orderBy("teams.name");
    
    res.render('teams', { teamInfo: teamInfo });
})

//simple one-to-many relationship: a team id (primary) can have many players (players.team_id is foreign key)
router.get('/:teamId', async (req, res) => {
    let teamId = req.params.teamId;

    let teamPlayers = await knex('teams')
        .join('players', 'teams.id', '=', 'players.team_id')
        .select()
        .where({ 'teams.id': teamId })
        .orderBy("players.player_name");

    res.render('players', { teamPlayers: teamPlayers });
})

//for frontend request to generate list of players from specific team
router.get("/:teamId/players", async (req, res) => {
    const teamId = req.params.teamId;

    const teamPlayers = await knex("teams")
        .select()
        .join("players", "teams.id", "=", "players.team_id")
        .where({ "teams.id": teamId })
        .orderBy("players.player_name");

    res.json(teamPlayers);
});


module.exports = router;