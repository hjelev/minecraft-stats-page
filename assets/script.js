// Array of background images
const backgroundImages = [
    'img/background-1.jpeg',
    'img/background-2.jpeg',
    'img/background-3.jpeg',
    'img/background-4.jpeg',
    'img/background-5.jpeg',
    'img/background-6.jpeg',
    'img/background-7.jpeg',
    'img/background-8.jpeg',
];

// Randomly select a background image
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
const randomBackground = backgroundImages[randomIndex];

// Set the background image
document.body.style.backgroundImage = `url('${randomBackground}')`;

function initServerData(serverIp, serverPort) {
    const serverIpElement = document.getElementById('server-ip');
    serverIpElement.innerHTML = serverIp;
    fetch(`https://mcapi.us/server/status?ip=${serverIp}&port=${serverPort}`)
        .then(response => response.json())
        .then(data => handleServerStatus(data));

    function handleServerStatus(data) {
        if (data.status === 'error') {
            console.error(data.error);
            return false;
        }
        const motd = document.getElementById("motd");
        motd.innerHTML = data.motd;

        const playerCounter = document.getElementById("player-count");
        playerCounter.innerHTML = `${data.players.now} Players Online`;

        const serverVersion = document.getElementById("server-version");
        serverVersion.innerHTML = `Server Version: ${data.server.name}`;

        const logo = document.getElementById("server-icon");
        logo.src = data.favicon;

        // Display usernames
        const usernamesContainer = document.getElementById("usernames-container");

        // Check if the container exists before manipulating it
        if (usernamesContainer) {
            const usernamesList = document.createElement("ul");

            if (data.players.sample && data.players.sample.length > 0) {
                data.players.sample.forEach(player => {
                    const listItem = document.createElement("li");
                    listItem.textContent = player.name;
                    usernamesList.appendChild(listItem);
                });
            } else {
                const listItem = document.createElement("li");
                listItem.textContent = "server is sleeping ...";
                usernamesList.appendChild(listItem);
            }

            // Clear previous usernames
            while (usernamesContainer.firstChild) {
                usernamesContainer.removeChild(usernamesContainer.firstChild);
            }

            usernamesContainer.appendChild(usernamesList);
        } else {
            console.error("Usernames container not found in the HTML.");
        }
    }
}

initServerData("mc.masoko.net", "25565");
