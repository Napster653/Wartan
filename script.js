const allTds = Array.from(document.getElementsByTagName("td"));
for (i in allTds)
{
    if (allTds[i].matches("table tr td table tr td") && !allTds[i].matches(".disabled tr td"))
    {
        allTds[i].onmouseover = function (e) { highlightThis(e) };
        allTds[i].onmouseout = function () { unHighlightAll() };
    }
}

function highlightThis(e)
{
    e = e || window.event;
    var target = e.target || e.srcElement;

    var malla;

    if (target.innerHTML.includes("PRC343-"))
    {
        for (let i = 0; i < allTds.length; i++)
        {
            if (allTds[i].innerHTML == target.innerHTML && !allTds[i].matches(".disabled tr td"))
            {
                allTds[i].style.backgroundColor = "#E1BE6A";
                allTds[i].parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "#E1BE6A";
            }
        }
    }
    else if (target.innerHTML.includes("PRC117-") || target.innerHTML.includes("PRC152-"))
    {
        malla = target.innerHTML.replace("PRC152-", "PRC117-");
        for (let i = 0; i < allTds.length; i++)
        {
            if (allTds[i].innerHTML == malla && !allTds[i].matches(".disabled tr td"))
            {
                allTds[i].style.backgroundColor = "#40B0A6";
                allTds[i].parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "#40B0A6";
            }
        }

        malla = target.innerHTML.replace("PRC117-", "PRC152-");
        for (let i = 0; i < allTds.length; i++)
        {
            if (allTds[i].innerHTML == malla && !allTds[i].matches(".disabled tr td"))
            {
                allTds[i].style.backgroundColor = "#40B0A6";
                allTds[i].parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "#40B0A6";
            }
        }
    }

}

function unHighlightAll()
{
    for (let i = 0; i < allTds.length; i++)
    {
        allTds[i].style.backgroundColor = "";
    }
}