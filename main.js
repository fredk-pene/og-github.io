// We select the element we want to target
let target = document.getElementById('target')
let scrollToTopBtn = document.querySelector('.scrollToTopBtn')
let rootElement = document.documentElement
// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add('showBtn')
    } else {
      // Hide button
      scrollToTopBtn.classList.remove('showBtn')
    }
  })
}
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
scrollToTopBtn.addEventListener('click', scrollToTop)
let observer = new IntersectionObserver(callback)
// Finally start observing the target element
observer.observe(target)
