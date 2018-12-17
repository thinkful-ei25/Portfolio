
const videoIds = ["LKS1qBV7ESQ", "i8MTHqo5mU4", "EWrygtUhy7U", "Z42SIvyWzhM"]; 
const videoDescriptions = ["Beat Fighter: A strategic music based mobile game. Where players craft beats and their beats come alive to fight eachother in realtime combat ", 
    "Is a 3D model of a musical toy created in Unity that promotes musical learning. The interface is uniquely and intuitively designed so that all musical relationships are equidistant to each other. Universalis creates different musical pathways for users to explore and guide users to create creative musically aesthetic decisions.", 
    "This project is an experiment and demonstration of how music can be analogous to physical environments. The user is encouraged to explore, change, and contemplate the relationships between the space and the music. Balls collided with the walls and as the user interacts with the balls in different ways, different sonic patterms emerge.",
    "Is a 3D model of a musical toy created in Unity that promotes musical learning. The interface is uniquely and intuitively designed so that all musical relationships are equidistant to each other. Universalis creates different musical pathways for users to explore and guide users to create creative musically aesthetic decisions" 
]

export function videoIdRotateLeft(){ 
    return rotateListLeft(videoIds); 
}

export function videoIdRotateRight(){ 
    return rotateListRight(videoIds); 
}

export function videoDescriptionRotateLeft(){ 
    return rotateListLeft(videoDescriptions); 
}

export function videoDescriptionRotateRight(){ 
    return rotateListRight(videoDescriptions); 
}

function rotateListRight(list){ 
    let element = list.pop(); 
    list.unshift(element); 

    return list[0]; 
}

function rotateListLeft(list){ 
    let element = list.shift(); 
    list.push(element); 

    return list[0]; 
}