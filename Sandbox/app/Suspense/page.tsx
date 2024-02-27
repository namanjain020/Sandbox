

import { Suspense } from 'react';
import Content from './Content';

export default function Page(){
  return (
    <>
      <h1>Page</h1>
      <Suspense fallback={<Loading />}>
        <Content/>
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
