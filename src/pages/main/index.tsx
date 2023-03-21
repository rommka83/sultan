import { Outlet } from 'react-router';
import { Header } from 'widgets/Header';
import styles from './styles.module.css';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
