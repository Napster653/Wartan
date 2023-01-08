const clan_selectors = Array.from(document.getElementById("clan_header").getElementsByClassName("clan_selector"));
const target_trs = {}
for (i in clan_selectors)
{
    clan_selectors[i].onmouseover = function (e) { highlightThis(e) };
    clan_selectors[i].onmouseout = function () { unHighlightAll() };
    target_trs[clan_selectors[i].src] = []
}
const all_imgs = Array.from(document.getElementsByClassName("clan"))
for (i in all_imgs)
{
    target_trs[all_imgs[i].src].push(all_imgs[i].parentElement.parentElement)
}
for (i in clan_selectors)
{
    clan_selectors[i].nextSibling.innerHTML = target_trs[clan_selectors[i].src].length
}

function highlightThis(e)
{
    e = e || window.event;
    var target = e.target.currentSrc || e.srcElement.currentSrc;
    for (i in target_trs[target])
    {
        target_trs[target][i].style.backgroundColor = "#666666"
    }
}

function unHighlightAll()
{
    for (i in target_trs)
    {
        for (j in target_trs[i])
        {
            target_trs[i][j].style.backgroundColor = ""
        }
    }
}