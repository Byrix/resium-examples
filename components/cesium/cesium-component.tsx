'use client';

import React from 'react';
import type { CesiumType, Position } from '@/app/lib/types';
import { Cesium3DTileset, type Entity, type Viewer } from 'cesium';
import { dateToJulian } from '@/app/lib/date';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export default function CesiumComponent(
  {CesiumJs, positions}: {
    CesiumJs: CesiumType,
    positions: Position[]
  }
) {
  const cesiumViewer = React.useRef<Viewer | null>(null);
  const cesiumContainerRef = React.useRef<HTMLDivElement>(null);
  const addedScenePrimatives = React.useRef<Cesium3DTileset[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const resetCamera = React.useCallback(async () => {
    // Set inital camera to look at San Fran
    cesiumViewer.current?.scene.camera.setView({
      destination: CesiumJs.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation: {
        heading: CesiumJs.Math.toRadians(0.0),
        pitch: CesiumJs.Math.toRadians(-15.0),
      },
    });
  }, []);

  const cleanUpPrimitives = React.useCallback(() => {
    addedScenePrimatives.current.forEach(scenePrimitive => {
      if (cesiumViewer.current) { cesiumViewer.current.scene.primitives.remove(scenePrimitive); }
    });
    addedScenePrimatives.current = [];
  }, []);

  const initialiseCesiumJs = React.useCallback(async () => {
    if (cesiumViewer.current) {
      const buildingTileset = await CesiumJs.createOsmBuildingsAsync();
      cleanUpPrimitives();

      const buildingPrim = cesiumViewer.current.scene.primitives.add(buildingTileset);
      addedScenePrimatives.current.push(buildingPrim);

      resetCamera();

      positions.forEach(p => {
        cesiumViewer.current?.entities.add({
          position: CesiumJs.Cartesian3.fromDegrees(p.lng, p.lat),
          ellipse: {
            semiMinorAxis: 50000.0,
            semiMajorAxis: 50000.0,
            height: 0,
            material: CesiumJs.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: CesiumJs.Color.BLACK,
          }
        });
      });

      setIsLoaded(true);
    }
  }, [positions]);

  React.useEffect(() => {
    if (!cesiumViewer.current && cesiumContainerRef.current) {
      CesiumJs.Ion.defaultAccessToken = `${process.env.NEXT_PUBLIC_CESIUM_TOKEN}`;
      cesiumViewer.current = new CesiumJs.Viewer(cesiumContainerRef.current, {
        terrain: CesiumJs.Terrain.fromWorldTerrain()
      });

      cesiumViewer.current.clock.clockStep = CesiumJs.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
    }
  }, []);

  React.useEffect(() => {
    if (isLoaded) return;
    initialiseCesiumJs(); 
  }, [positions, isLoaded]);

  // const entities: Entity[] = [];
  // const julianDate = dateToJulian(CesiumJs, new Date());

  return (
    <div
      ref={cesiumContainerRef}
      id='cesium-container'
      className='h-screen v-screen'
    />
  );
}