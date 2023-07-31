const express = require("express");
const router = express.Router();

const knexfile = require("../knexfile").development;
const knex = require("knex")(knexfile);

router.get('/', (req, res) => {
    res.render('addPlayer');
})

//adding a player
router.post('/player', async (req, res) => {
    const { player_name, position, team_id, national_team_id, market_value } = req.body;

    const addInfo = await knex('players')
        .insert({ player_name, position, team_id, national_team_id, market_value })
    
    res.send(`${player_name} successfully added!`);
    
})

module.exports = router;