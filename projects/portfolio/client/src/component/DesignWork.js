import React from 'react';
import Iframe from 'react-iframe';
import '../style/DesignWork.css';


const DesignWork = () => {
  return (
      <div>
          {/* <p>Design Work</p> */}
          <Iframe
          url="//invis.io/DEVE6KCYU3M"
          width="438px"
          height="930px"
          className="design-prototype"
          display="initial"
          position="relative"
          frameborder="0"

          allowFullScreen
          >
          </Iframe>
      </div>
  )
}


export default DesignWork