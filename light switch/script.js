const body = document.body;
const switchButton = document.getElementById("switch");
const clickSound = document.getElementById("clickSound");
let isDarkTheme = false;

switchButton.addEventListener("click", function () {

    clickSound.play();

    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        switchButton.src = "OFF.png";
        switchButton.alt = "Interruptor Dark";
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        switchButton.src = "ON.png";
        switchButton.alt = "Interruptor Light";
    }
});
