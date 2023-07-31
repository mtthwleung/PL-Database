document.addEventListener("DOMContentLoaded", () => {

    const teamDropdown = document.querySelector(".teamDropdown");
    const playerDropdown = document.querySelector(".playerDropdown");
    const transferForm = document.querySelector('#transferForm');

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
        transferForm.style = "display:block"
    })

    transferForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const playerId = playerDropdown.value;
        const oldTeamId = teamDropdown.value;
        const newTeamId = document.querySelector('.teamselection').value;
            
        fetch(`/transfer/player/${playerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                oldTeamId,
                newTeamId
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
