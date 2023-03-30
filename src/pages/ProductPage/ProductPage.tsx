import { Desktop, Mobile, Tablet } from 'app/hooks/mediaScrin';
import React, { useEffect } from 'react';
import { Desk } from './layout/Desk';
import { Mob } from './layout/Mob';

export function ProductPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Desktop>
        <Desk />
      </Desktop>
      <Tablet>
        <Mob />
      </Tablet>
      <Mobile>
        <Mob />
      </Mobile>
    </>
  );
}
