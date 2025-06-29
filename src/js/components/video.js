/**
 * Component Name: Videos
 * Version: 1.0.0
 *
 * Add custom controls to a video element.
 *
 * @param {string} selector Class name or ID of video element container.
 */

export const Videos = (selector = '.video') => {
    // Get all video elements on page, using custom selector or default.
    const videos = document.querySelectorAll(selector)

    // If no video elements are found, return.
    if (!videos) {
        return
    }

    videos.forEach((video) => {
        const videoElement = video.querySelectorAll('video')
        const controlContainer = document.createElement('div')
        const playButton = document.createElement('button')
        const pauseButton = document.createElement('button')

        controlContainer.classList.add('video-controls')

        playButton.setAttribute('type', 'button')
        playButton.innerHTML = '<span class="screen-reader-text">Play</span>'
        playButton.classList.add('control-play')
        playButton.classList.add('hidden')

        pauseButton.setAttribute('type', 'button')
        pauseButton.innerHTML = '<span class="screen-reader-text">Pause</span>'
        pauseButton.classList.add('control-pause')

        controlContainer.appendChild(playButton)
        controlContainer.appendChild(pauseButton)
        videoElement.after(controlContainer)

        playButton.addEventListener('click', () => {
            videoElement.play()
            playButton.classList.add('hidden')
            pauseButton.classList.remove('hidden')
            pauseButton.focus()
        })

        pauseButton.addEventListener('click', () => {
            videoElement.pause()
            pauseButton.classList.add('hidden')
            playButton.classList.remove('hidden')
            playButton.focus()
        })
    })
}