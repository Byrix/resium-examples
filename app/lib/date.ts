import { CesiumType } from '@/app/lib/types';
import type { JulianDate } from 'cesium';

export function dateToJulian(CesiumJs: CesiumType, date: Date): JulianDate {
  return CesiumJs.JulianDate.fromDate(date);
}