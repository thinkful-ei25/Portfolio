
const videoIds = ["LKS1qBV7ESQ", "i8MTHqo5mU4", "EWrygtUhy7U", "Z42SIvyWzhM"]; 
const videoTitles = ["BeatFighter", "Terpstra", "Teradiddle", "Universallis"]; 
const videoDescription = [
    "A game where players craft beats that come to life for competition", 
    "A symetrical keyboard that is designed to help musicians learn music through geometrical association", 
    "A musical physics simulation", 
    "A three dimensional seuquencer"
]

export function videoDescriptionRotateLeft() { 
    return shiftListLeft(videoDescription)
}

export function videoDescriptionRotateRight() { 
    return shiftListRight(videoDescription)
}
export function videoTitleRotateLeft() { 
    return shiftListLeft(videoTitles)
}

export function videoTitleRotateRight() { 
    return shiftListRight(videoTitles)
}

export function videoIdRotateLeft(){ 
    return shiftListLeft(videoIds)
}

export function videoIdRotateRight(){ 
    return shiftListRight(videoIds)
}

function shiftListLeft(list){ 
    let element = list.shift(); 
    list.push(element); 
    return list[0]; 
}

function shiftListRight(list){ 
    let element = list.pop(); 
    list.unshift(element); 
    return list[0]
}



