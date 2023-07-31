const express = require("express");
const router = express.Router();

const knexfile = require("../knexfile").development;
const knex = require("knex")(knexfile);

router.get('/', (req, res) => {
    res.render('transferPlayer')
})

//updating a player
router.put('/player/:playerId', async (req, res) => {
    const playerId = req.params.playerId;
    const { oldTeamId, newTeamId } = req.body;

    await knex.transaction(async (trx) => {

        try {
            const marketValue = await trx("players")
                .select("market_value")
                .where({ id: playerId })
                .first();
            
            const buyerInfo = await knex("teams")
                .where({ id: newTeamId });
            
            const sellerInfo = await knex("teams")
                .where({ id: oldTeamId });            
            
            const playerName = await knex("players")
                .where({ id: playerId });
            
            if (buyerInfo[0].transfer_budget < marketValue.market_value) {
                return res.send(`${buyerInfo[0].name} don't have the funds to purchase ${playerName[0].player_name}!`)
            }

            if (oldTeamId === newTeamId) {
                return res.send(`${playerName[0].player_name} already plays for ${buyerInfo[0].name}!`)
            }

            const buyer = await trx("teams")
                .where({ id: newTeamId })
                .decrement("transfer_budget", marketValue.market_value);

            const seller = await trx("teams")
                .where({ id: oldTeamId })
                .increment("transfer_budget", marketValue.market_value);

            const player = await trx("players")
                .where({ id: playerId })
                .update({ team_id: newTeamId });

            // trx.commit();

            res.send(`${buyerInfo[0].name} have successfully purchased ${playerName[0].player_name} from ${sellerInfo[0].name} for €${marketValue.market_value},000,000.`);

        } catch (error) {
            console.log(error)
            trx.rollback();
            res.send('Error transferring player')
        }
    })
})

module.exports = router;