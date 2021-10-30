class HydratedStore {
  _hydrateSupport = true;
  hydrateType = 'single';

  assignData(data = {}, hydrateType = this.hydrateType) {
    for (let key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        if (hydrateType === 'single') {
          this[key] = data[key];
        }
        if (hydrateType === 'root' && this[key]?._hydrateSupport) {
          this[key].hydrate(data[key]);
        }
      }
    }
  }

  hydrate(data) {
    if (!data) return;
    this.assignData(data);
  }
}

export default HydratedStore;
