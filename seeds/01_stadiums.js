/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stadiums').del()
  await knex("stadiums").insert([
    { name: "Emirates Stadium", opened: 2006, capacity: 60704 },
    { name: "Villa Park", opened: 1897, capacity: 42657 },
    { name: "Dean Court", opened: 1910, capacity: 11307 },
    { name: "Brentford Community Stadium", opened: 2020, capacity: 17250 },
    { name: "Falmer Stadium", opened: 2011, capacity: 31800 },
    { name: "Turf Moor", opened: 1883, capacity: 21944 },
    { name: "Stamford Bridge", opened: 1877, capacity: 40343 },
    { name: "Selhurst Park", opened: 1924, capacity: 25486 },
    { name: "Goodison Park", opened: 1892, capacity: 39414 },
    { name: "Craven Cottage", opened: 1896, capacity: 29600 },
    { name: "Anfield", opened: 1884, capacity: 53394 },
    { name: "Kenilworth Road", opened: 1905, capacity: 10356 },
    { name: "City of Manchester Stadium", opened: 2002, capacity: 53400 },
    { name: "Old Trafford", opened: 1910, capacity: 74310 },
    { name: "St James' Park", opened: 1892, capacity: 52305 },
    { name: "City Ground", opened: 1898, capacity: 30332 },
    { name: "Bramall Lane", opened: 1855, capacity: 32050 },
    { name: "Tottenham Hotspur Stadium", opened: 2019, capacity: 62850 },
    { name: "London Stadium", opened: 2012, capacity: 62500 },
    { name: "Molineux Stadium", opened: 1889, capacity: 31750 },
  ]);
};
