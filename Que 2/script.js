const playersTable = document.getElementById('players-table');
const playersTbody = document.getElementById('players-tbody');
const selectedPlayersCount = document.getElementById('selected-players-count');

fetch('players.json')
  .then(response => response.json())
  .then(players => {
    players.forEach(player => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${player.name}</td>
        <td>${player.country}</td>
      `;
      playersTbody.appendChild(row);
      row.addEventListener('click', () => {
        if (!player.isSelected) {
          player.isSelected = true;
          row.classList.add('selected');
        } else {
          player.isSelected = false;
          row.classList.remove('selected');
        }
        updateSel();
      });
    });
    updateSelectedPlayersCount();
  });

function updateSel() {
  const selectedPlayers = players.filter(player => player.isSelected);
  selectedPlayersCount.textContent = `${selectedPlayers.length} player${selectedPlayers.length === 1 ? '' : 's'} selected`;
}