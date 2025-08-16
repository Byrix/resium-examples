'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import type { CesiumType, Position } from '@/app/lib/types';

const CesiumDynamicComponent = dynamic(() => import('@/components/cesium/cesium-component'), {
  ssr: false
});

export default function CesiumWrapper(
  {
    positions
  } : {
    positions: Position[]
  }
) {
  const [CesiumJs, setCesiumJs] = React.useState<CesiumType | null>(null);

  React.useEffect(() => {
    if (CesiumJs) return;
    const CesiumImportPromise = import('cesium');
    Promise.all([CesiumImportPromise]).then(res => {
      const { ...Cesium } = res[0];
      setCesiumJs(Cesium);
    });
  }, [CesiumJs]);

  return (
    CesiumJs ? <CesiumDynamicComponent CesiumJs={CesiumJs} positions={positions} /> : null
  );
}