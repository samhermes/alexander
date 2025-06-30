/**
 * Component Name: ScrollToTop
 * Version: 1.0.0
 *
 * Handle clicks on scroll to top link, only display after scrolling down.
 *
 * @param {string} selector Class name or ID of scroll to top link element.
 */

export const ScrollToTop = (selector = '.scroll-to-top') => {
    // Get the scroll to top link, using custom selector or default.
    const scrollLink = document.querySelector(selector)

    // If no scroll to top link is found, return.
    if (!scrollLink) {
        return
    }

    // Set up shared variables.
    let scrolling = false

    // Determine if the scroll position is far enough down to display link.
    function handleLinkDisplay() {
        window.scrollY > window.innerHeight
            ? scrollLink.classList.add('is-visible')
            : scrollLink.classList.remove('is-visible')

        scrolling = false
    }

    // Only display link when user has scrolled down.
    window.addEventListener(
        'scroll',
        function () {
            if (!scrolling) {
                scrolling = true

                !window.requestAnimationFrame
                    ? setTimeout(handleLinkDisplay, 250)
                    : window.requestAnimationFrame(handleLinkDisplay)
            }
        }
    )

    // Handle clicks on scroll to top link.
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault()

        document.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}