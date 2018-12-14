
const videoArray = ["LKS1qBV7ESQ", "i8MTHqo5mU4", "EWrygtUhy7U", "Z42SIvyWzhM"]; 

export function videoRotateLeft(){ 
    let element = videoArray.shift(); 
    videoArray.push(element); 

    return videoArray[0]; 
}

export function videoRotateRight(){ 
    let element = videoArray.pop(); 
    videoArray.unshift(element); 

    return videoArray[0]; 
}

