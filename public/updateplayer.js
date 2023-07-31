document.addEventListener("DOMContentLoaded", () => {

    const teamDropdown = document.querySelector(".teamDropdown");
    const playerDropdown = document.querySelector(".playerDropdown");
    const updateForm = document.querySelector('#update-form');

    teamDropdown.addEventListener("change", () => {
        const teamId = teamDropdown.value;
        
        fetch(`/teams/${teamId}/players`)
            .then(response => {
                return response.json();
            })
            .then(players => {
                playerDropdown.innerHTML = '<option disabled selected value> Select a Player </option>';
                for (let player of players) {
                    const option = document.createElement('option');
                    option.value = player.id;
                    option.text = player.player_name;
                    playerDropdown.appendChild(option);
                }
            })
    });

    playerDropdown.addEventListener("change", () => {
        updateForm.style = "display:block"
    })

    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const playerId = playerDropdown.value;
        const position = document.querySelector('.position').value;
        const teamId = document.querySelector('.teamselection').value;
        const nationalTeamId = document.querySelector('.nationalteamDropdown').value;
        const marketValue = document.querySelector('.marketvalue').value;

        const realNatId = nationalTeamId === "0" ? null : nationalTeamId;
            
        fetch(`/update/player/${playerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                position: position,
                team_id: teamId,
                national_team_id: realNatId,
                market_value: marketValue,
            }),
        })
            .then((response) => {
                return response.text();
            })
            .then(result => {
                document.querySelector('.result').style = "display:block"
                document.querySelector('.result').innerHTML = result;
        })
    })

});
