import React from 'react'; 
import YouTube from 'react-youtube'; 
import '../Styles/project.css'; 

export default class Project extends React.Component{ 

    render(){
        return (
            <section className="project">
                <YouTube className="youTube" 
                    videoId="rr6f26I2cBI"          
                ></YouTube>
                <input 
                    type="image" 
                    src="https://i.guim.co.uk/img/media/a6b497e9ff1b9f296ee879d3ec7d175cda4f5866/177_762_3472_4340/master/3472.jpg?width=300&quality=85&auto=format&fit=max&s=29fae83eea77fc46008cb26ee15bbcd6" 
                    alt="left arrorw" 
                    className="left projectNav"
                    onClick={() => console.log('cheese')}>
                </input>
                <input 
                    type="image" 
                    src="https://i.guim.co.uk/img/media/a6b497e9ff1b9f296ee879d3ec7d175cda4f5866/177_762_3472_4340/master/3472.jpg?width=300&quality=85&auto=format&fit=max&s=29fae83eea77fc46008cb26ee15bbcd6"
                    className="right projectNav"
                    onClick={() => console.log('cheese')}>
                </input>
            </section>
        ); 
    }
}