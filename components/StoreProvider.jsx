import { createContext, useContext } from 'react';
import initializeStore from '../utils/initializeStore';

export const StoreContext = createContext({});

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }

  return context;
}

export function StoreProvider({ store, children, initialState }) {
  const savedStore = useContext(StoreContext);
  const _store = initializeStore({
    initialState,
    ...store,
  });

  return (
    <StoreContext.Provider
      value={{
        ...savedStore,
        [store.name]: _store,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
