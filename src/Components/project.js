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
            </section>
        ); 
    }
}