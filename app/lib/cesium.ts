import { ClassificationType, GeoJsonDataSource } from 'cesium';

export function drapePolygonTerrain(dataSource: GeoJsonDataSource): void {
  for (const entity of dataSource.entities.values) {
    if (entity.polygon) entity.polygon.classificationType = ClassificationType.TERRAIN;
  }
}