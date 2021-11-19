class StationManager {
  constructor() {
    this.station = [];
    this.newListId = 1;
    this.stationList = document.querySelector('#station-add-list');
    this.stationNameInput = document.querySelector('#station-name-input');
  }

  isValid(name) {
    let isContain = false;
    this.station.forEach(item => {
      if (item.name === name) isContain = true;
    })
    return name.length > 1 && !isContain
  }

  giveWarning() {
    alert(`역 이름 조건을 만족하지 않거나 이미 존재하는 역입니다.
    - 역 이름은 두 글자 이상이어야 합니다.
    `)
    this.clearAll();
  }

  makeTable() {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdWrap = document.createElement('td');
    const tdDelBtn = document.createElement('input');

    this.setTableAttribute(tr, tdName, tdDelBtn);
    tdWrap.append(tdDelBtn);
    tr.append(tdName, tdWrap);
    this.stationList.append(tr);

    tdDelBtn.addEventListener('click', () => {
      this.deleteList(this.newListId);
    });
  }

  setTableAttribute(tr, name, btn) {
    tr.setAttribute('id', this.newListId);
    btn.setAttribute('class', 'delete-list');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', '삭제');
    name.textContent = this.stationNameInput.value;
  }

  addStation() {
    if (this.isValid(this.stationNameInput.value)) {
      this.makeTable();
      this.station.push({
        id: this.newListId++,
        name: this.stationNameInput.value,
      })
    } else {
      this.giveWarning();
    }
    this.clearAll();
  }

  clearAll() {
    this.stationNameInput.value = '';
  }

  deleteList(id) {

  }
}

const stationManager = new StationManager();
const addBtn = document.querySelector('#station-add-form');

// addBtn.addEventListener('click', stationManager.addStation);
addBtn.addEventListener('submit', (e) => {
  stationManager.addStation();
  e.preventDefault();
});