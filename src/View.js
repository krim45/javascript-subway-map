export class View {
  constructor() {
    this.stationList = document.querySelector('#station-add-list');
    this.stationNameInput = document.querySelector('#station-name-input');
  }

  renderTable(arr, callback) {
    callback(arr)
  }

  clearInput() {
    this.stationNameInput.value = '';
  }

  clearTable() {
    while (this.stationList.hasChildNodes()) {
      this.stationList.firstChild.remove();
    }
  }

  haveDuplicatedName() {
    alert(`역 이름 조건을 만족하지 않거나 이미 존재하는 역입니다.
    - 역 이름은 두 글자 이상이어야 합니다.`)
  }
}