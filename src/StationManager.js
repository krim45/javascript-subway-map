class StationManager {
  constructor() {
    this.station = [];
    this.newListId = 1;
    this.stationList = document.querySelector('#station-add-list');
    this.stationNameInput = document.querySelector('#station-name-input');
  }

  isValid(str) {
    let isContain = false;
    this.station.forEach(item => {
      if (item.name === str) isContain = true;
    })
    return str.length > 1 && !isContain
  }

  giveWarning() {
    alert('이미 존재하는 역 입니다.')
    this.clearAll();
  }

  makeTable() {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdWrap = document.createElement('td');
    const tdDelBtn = document.createElement('input');
    tdName.textContent = this.stationNameInput.value;

    tdDelBtn.setAttribute('class', 'delete-list');
    tdDelBtn.setAttribute('type', 'button');
    tdDelBtn.setAttribute('value', '삭제');
    tdWrap.append(tdDelBtn);
    tr.append(tdName, tdWrap);
    this.stationList.append(tr);

    tdDelBtn.addEventListener('click', this.deleteList.bind(this));
  }

  addStation() {
    if (this.isValid(this.stationNameInput.value)) {
      this.makeTable();
      this.station.push({
        id: this.newListId++,
        name: this.stationNameInput,
      })
      this.clearAll();
    } else {
      this.giveWarning();
    }
  }

  clearAll() {
    this.stationNameInput.value = '';
  }

  deleteList() {

  }
}

const stationManager = new StationManager();
const addBtn = document.querySelector('#station-add-button');
// addBtn.addEventListener('click', stationManager.addStation);
addBtn.addEventListener('click', stationManager.addStation.bind(stationManager));