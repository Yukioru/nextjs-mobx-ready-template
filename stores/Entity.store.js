import { makeObservable, observable } from 'mobx';
import HydratedStore from './base/Hydrated.store';

class EntityStore extends HydratedStore {
  title;
  year;

  constructor(initialData) {
    super();

    makeObservable(this, {
      title: observable,
      year: observable,
    });

    this.assignData(initialData);
  }
}

export default EntityStore;
