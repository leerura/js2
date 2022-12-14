function onSucess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in " +lat, lon);
}

function onFailed() {
    alert("We can't get to know where you are!!")
}

navigator.geolocation.getCurrentPosition(onSucess, onFailed)

