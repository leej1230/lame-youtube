const thumbnails = document.querySelectorAll("ytd-thumbnail");

if (thumbnails) {
    Array.prototype.forEach.call(thumbnails, (child) => {
        child.parentNode.removeChild(child)
    })
}