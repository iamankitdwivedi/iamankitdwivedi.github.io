var area = document.querySelector(".area");

var doc = document.querySelector(".reader");
let numberOfBlogs = thumbnails.length;
for (let i = 0; i < numberOfBlogs; i++)
{
    var tile = document.createElement("div");
    tile.className = "tile";
    tile.setAttribute("onClick","read(this)")
    var date = document.createElement("div");
    date.className = "date";
    date.innerHTML = thumbnails[i].date;
    tile.appendChild(date);
    var title = document.createElement("div");
    title.className = "title";
    title.innerHTML = thumbnails[i].title;
    tile.appendChild(title);
    var innerContent = document.createElement("div");
    innerContent.className = "innerContent";
    if ((thumbnails[i].textContent).length < 175)
    {
        innerContent.innerHTML = (thumbnails[i].textContent);
    }else{
        innerContent.innerHTML = (thumbnails[i].textContent).substring(0, 175) + "...";
    }
    tile.appendChild(innerContent);
    var mycontent = document.createElement("div");
    mycontent.className = "hiddenText";
    mycontent.style.display = "none";
    mycontent.innerHTML = thumbnails[i].textContent;
    tile.appendChild(mycontent);
    area.appendChild(tile);
}




let words = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const tiles = document.querySelectorAll(".tile")[words];
    tiles.classList.add("entry");
    words++;
    if (words === numberOfBlogs)
    {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}


function read(blog)
{
    window.location='#top';
    area.style.display = "none";
    doc.style.display = "unset";
    var dates = blog.querySelector(".date");
    dates.innerHTML = '<img src="../images/arrow_back_black_24dp.svg" style="filter: invert(100%) sepia(100%) saturate(28%) hue-rotate(116deg) brightness(108%) contrast(108%); cursor: pointer;"     alt="" onclick="goBack()">&nbsp;&nbsp;' + dates.innerHTML;
    doc.appendChild(dates);
    doc.appendChild(blog.querySelector(".title"));
    var text = document.createElement("div");
    text.textContent = (blog.querySelector(".hiddenText")).textContent;
    text.className = "hiddenText";
    doc.appendChild(text);
}

function goBack()
{
    location.reload();
}