import { ClassificationType, GeoJsonDataSource } from 'cesium';

export function drapePolygonTerrain(dataSource: GeoJsonDataSource): void {
  for (const entity of dataSource.entities.values) {
    if (entity.polygon) {
      // @ts-expect-error According to CesiumJS docs / tutorials this is the accepted
      // method of updating classification types, however Types disagree (Property!=Number)
      entity.polygon.classificationType = ClassificationType.TERRAIN;
    }
  }
}