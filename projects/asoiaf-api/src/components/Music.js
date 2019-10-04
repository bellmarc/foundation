import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const Music = (props) => {
      return (
        <div>
          <button className="play-music-btn" onClick={props.togglePlay}>{props.play ? <i className="pi pi-volume-up" style={{'fontSize': '3em'}}></i> : <i className="pi pi-volume-off" style={{'fontSize': '3em', 'color':'whitesmoke'}}></i>}
          </button>
        </div>
      );
    }


export default Music;