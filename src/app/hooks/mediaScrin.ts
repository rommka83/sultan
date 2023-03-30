import { useMediaQuery } from 'react-responsive';

interface IProps {
  children: JSX.Element;
}

export const Desktop = ({ children }: IProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1250 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }: IProps) => {
  const isTablet = useMediaQuery({ minWidth: 701, maxWidth: 1250 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }: IProps) => {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return isMobile ? children : null;
};
