import React from 'react'; 
import createYouTube from 'react-youtube-component'; 
import '../Styles/project.css'; 
import {
  videoIdRotateLeft, 
  videoIdRotateRight, 
  videoTitleRotateLeft, 
  videoTitleRotateRight, 
  videoDescriptionRotateLeft, 
  videoDescriptionRotateRight} from '../Utils/videoURLContainer'; 

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
          id: "LKS1qBV7ESQ", 
          projectTitle: "BeatFighter", 
          projectDescription: "A game where players craft beats that come to life for competition"
        }
        
      }
     
      onReady = (event) => {
        if (this.player) this.player.loadVideoById(this.state.id); 
      };
     
      onPlayer = (player) => {
        this.player = player;
      };
     
      onLeftButtonClick = () => {
        this.setState({
          id : videoIdRotateLeft(), 
          projectTitle : videoTitleRotateLeft(), 
          projectDescription : videoDescriptionRotateLeft()}, 
            () => this.player.loadVideoById(this.state.id)); 
      };

      onRightButtonClick = () => { 
        this.setState({
          id: videoIdRotateRight(), 
          projectTitle: videoTitleRotateRight(),
          projectDescription : videoDescriptionRotateRight()},  
            () => this.player.loadVideoById(this.state.id)); 
      }

      onAboutMeButtonClick = () => { 
        console.log('ABOUT ME')
      }

      onContactMeButtonClick = () => { 
        console.log('CONTACT ME')
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
           {/* <input 
              type="image" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TriangleArrow-Left.svg/2000px-TriangleArrow-Left.svg.png" 
              alt="left arrorw" 
              className="left button projectNav"
              onClick={this.onLeftButtonClick}>
            </input>
            <input 
              type="image" 
              alt="right arrow"
              src="http://www.launchd.info/img/NSRightFacingTriangleTemplate.png"
              className="right button projectNav"
              onClick={this.onRightButtonClick}>
            </input>
            <input 
              type="image"
              src="https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-512.png"
              className="top button"
              onClick={this.onAboutMeButtonClick}
              alt="About Me"
            ></input>
            <input
              type="image"
              src="https://cdn3.iconfinder.com/data/icons/network-communication-vol-2-2/48/96-512.png"
              className="bottom button"
              onClick={this.onContactMeButtonClick}
              alt="Contact Me"
            >
            </input>
            <p><b>{this.state.projectTitle}: </b>{this.state.projectDescription}</p> */}
          </section>
        );
    }
}