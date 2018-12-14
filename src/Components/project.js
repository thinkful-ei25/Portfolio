import React from 'react'; 
import createYouTube from 'react-youtube-component'; 
import '../Styles/project.css'; 
import {videoRotateLeft, videoRotateRight} from '../Utils/videoURLContainer'; 

const YouTube = createYouTube(); 

export default class Project extends React.Component{ 
    constructor(props) {
        super(props);
        this.playerVars = {
          autoplay: 0,
          color: 0,
          controls: 1
        };
      }
     
      onReady = (event) => {
        if (this.player) this.player.loadVideoById("LKS1qBV7ESQ"); 
      };
     
      onPlayer = (player) => {
        this.player = player;
      };
     
      onLeftButtonClick = (event) => {
        if (this.player) this.player.loadVideoById(videoRotateLeft());
      };

      onRightButtonClick = (event) => { 
        if (this.player) this.player.loadVideoById(videoRotateRight()); 
      }
     
    render() {
        return (
          <section className="project">
            <YouTube className="youTube"
              height="640"
              width="390"
              videoId="h_D3VFfhvs4"
              playerVars={this.playerVars}
              onStateChange={this.onStateChange}
              onReady={this.onReady}
              onPlayer={this.onPlayer}
            />
            <button className="projectNav left" onClick={this.onRightButtonClick}>Previous Video</button>
            <button className="projectNav right" onClick={this.onLeftButtonClick}>Next Video</button>
          </section>
        );
    }
}