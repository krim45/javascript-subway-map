import { StationManager } from './StationManager.js';

const stationManager = new StationManager();
const addBtn = document.querySelector('#station-add-form');

stationManager.render();

addBtn.addEventListener('submit', (e) => {
  stationManager.stationList.innerHTML = '';
  stationManager.addStation();
  localStorage.setItem('station', JSON.stringify(stationManager.station));
  // stationManager.station = JSON.parse(localStorage.getItem('station'));
  console.log(stationManager.station);
  stationManager.render();
  e.preventDefault();
});

console.log(stationManager.station);
console.log(localStorage.getItem('station'))