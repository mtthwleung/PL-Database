const express = require("express");
const router = express.Router();

const knexfile = require("../knexfile").development;
const knex = require("knex")(knexfile);

router.get('/', (req, res) => {
    res.render('updatePlayer')
})

//updating a player
router.put('/player/:playerId', async (req, res) => {
    const playerId = req.params.playerId;
    const { position, team_id, national_team_id, market_value } = req.body;

    const updatedInfo = await knex("players")
    .where({ id: playerId })
    .update({ position, team_id, national_team_id, market_value });
    
    const playerName = await knex("players")
    .where({ id: playerId })

    res.send(`${playerName[0].player_name} successfully updated`);

})

module.exports = router;