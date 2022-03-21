//Trigger is when ime-wrapper hits the top

console.log("hello");
let observerConfig = {
    root: null,
    rootMargin: "0px"
    // threshold: 0.5
};

const observerFn = (entries, observer) => {
    console.log(...entries);
};

let observer = new IntersectionObserver(observerFn, observerConfig);

const targetElement = document.querySelector(".img-wrapper");
observer.observe(targetElement);

//Stop observing for a target element
// observer.unobserve(targetElement);

//Stop observing for all targets
// observer.disconnect();
