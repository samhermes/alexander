const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion, index) => {
    const heading = accordion.querySelector('.accordion-heading')
    const content = accordion.querySelector('.accordion-content')
    const headingChildren = accordion.querySelector('.accordion-heading > *')

    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('aria-controls', 'accordion-' + index)
    button.setAttribute('aria-expanded', 'false')
    button.appendChild(headingChildren)
    heading.appendChild(button)
    
    content.setAttribute('aria-controlledby', 'accordion-' + index)

    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded')
        expanded === 'true' ? button.setAttribute('aria-expanded', 'false') : button.setAttribute('aria-expanded', 'true')

        if (expanded === 'true') {
            const sectionHeight = content.scrollHeight
            const elementTransition = content.style.transition
            content.style.transition = ''

            requestAnimationFrame(() => {
                content.style.height = sectionHeight + 'px'
                content.style.transition = elementTransition
                requestAnimationFrame(() => {
                    content.style.height = 0 + 'px'
                })
            })

            accordion.addEventListener('transitionend', function(){
                accordion.removeEventListener('transitionend', arguments.callee)
                accordion.classList.remove('is-active')
            })
        } else {
            const sectionHeight = content.scrollHeight
    
            content.style.height = sectionHeight + 'px'
            content.addEventListener('transitionend', function(){
                content.removeEventListener('transitionend', arguments.callee)
                content.style.height = 'auto'
            })

            accordion.classList.add('is-active')
        }
    })
})