import { makeAutoObservable } from 'mobx';

class Store {
  storeId = 0;
  
  constructor() {
    makeAutoObservable(this)
  }
  
  setStoreId (id: number) {
    this.storeId = id;
  }
}

export default Store;
