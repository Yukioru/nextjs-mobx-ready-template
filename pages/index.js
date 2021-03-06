import Link from 'next/link';

import { StoreProvider, useStore } from '../components/StoreProvider';
import EntityStore from '../stores/Entity.store';

function InnerHome() {
  const stores = useStore();
  console.log('InnerHome.store', stores);
  return <div>{stores.entityStore.title}</div>;
}

function Home({ initialState }) {
  const stores = useStore();
  console.log('Home.store', stores, initialState);
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
      <InnerHome />
      <div>
        <Link href="/more">more</Link>
      </div>
      <div>
        <Link href="/other">other</Link>
      </div>
    </StoreProvider>
  );
}

export function getStaticProps() {
  return {
    props: {
      initialState: {
        user: {
          name: 'User 1',
        },
        entity: {
          title: 'Семейка Аддамс',
          year: 2019,
        },
      },
    },
  };
}

export default Home;
