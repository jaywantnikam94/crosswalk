import React, { lazy, Suspense } from 'react';

const LazyMainFrame = lazy(() => import('./MainFrame'));

const MainFrame = props => (
  <Suspense fallback={null}>
    <LazyMainFrame {...props} />
  </Suspense>
);

export default MainFrame;
