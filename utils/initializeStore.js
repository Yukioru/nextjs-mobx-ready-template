import MemoryStorage from 'memorystorage';

const ms = new MemoryStorage('stores');

function initializeStore({ name, Store, initialState = null }) {
  // Возьми стор, если его нет - создай и сохрани стор
  let _store = ms.getItem(name);
  if (!_store) {
    _store = new Store();
    ms.setItem(name, _store);
  }

  // Если пришла дата, обнови сторы
  if (initialState) {
    _store.hydrate(initialState);
  }

  // Для сервера всегда возвращай заново созданный стор
  if (typeof window === 'undefined') {
    ms.clear();
    return _store;
  }

  // Для клиента, если стор не был сохранён - сохрани стор
  if (!ms.getItem(name)) {
    ms.setItem(name, _store);
  }

  // Для клиента, верни стор из памяти
  return ms.getItem(name);
}

export default initializeStore;
