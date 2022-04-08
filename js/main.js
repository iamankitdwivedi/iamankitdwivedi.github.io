const main = document.querySelector("main");
const welcome = document.querySelectorAll(".welcome");
let welcomeText = "";
console.log(welcome);
for (let i = 0; i < welcome.length; i++)
{
    welcomeText += welcome[i].textContent + " ";
}
welcomeText = welcomeText.trimEnd();
let splitText = welcomeText.split(" ");
welcome[0].textContent = "";
welcome[1].textContent = "";

for (let i = 0; i < splitText.length; i++)
{
    if (i<3)
    {
        welcome[0].innerHTML += "<span>"+splitText[i]+"</span> ";
    }else{
        if (splitText[i] == "Creative")
        {
            welcome[1].innerHTML += "<span class='creative'>"+splitText[i]+"</span> ";
        }else{
            welcome[1].innerHTML += "<span>"+splitText[i]+"</span> ";
        }
    }
}

let words = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = main.querySelectorAll("span")[words];
    span.classList.add("entry");
    words++;
    if (words === 5)
    {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
