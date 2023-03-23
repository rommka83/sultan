import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import AdminCabinet from './AdminCabinet';
// import Main from './main';

const Main = lazy(() => import('./main'));
const AdminCabinet = lazy(() => import('./AdminCabinet'));

export const Routing = () => {
  return (
    //TODO: сделать нормальный лоадер
    <Suspense fallback={<div>Секунду...</div>}>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='admin' element={<AdminCabinet />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
