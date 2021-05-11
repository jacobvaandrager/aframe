

// changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
    rotationSpeed = rotationSpeed + 0.01

    if (rotationSpeed >= 0.2) {

        rotationSpeed = 0.01

    }
    myOtherBox.object3D.rotation.x += rotationSpeed;
    myOtherBox.object3D.rotation.y += rotationSpeed;
    console.log(rotationSpeed);
    
}

setInterval(spin, 16); //equivalent to 60 fps