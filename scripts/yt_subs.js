const thumbnails = document.querySelectorAll("ytd-thumbnail");
alert("Running");
alert(thumbnails.length);

function removeThumbnail() {
    const thumbnails = document.querySelectorAll("ytd-thumbnail");
    if (thumbnails) {
        thumbnails.forEach((thumbnail) => {
            thumbnail.remove();
        })
    }
}

var observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            removeThumbnail();
        }
    })
})

removeThumbnail();
window.scrollTo(0, 0);
const yt = document.getElementById("contents");
observer.observe(yt, {
    childList: true
});