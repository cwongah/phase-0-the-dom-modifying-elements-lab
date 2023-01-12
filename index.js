/*const main = document.getElementById("main")*/

main.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory"

newHeader.textContent = "Chris is the champion"

document.body.append(newHeader);
/* why does this have to be at the end? */