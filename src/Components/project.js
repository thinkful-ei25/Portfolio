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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TriangleArrow-Left.svg/2000px-TriangleArrow-Left.svg.png" 
              alt="left arrorw" 
              className="left projectNav"
              onClick={this.onLeftButtonClick}>
            </input>
            <input 
              type="image" 
              alt="right arrow"
              src="http://www.launchd.info/img/NSRightFacingTriangleTemplate.png"
              className="right projectNav"
              onClick={this.onRightButtonClick}>
            </input>
          </section>
        );
    }
}