/**
 * Component Name: Video
 * Version: 1.1.0
 *
 * Add custom controls to a video element.
 */

export class Video extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const videoElement = this.querySelector('video')
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
    }
}

customElements.define('alexander-video', Video);