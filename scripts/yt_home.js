const thumbnails = document.querySelectorAll("ytd-thumbnail");

function removeThumbnail() {
    const thumbnails = document.querySelectorAll("ytd-thumbnail");

    if (thumbnails) {
        Array.prototype.forEach.call(thumbnails, (child) => {
            child.parentNode.removeChild(child)
        })
    }
}

var observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            // console.log("list updated");
            removeThumbnail();
        }
    })
})

removeThumbnail();
window.scrollTo(0, 0);
const yt = document.querySelector("#contents");
observer.observe(yt, {
    childList: true
});