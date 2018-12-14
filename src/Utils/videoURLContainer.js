
const videoArray = ["LKS1qBV7ESQ", "i8MTHqo5mU4", "EWrygtUhy7U", "Z42SIvyWzhM"]; 

export function videoRotateLeft(){ 
    let element = videoArray.shift(); 
    videoArray.push(element); 

    console.log('videoArray left', videoArray); 
    return videoArray[0]; 
}

export function videoRotateRight(){ 
    let element = videoArray.pop(); 
    videoArray.unshift(element); 

    console.log('videoArray right', videoArray); 
    return videoArray[0]; 
}


/*
    Rotate right
    A -> B -> C -> D

    D A B C
    C D A B 

    Rotate Left 
    A -> B -> C -> D

    B C D A
    C D A B 

*/

