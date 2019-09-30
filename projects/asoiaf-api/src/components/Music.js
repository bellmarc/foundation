import React from 'react';
// import soundFile from '../assets/got-theme.mp3';
import soundFile2 from '../assets/got-melodic.mp3';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class Music extends React.Component {
    state = {
      play: false
    }
    audio = new Audio(soundFile2)

    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }

    render() {
      return (
        <div>
          <button className="play-music-btn" onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}
            <i className="pi pi-volume-up" style={{'fontSize': '3em', 'color':'whitesmoke'}}></i>
            </button>


        </div>
      );
    }
}

export default Music;