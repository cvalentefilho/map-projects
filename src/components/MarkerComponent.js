import React from 'react';
import { defaultProps } from 'recompose';
import myMarkerStyle from './style/myMarker.css';

const myMarker = ({ theme }) => (
  <div className={theme.component}>
    My Marker
  </div>
);

export default defaultProps({
  'theme': myMarkerStyle
})(myMarker);