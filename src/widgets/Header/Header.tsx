import { Desktop, Tablet } from 'app/hooks/mediaScrin';
import React from 'react';
import { DescTop, Mob, Tab } from './layout';
import { Mobile } from './../../app/hooks/mediaScrin';

export function Header() {
  return (
    <>
      <Desktop>
        <DescTop />
      </Desktop>
      <Tablet>
        <Tab />
      </Tablet>
      <Mobile>
        <Mob />
      </Mobile>
    </>
  );
}
