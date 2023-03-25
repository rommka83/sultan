import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import AdminCabinet from './AdminCabinet';
// import Main from './main';

const Main = lazy(() => import('./main'));
const AdminCabinet = lazy(() => import('./AdminCabinet'));
const CatalogPage = lazy(() => import('./CatalogPage'));

export const Routing = () => {
  return (
    //TODO: сделать нормальный лоадер
    <Suspense fallback={<div>Секунду...</div>}>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='admin' element={<AdminCabinet />} />
          <Route path='catalog' element={<CatalogPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
