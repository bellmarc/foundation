import React from 'react';
import soundFile from '../assets/got-theme.mp3';
import soundFile2 from '../assets/got-melodic.mp3';
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
          <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
          {/* <i class="pi pi-volume-up"></i>
        </div> */}
      );
    }
}

export default Music;