import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MapButton from './MapButton';

export default {
  title: 'MapButton',
  component: MapButton,
};

export const MapButtonBasic = () => {
  const value = 'US';

  return (
    <MapButton href="/#" className="mapButton">
      {value}
    </MapButton>
  );
};
