var menuRevealButton = document.querySelector("#menuRevealButton");
console.log(menuRevealButton);
menuRevealButton.addEventListener("click", function() {
  var menuButtons = document.querySelectorAll(".menuButton");
  menuButtons.forEach(menuButton => {
    if (menuButton.style.display === "none") {
      menuButton.style.display = "inline";
    } else {
      menuButton.style.display = "none";
    }
  });
});
