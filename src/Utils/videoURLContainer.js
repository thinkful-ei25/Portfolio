
const videoArray = ["LKS1qBV7ESQ", "i8MTHqo5mU4", "EWrygtUhy7U", "Z42SIvyWzhM"]; 

export default function videoRotate(){ 
    let element = videoArray.shift(); 
    videoArray.push(element); 

    return videoArray[0]; 
}
