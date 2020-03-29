function fixScale(doc) {
    var addEvent = 'addEventListener',
        type     = 'gesturestart',
        qsa      = 'querySelectorAll',
        scales   = [1, 1],
        meta     = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
        meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
        doc.removeEventListener(type, fix, true);
    }

    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [.25, 1.6];
        doc[addEvent](type, fix, true);
    }

}

// show or hide element by selector
function showOrHideEl(selector) {
    var el = document.querySelector(selector);
    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
	el.style.display = "block";
    }
}
