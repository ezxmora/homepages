function togglePopup() {
    const popup = document.querySelector('#popup');
    popup.style.display = "none";
}

function clearInput() {
    return document.getElementById('searchBar').value = "";
}

function youtube(searchQuery) {
    window.open(encodeURI(`https://www.youtube.com/results?search_query=${searchQuery.join("+")}`));
}

function google(searchQuery) {
    window.open(encodeURI(`https://www.google.com/search?q=${searchQuery.join("+")}`));
}

function wikipediaResults(results) {
    window.open(encodeURI(`https://es.wikipedia.org/wiki/${results[0].title}`));
}

function wikipedia(searchQuery) {
    const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            wikipediaResults(data.query.search);
        })
        .catch(() => document.getElementById('popup').style.display = "block");
}

function handleSubmit(event) {
    event.preventDefault();
    const input = document.querySelector('.searchForm input').value;
    const searchQuery = input.trim().split(" ");
    switch (searchQuery[0]) {
        case "/yt":
            searchQuery.shift();
            youtube(searchQuery);
            clearInput();
            break;

        case "/w":
            searchQuery.shift();
            wikipedia(searchQuery);
            clearInput();
            break;

        default:
            google(searchQuery);
            clearInput();
            break;
    }
}

const form = document.querySelector('.searchForm');
const popup = document.querySelector('#popup');

form.addEventListener('submit', handleSubmit);
popup.addEventListener('click', togglePopup);
