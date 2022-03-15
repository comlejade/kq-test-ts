import React from 'react';
import Location from './location';

const StoreContext = React.createContext({
  locationStore: new Location()
});

const useStore = () => React.useContext(StoreContext);
export default useStore;