export type CesiumType = typeof import('cesium');

export type Position = {
  lat: number,
  lng: number
};

export type RedirectEntry = {
  destination: string,
  perm: boolean
};