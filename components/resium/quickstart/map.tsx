import { CameraFlyTo, Viewer, Cesium3DTileset } from 'resium';
import { Cartesian3, Math as CMath, createWorldTerrainAsync, IonResource } from 'cesium';

export default function ResiumMap() {
  return (
    <Viewer full terrainProvider={createWorldTerrainAsync()}>
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(-122.4175, 37.655, 400)}
        orientation={{
          heading: CMath.toRadians(0.0),
          pitch: CMath.toRadians(-15.0),
        }}
      />

      <Cesium3DTileset url={IonResource.fromAssetId(96188)} />
    </Viewer>
  );
}