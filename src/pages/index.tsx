import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared/Loader';

const Main = lazy(() => import('./main'));
const AdminCabinet = lazy(() => import('./AdminCabinet'));
const CatalogPage = lazy(() => import('./CatalogPage'));
const ProductPage = lazy(() => import('./ProductPage'));
const BascetPage = lazy(() => import('./BascetPage'));
const Home = lazy(() => import('./Home'));

export const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/sultan' element={<Home />} />
          <Route path='admin' element={<AdminCabinet />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='catalog/:product' element={<ProductPage />} />
          <Route path='basket' element={<BascetPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
