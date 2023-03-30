import { Desktop, Mobile, Tablet } from 'app/hooks/mediaScrin';
import React from 'react';
import { Desk } from './layout/Desk';
import { Mob } from './layout/Mob';

export function CatalogHead() {
  return (
    <>
      <Desktop>
        <Desk />
      </Desktop>
      <Tablet>
        <Desk />
      </Tablet>
      <Mobile>
        <Mob />
      </Mobile>
    </>
  );
}
