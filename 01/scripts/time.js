var update;
(update = function () {
    document.getElementById('time').innerHTML = moment().format("HH[:]mm[:]ss");
})();
setInterval(update, 1000);
