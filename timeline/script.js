const timelineWrapper = document.querySelector(".timeline");
const reverseBtn = document.querySelector(".flip");

function tog_timeline() {
    const isReversed = reverseBtn.classList.contains("click");

    if (!isReversed) {
        timelineWrapper.classList.add("reverse");
        reverseBtn.classList.add("click");
    } else {
        timelineWrapper.classList.remove("reverse");
        reverseBtn.classList.remove("click");
    }
}
