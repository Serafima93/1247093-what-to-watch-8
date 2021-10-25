/*eslint-disable no-console*/

import { useEffect, useState, useRef } from 'react';
import { FilmStructure } from '../../types/filmCards';

type MoviePlayer = {
  playerStructure: FilmStructure;
};

function Player(props: MoviePlayer): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const { playerStructure } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [playerStructure.videoLink]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <>
      <video
        autoPlay
        muted
        // controls
        src={playerStructure.videoLink}
        className="player__video"
        poster={playerStructure.previewImage}
        ref={videoRef}
      >
      </video>
      <button type="button" className="player__exit">
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value="30"
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{playerStructure.runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" disabled={isLoading}>
            <svg
              viewBox="0 0 19 19"
              width="19"
              height="19"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <use xlinkHref={`#${isPlaying ? 'pause' : 'play-s'}`}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
      {}
    </>
  );
}

export default Player;
