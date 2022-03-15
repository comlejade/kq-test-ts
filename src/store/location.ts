import { makeAutoObservable } from 'mobx';

class Location {
  storeId = 1;
  
  constructor() {
    makeAutoObservable(this)
  }
  
  setStoreId (id: number) {
    this.storeId = id;
  }
}

export default Location;
