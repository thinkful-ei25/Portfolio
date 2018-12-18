
const videoIds = ["LKS1qBV7ESQ", "i8MTHqo5mU4", "EWrygtUhy7U", "Z42SIvyWzhM"]; 



export function videoRotateLeft(){ 
    return shiftListLeft(videoIds)
}

export function videoRotateRight(){ 
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



