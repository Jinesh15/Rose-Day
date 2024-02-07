function restore() {
    document.getElementById("fallingpetal").style.animation = "bloom4 3s ease-in-out, glowing 2.5s ease-in-out infinite";
    document.getElementById("roseMessage").innerText = "";
}

function sendRose() {
    document.getElementById("fallingpetal").style.animation = "bloom2 10s ease-in-out";
    const messages = [
        "A red rose for eternal love!",
        "You're the greatest gift for me",
        "I love you, forever",
        "You are all I'll ever need",
        "Forever & Always",
        "You're awesome, I'm lucky",
        "I love you every second",
        "I’m yours. No Returns"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];
    document.getElementById("roseMessage").innerText = selectedMessage;
    setTimeout(restore,9000)
}
