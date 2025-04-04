// Die Adresse des Awtrix-Panels
const baseURL = "http://10.37.241.8/api/";

function changeBackgroundToRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function changeCardsToRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    for (let elem of document.getElementsByClassName("main-card")) {
        elem.style.backgroundColor = `#${randomColor}`;
    }
}
x
function changeImageToRandomImage() {
    const imagesList = [
        './bilder/cloudy_view.jpg',
        './bilder/forest_light.jpg',
        './bilder/red_road.jpg',
        './bilder/scenic_canal.jpg',
        './bilder/peaceful_lake.jpg',
    ];
    document.getElementById("Bild").style.backgroundImage = `url(${imagesList[Math.floor(Math.random() * imagesList.length)]})`;
}

function sendAwtrixEffect() {
    const payload = {
        "effect": "ColorWaves",
    };
    sendAwtrixPostRequest("notify", payload);
}

// Diese Funktion nicht in einem Button verwenden, da sie Argumente erwartet.
function sendAwtrixPostRequest(apiMethod, payload) {
    url = baseURL + apiMethod;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => print.error('Error:', error));
}



function ToRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("lol1").style.backgroundColor = `#${randomColor}`;
}