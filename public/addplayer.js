document.addEventListener("DOMContentLoaded", () => {
    const addForm = document.querySelector("#add-form");

    addForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const playerName = document.querySelector("#playername").value;
      const position = document.querySelector(".position").value;
      const teamId = document.querySelector(".teamselection").value;
      const nationalTeamId = document.querySelector(".nationalteamDropdown").value;
      const marketValue = document.querySelector(".marketvalue").value;

      const realNatId = nationalTeamId === "0" ? null : nationalTeamId;

        fetch('/add/player', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                player_name: playerName,
                position: position,
                team_id: teamId,
                national_team_id: realNatId,
                market_value: marketValue,
            })
        })
            .then((response) => {
                return response.text();
            })
            .then((result) => {
                document.querySelector(".result").style = "display:block";
                document.querySelector(".result").innerHTML = result;            
        })

    });

})

