/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("stadiums").del();
  await knex("stadiums").insert([
    { name: "Wembley Stadium", opened: 2007, capacity: 90000 },
    { name: "Maracana", opened: 1950, capacity: 78838 },
    { name: "Stade de France", opened: 1998, capacity: 81338 },
    { name: "Estadio Monumental", opened: 1938, capacity: 84567 },
    { name: "King Baudouin Stadium", opened: 1930, capacity: 50093 },
    { name: "Johan Cruyff Arena", opened: 1996, capacity: 55865 },
    { name: "San Siro", opened: 1926, capacity: 80018 },
    { name: "Estadio da Luz", opened: 2003, capacity: 64642 },
    { name: "Camp Nou", opened: 1957, capacity: 99354 },
    { name: "Olympiastadion", opened: 1936, capacity: 74667 },
    { name: "Hong Kong Stadium", opened: 1953, capacity: 40000 },
  ]);
};