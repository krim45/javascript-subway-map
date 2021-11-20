export class StationManager {
  constructor() {
    this.station = JSON.parse(localStorage.getItem('station')) || [];
    this.newStationId = JSON.parse(localStorage.getItem('stationId')) || 1;
    this.stationList = document.querySelector('#station-add-list');
    this.stationNameInput = document.querySelector('#station-name-input');
  }

  render() {
    this.makeTable(this.station);
  }

  makeTable(list) {
    this.clearTable();
    for (let item of list) {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdWrap = document.createElement('td');
      const tdDelBtn = document.createElement('input');

      this.setTableAttribute(tr, tdName, tdDelBtn, item.id, item.name);
      tdWrap.append(tdDelBtn);
      tr.append(tdName, tdWrap);
      this.stationList.append(tr);

      tdDelBtn.addEventListener('click', () => { this.deleteStation(item.id) });
    }
  }

  setTableAttribute(tr, tdName, btn, id, name) {
    tr.setAttribute('id', `station${id}`);
    btn.setAttribute('class', 'delete-list');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', '삭제');
    tdName.textContent = name;
  }

  isValid(name) {
    for (let item of this.station) {
      if (item.name === name) return false;
    }
    return name.length > 1
  }

  addStation() {
    if (this.isValid(this.stationNameInput.value)) {
      this.station.push({
        id: this.newStationId++,
        name: this.stationNameInput.value,
      })
      localStorage.setItem('stationId', JSON.stringify(this.newStationId));
      localStorage.setItem('station', JSON.stringify(this.station));
    } else {
      this.giveWarning();
    }
    this.clearInput();
  }

  deleteStation(id) {
    const deleteList = document.querySelector(`#station${id}`);
    const result = confirm(deleteList.firstChild.textContent + ' 역을 삭제 하시겠습니까?')

    if (result) {
      this.station = this.station.filter(item => item.id !== id);
      localStorage.setItem('station', JSON.stringify(this.station));
      deleteList.remove();
    }
  }

  giveWarning() {
    alert(`역 이름 조건을 만족하지 않거나 이미 존재하는 역입니다.
    - 역 이름은 두 글자 이상이어야 합니다.`)
    this.clearInput();
  }

  clearInput() {
    this.stationNameInput.value = '';
  }

  clearTable() {
    while (this.stationList.hasChildNodes()) {
      this.stationList.firstChild.remove();
    }
  }

  setEventListener() {

  }
}