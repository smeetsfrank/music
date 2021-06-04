import React from 'react';
import './index.module.scss';

type Props = {
  url: string | undefined;
};

const MainImage: React.FC<Props> = ({ url }) => (
  <>
    <img src={url} alt="UnSlash" />
    {/* <svg className="image-filter">
      <filter id="transmissionerror">
        <feColorMatrix
          type="saturate"
          values="0"
          in="SourceGraphic"
          result="colormatrix1"
        />
        <feColorMatrix
          type="matrix"
          values="0.85 0 0 0 0  0 0 0 0 0  0 0 0.1 0 0  0 0 0 5 0"
          in="colormatrix1"
          result="colormatrix2"
        />
        <feTurbulence
          type="turbulence"
          baseFrequency="0.002 0.008"
          numOctaves="2"
          seed="5"
          stitchTiles="noStitch"
          result="turbulence"
        >
          <animate
            attributeName="baseFrequency"
            from="0.002 0.008"
            to="0.002 0.01"
            dur="3500ms"
            repeatCount="indefinite"
          />
          <animate
            attributeName="numOctaves"
            from="1"
            to="10"
            dur="2500ms"
            repeatCount="indefinite"
          />
          <animate
            attributeName="seed"
            from="50"
            to="60"
            dur="5s"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feColorMatrix
          type="saturate"
          values="30"
          in="turbulence"
          result="colormatrix3"
        />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -15"
          in="colormatrix3"
          result="colormatrix4"
        />
        <feDisplacementMap
          in="colormatrix2"
          in2="colomatrix4"
          scale="15"
          xChannelSelector="R"
          yChannelSelector="A"
          result="displacementMap"
        />
      </filter>
    </svg> */}
  </>
);

export default MainImage;
