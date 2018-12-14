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
            <YouTube
              videoId="h_D3VFfhvs4"
              playerVars={this.playerVars}
              onStateChange={this.onStateChange}
              onReady={this.onReady}
              onPlayer={this.onPlayer}
            />
           <input 
              type="image" 
              src="https://i.guim.co.uk/img/media/a6b497e9ff1b9f296ee879d3ec7d175cda4f5866/177_762_3472_4340/master/3472.jpg?width=300&quality=85&auto=format&fit=max&s=29fae83eea77fc46008cb26ee15bbcd6" 
              alt="left arrorw" 
              className="left projectNav"
              onClick={this.onLeftButtonClick}>
            </input>
            <input 
              type="image" 
              src="https://i.guim.co.uk/img/media/a6b497e9ff1b9f296ee879d3ec7d175cda4f5866/177_762_3472_4340/master/3472.jpg?width=300&quality=85&auto=format&fit=max&s=29fae83eea77fc46008cb26ee15bbcd6"
              className="right projectNav"
              onClick={this.onLeftButtonClick}>
            </input>
          </section>
        );
    }
}