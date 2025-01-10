import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';

const RouteLayout = React.lazy(() => import('./Layout'));
const RouteError = React.lazy(() => import('./Error'));
const RouteHomepage = React.lazy(() => import('./Home'));
const RouteFavorites = React.lazy(() => import('./Favorites'));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div
          className="position-absolute overflow-hidden
         w-100 h-100 d-flex justify-content-center align-items-center"
        >
          Loading..
        </div>
      }
    >
      <Routes>
        <Route errorElement={<RouteError />} element={<RouteLayout />}>
          <Route path="/" element={<RouteHomepage />} />
          <Route path="/favorites" element={<RouteFavorites />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
