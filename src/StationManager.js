import { getLocalData, setLocalData } from './localStorage.js'
import { STATION_KEY, STATION_ID } from './const.js'
import { View } from './View.js'

export class StationManager extends View {
  constructor() {
    super()
    this.station = getLocalData(STATION_KEY) || [];
    this.newStationId = getLocalData(STATION_ID) || 1;
  }

  makeTable(list) {
    this.clearTable();
    for (let item of list) {
      const stationNameWrap = document.createElement('tr');
      const stationName = document.createElement('td');
      const delBtnWrap = document.createElement('td');
      const delBtn = document.createElement('input');

      this.setTableAttribute(stationNameWrap, stationName, delBtn, item.id, item.name);
      delBtnWrap.append(delBtn);
      stationNameWrap.append(stationName, delBtnWrap);
      this.stationList.append(stationNameWrap);
    }
  }

  setTableAttribute(nameWrap, nameEl, btn, id, name) {
    nameWrap.setAttribute('id', `station${id}`);
    btn.setAttribute('id', `delete-list-${id}`);
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', '삭제');
    nameEl.textContent = name;
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
      setLocalData(STATION_KEY, this.station);
      setLocalData(STATION_ID, this.newStationId);
    } else {
      this.haveDuplicatedName();
    }
    this.clearInput();
  }

  deleteStation(id) {
    const deleteList = document.querySelector(`#station${id}`);
    const result = confirm(deleteList.firstChild.textContent + ' 역을 삭제 하시겠습니까?')

    if (result) {
      this.station = this.station.filter(item => item.id !== id);
      setLocalData(STATION_KEY, this.station);
      deleteList.remove();
    }
  }
}