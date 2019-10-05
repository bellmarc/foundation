import React from "react";
import soundFile2 from "../assets/got-melodic.mp3";

const MusicContext = React.createContext();

class MusicProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      play: false
    };
  }
  audio = new Audio(soundFile2);

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <MusicContext.Provider
        value={{
          audio: this.audio,
          togglePlay: this.togglePlay,
          play: this.state.play
        }}
      >
        {this.props.children}
      </MusicContext.Provider>
    );
  }
}

export default MusicProvider;

export const withMusic = C => props => (
  <MusicContext.Consumer>
    {value => <C {...value} {...props} />}
  </MusicContext.Consumer>
);
