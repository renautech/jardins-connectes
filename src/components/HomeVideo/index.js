/* eslint-disable arrow-body-style */
import React from 'react';
import YouTube from '@u-wave/react-youtube';

import './style.scss';

const HomeVideo = () => {
  return (
    <div className="homevideo">
      <YouTube
        video="m-rWaVxRV5E"
        // width="960"
        // height="540"
      />
    </div>
  );
};

export default HomeVideo;
