// bounce.js
function bounceWindow(win) {
  let x = 100, y = 100;
  let dx = 20, dy = 20;
  const interval = setInterval(() => {
    try {
      win.moveTo(x, y);
      x += dx;
      y += dy;
      if (x <= 0 || x + win.outerWidth >= screen.availWidth) dx = -dx;
      if (y <= 0 || y + win.outerHeight >= screen.availHeight) dy = -dy;
    } catch (e) {
      clearInterval(interval);
    }
  }, 50);
}

for (let i = 0; i < 5; i++) {
  const newWin = window.open("", "_blank", "width=300,height=200");
  if (newWin) {
    newWin.document.write(`<h1 style="text-align:center;">I'm bouncing!</h1>`);
    bounceWindow(newWin);
  } else {
    alert("Pop-up blocked! Please allow pop-ups for this site.");
    break;
  }
}
