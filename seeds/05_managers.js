/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('managers').del()
  await knex("managers").insert([
    { manager_name: "Mikel Arteta", team_id: 1, manager_nationality: "Spain" },
    { manager_name: "Unai Emery", team_id: 2, manager_nationality: "Spain" },
    { manager_name: "Andoni Iraola", team_id: 3, manager_nationality: "Spain" },
    { manager_name: "Thomas Frank", team_id: 4, manager_nationality: "Denmark" },
    { manager_name: "Roberto De Zerbi", team_id: 5, manager_nationality: "Italy" },
    { manager_name: "Vincent Kompany", team_id: 6, manager_nationality: "Belgium" },
    { manager_name: "Mauricio Pochettino", team_id: 7, manager_nationality: "Argentina" },
    { manager_name: "Roy Hodgson", team_id: 8, manager_nationality: "England" },
    { manager_name: "Sean Dyche", team_id: 9, manager_nationality: "England" },
    { manager_name: "Marco Silva", team_id: 10, manager_nationality: "Portugal" },
    { manager_name: "Jurgen Klopp", team_id: 11, manager_nationality: "Germany" },
    { manager_name: "Rob Edwards", team_id: 12, manager_nationality: "Wales" },
    { manager_name: "Pep Guardiola", team_id: 13, manager_nationality: "Spain" },
    { manager_name: "Erik ten Hag", team_id: 14, manager_nationality: "Netherlands" },
    { manager_name: "Eddie Howe", team_id: 15, manager_nationality: "England" },
    { manager_name: "Steve Cooper", team_id: 16, manager_nationality: "Wales" },
    { manager_name: "Paul Heckingbottom", team_id: 17, manager_nationality: "England" },
    { manager_name: "Ange Postecoglou", team_id: 18, manager_nationality: "Australia" },
    { manager_name: "David Moyes", team_id: 19, manager_nationality: "Scotland" },
    { manager_name: "Julien Lopetegui", team_id: 20, manager_nationality: "Spain" },
    { manager_name: "Gareth Southgate", national_team_id: 1, manager_nationality: "England" },
    { manager_name: "Fernando Diniz", national_team_id: 2, manager_nationality: "Brazil" },
    { manager_name: "Didier Deschamp", national_team_id: 3, manager_nationality: "France" },
    { manager_name: "Lionel Scaloni", national_team_id: 4, manager_nationality: "Argentina" },
    { manager_name: "Domenico Tedesco", national_team_id: 5, manager_nationality: "Germany/Italy" },
    { manager_name: "Ronald Koeman", national_team_id: 6, manager_nationality: "Netherlands" },
    { manager_name: "Roberto Mancini", national_team_id: 7, manager_nationality: "Italy" },
    { manager_name: "Roberto Martinez", national_team_id: 8, manager_nationality: "Spain" },
    { manager_name: "Luis de la Fuente", national_team_id: 9, manager_nationality: "Spain" },
    { manager_name: "Hansi Flick", national_team_id: 10, manager_nationality: "Germany" },
  ]);
};
