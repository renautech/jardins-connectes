/* eslint-disable arrow-body-style */
import React from 'react';
import YouTube from '@u-wave/react-youtube';

import './style.scss';

const HomeVideo = () => {
  return (
    <div className="homevideo">
      <YouTube
        video="doV8TvNGKbE"
      />
    </div>
  );
};

export default HomeVideo;
