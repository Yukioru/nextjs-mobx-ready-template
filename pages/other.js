import Link from 'next/link';

import { StoreProvider, useStore } from '../components/StoreProvider';
import EntityStore from '../stores/Entity.store';

function InnerOther() {
  const stores = useStore();
  console.log('InnerOther.store', stores);
  return <div>{stores.entityStore.title}</div>;
}

function Other({ initialState }) {
  const stores = useStore();
  console.log('Other.store', stores, initialState);
  return (
    <StoreProvider
      store={{
        name: 'entityStore',
        Store: EntityStore,
        initialState: initialState.entity,
      }}
    >
      {stores.rootStore.user.name}
      <sup>{`@${stores.rootStore.user.username}`}</sup>
      <InnerOther />
      <div>
        <Link href="/more">more</Link>
      </div>
      <div>
        <Link href="/">home</Link>
      </div>
    </StoreProvider>
  );
}

export function getStaticProps() {
  return {
    props: {
      initialState: {
        user: {
          name: 'User 2',
        },
        entity: {
          title: 'Борис Годунов (2021)',
          year: 2021
        },
      },
    },
  };
}

export default Other;
