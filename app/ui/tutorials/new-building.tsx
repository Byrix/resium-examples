'use client';

import { Cesium3DTileset, Viewer, Camera, GeoJsonDataSource } from "resium";
import { createWorldTerrainAsync, Cartesian3, Math as CesiumMath, IonResource, ClassificationType, Cesium3DTileStyle } from "cesium";
import { drapePolygonTerrain } from '@/app/lib/cesium';
import { useState } from 'react';

export default function BuildingVisualiser({ className = '' }: { className?: string }) {
  const [showNewBuilding, setShowNewBuilding] = useState(true);
  const initPoint = Cartesian3.fromDegrees(-104.9915474653244, 39.7357743115534, 2250);

  const hideOldBuilding = new Cesium3DTileStyle({
    show: {
      conditions: [
        ['${elementId} === 332469316', false],
        ['${elementId} === 332469317', false],
        ['${elementId} === 235368665', false],
        ['${elementId} === 530288180', false],
        ['${elementId} === 530288179', false],
        ['${elementId} === 532245203', false],
        [true, true]
      ]
    },
    color: "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#ffffff')"
  });

  return (
    <>
      <div className='fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4 fixed z-1 m-3'>
        <label className='label text-base-content text-xl'>
          <input
            type='checkbox' defaultChecked
            className='checkbox checkbox-success mr-2'
            onChange={() => setShowNewBuilding(!showNewBuilding)}
          />
          Show Building
        </label>
      </div>
      <Viewer
        className={className}
        terrainProvider={createWorldTerrainAsync()}
        timeline={false}
        animation={false}
      >
        <Camera position={initPoint} />
        <Cesium3DTileset
          url={IonResource.fromAssetId(96188)}
          style={hideOldBuilding}
        />

        <GeoJsonDataSource
          data='/tutorials/new-building/new_building_denver.geojson'
          clampToGround
          show
          onLoad={drapePolygonTerrain}
        />
        <Cesium3DTileset
          url={IonResource.fromAssetId(3641478, { accessToken: process.env.NEXT_PUBLIC_CESIUM_TOKEN })}
          show={showNewBuilding}
        />
      </Viewer>
    </>
  );
}