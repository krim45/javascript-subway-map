export class StationManager {
  // localStorage도 사용해야 한다.
  constructor() {
    this.station = [];
    this.newListId = 0;
  }

  namedStation() {


  }

  addList() {
    const stationList = document.querySelector('#station-add-list');
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdWrap = document.createElement('td');
    const tdDelBtn = document.createElement('input');
    const stationName = document.querySelector('#station-name-input').value;

    tdName.textContent = stationName;
    // tdDelBtn.setAttribute('class', 'delete-list');
    tdDelBtn.setAttribute('type', 'button');
    tdDelBtn.setAttribute('value', '삭제');
    tdDelBtn.addEventListener('click', this.deleteList)
    tdWrap.append(tdDelBtn);
    tr.append(tdName, tdWrap);
    stationList.append(tr);
  }

  deleteList() {

  }
}

const stationManager = new StationManager();
const addBtn = document.querySelector('#station-add-button');
addBtn.addEventListener('click', stationManager.addList);