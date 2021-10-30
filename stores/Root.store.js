import { enableStaticRendering } from 'mobx-react-lite';

import HydratedStore from './base/Hydrated.store';
import UserStore from './User.store';

enableStaticRendering(typeof window === 'undefined');

class RootStore extends HydratedStore {
  hydrateType = 'root';

  constructor() {
    super();

    this.user = new UserStore();
  }
}

export default RootStore;
