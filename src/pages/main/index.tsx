import { Outlet } from 'react-router';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
