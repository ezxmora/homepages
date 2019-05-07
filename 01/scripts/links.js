const urls = [
    ["Youtube", "https://www.youtube.com/"],
    ["Facebook", "https://www.facebook.com/"],
    ["Twitter", "https://twitter.com/"],
    //["WhatsApp", "https://web.whatsapp.com/"],
    ["Twitch", "https://www.twitch.tv/directory/following"],
    //["Warframe Market", "http://warframe.market/"],
    //["WarFarm", "http://war.farm/"],
    //["Warframe Tier", "https://www.cephalonwannab.com/"],
    //["Warframe Alerts", "https://deathsnacks.com/wf/"],
    ["PoE Forum", "https://www.pathofexile.com/forum"],
    ["PoE Trade", "http://poe.trade/"],
    ["PoE Ninja", "http://poe.ninja/"],
    ["4Chan", "http://4chan.org/"],
    ["Reddit", "http://reddit.com/"]
];

const linkContainer = document.getElementById('linkContainer');

function drawLinks() {
    urls.sort();
    for (let i = 0; i < urls.length; i++) {
        linkContainer.innerHTML += `<a class="link" href="${urls[i][1]}">${urls[i][0]}</a>\n`
    }
}

drawLinks();

const links = document.getElementsByClassName('link');
for (let i = 0; i < links.length; i++) {
    links[i].onmouseover = function(e) {
        const colorRandom = '#'+Math.random().toString(16).slice(-6);
        this.style['color'] = ""+colorRandom;
    }

    links[i].onmouseout = function(e) {
        this.style['color'] = "#222";
    }
}
