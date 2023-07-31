const express = require("express");
const router = express.Router();

const knexfile = require("../knexfile").development;
const knex = require("knex")(knexfile);

router.get('/', async (req, res) => {
    let stadia = await knex("stadiums").orderBy("stadiums.capacity", "desc");
    res.render('stadiums', { stadia: stadia });
})

module.exports = router;