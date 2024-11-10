'use client'

import { YMaps, Map as PureMap, Placemark } from '@pbe/react-yandex-maps';

/** Карта. */
export function Map({ coordinates } : { coordinates: [number, number] }) {
  const defaultState = {
    center: coordinates,
    zoom: 15,
  };

  return (
    <YMaps query={{ lang: 'ru_RU' }}>
      <PureMap defaultState={defaultState} width="100%" height={400}>
        <Placemark geometry={coordinates}></Placemark>
      </PureMap>
    </YMaps>
  );
}
