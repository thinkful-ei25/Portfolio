import React from 'react'; 
import createYouTube from 'react-youtube-component'; 
import '../Styles/project.css'; 
import {
  videoIdRotateLeft, 
  videoIdRotateRight, 
  videoDescriptionRotateLeft, 
  videoDescriptionRotateRight
} from '../Utils/videoURLContainer'; 

const YouTube = createYouTube(); 

export default class Project extends React.Component{ 
    constructor(props) {
        super(props);

        this.state = { 
          playerVars : { 
            autoplay: 0, 
            color: 0, 
            controls: 1
          }, 
          videoId : "LKS1qBV7ESQ", 
          description : "Beat Fighter: A strategic music based mobile game. Where players craft beats and their beats come alive to fight eachother in realtime combat ", 
        }
      }
     
      onReady = (event) => {
        if (this.player) this.player.loadVideoById(this.state.videoId); 
      };
     
      onPlayer = (player) => {
        this.player = player;
      };
     
      onLeftButtonClick = (event) => {
        if (this.player) { 
          this.setState({videoId: videoIdRotateLeft(), description: videoDescriptionRotateLeft()}, 
            () => this.player.loadVideoById(this.state.videoId));
        }
      };

      onRightButtonClick = (event) => { 
        if (this.player) { 
          this.setState({videoId: videoIdRotateRight(), description: videoDescriptionRotateRight()}, 
            () => this.player.loadVideoById(this.state.videoId)); 
        }
      }
     
    render() {
        return (
          <section className="project">
            <YouTube
              videoId="h_D3VFfhvs4"
              playerVars={this.state.playerVars}
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
            <p className="description">{this.state.description}</p>
          </section>
        );
    }
}