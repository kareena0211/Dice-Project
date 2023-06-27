

document.getElementById("start").addEventListener("click", function() {
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("p1").src = `image/${p1}.png`;
    document.getElementById("p2").src = `image/${p2}.png`;
    if (p1 > p2)
      document.querySelector("h1").textContent = "🥳 Player 1 wins 🥳";
    else if (p2 > p1)
      document.querySelector("h1").textContent = "🤩 Player 2 wins 🤩";
    else
      document.querySelector("h1").textContent = "🤗 Draw 🤗";
  
    sound();
  });
  
  function sound() {
    let audio = new Audio("music.mp3");
    audio.play();
  }
  