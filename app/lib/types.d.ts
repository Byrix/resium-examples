export type CesiumType = typeof import('cesium');

export type Position = {
  lat: number,
  lng: number
};

export type RedirectEntry = {
  destination: string,
  perm: boolean
};

export type DropdownItem = {
  label: string,
  href?: string,
  className?: string
}