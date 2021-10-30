import { computed, makeObservable, observable } from 'mobx';
import kebabCase from 'lodash/kebabCase';

import HydratedStore from './base/Hydrated.store';

class UserStore extends HydratedStore {
  name = '';

  constructor(initialData) {
    super();

    makeObservable(this, {
      name: observable,
      username: computed,
    });

    this.assignData(initialData);
  }

  get username() {
    return kebabCase(this.name);
  }
}

export default UserStore;
