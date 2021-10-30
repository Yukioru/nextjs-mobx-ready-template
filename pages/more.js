import Link from 'next/link';

import { useStore } from '../components/StoreProvider';

function More() {
  const stores = useStore();
  console.log('More.store', stores);
  return (
    <div>
      {stores.rootStore.user.name}
      <sup>{`@${stores.rootStore.user.username}`}</sup>
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}


export function getStaticProps() {
  return {
    props: {
      initialState: {
        user: {
          name: 'User 3',
        },
      },
    },
  };
}


export default More;
