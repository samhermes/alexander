const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion, index) => {
    const elements = {
        heading: accordion.querySelector('.accordion-heading'),
        content: accordion.querySelector('.accordion-content'),
        headingChildren: accordion.querySelector('.accordion-heading > *')
    }

    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('aria-controls', 'accordion-' + index)
    button.setAttribute('aria-expanded', 'false')
    button.appendChild(elements.headingChildren)
    elements.heading.appendChild(button)
    
    elements.content.setAttribute('aria-controlledby', 'accordion-' + index)

    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded')
        expanded === 'true' ? button.setAttribute('aria-expanded', 'false') : button.setAttribute('aria-expanded', 'true')

        if (expanded === 'true') {
            closeAccordion(accordion, elements)
        } else {
            openAccordion(accordion, elements)   
        }
    })
})

const openAccordion = (accordion, elements) => {
    const sectionHeight = elements.content.scrollHeight
    
    elements.content.style.height = sectionHeight + 'px'
    elements.content.addEventListener('transitionend', function(){
        elements.content.removeEventListener('transitionend', arguments.callee)
        elements.content.style.height = 'auto'
    })

    accordion.classList.add('is-active')
}

const closeAccordion = (accordion, elements) => {
    const sectionHeight = elements.content.scrollHeight
    const elementTransition = elements.content.style.transition
    elements.content.style.transition = ''

    requestAnimationFrame(() => {
        elements.content.style.height = sectionHeight + 'px'
        elements.content.style.transition = elementTransition
        requestAnimationFrame(() => {
            elements.content.style.height = 0 + 'px'
        })
    })

    accordion.addEventListener('transitionend', function(){
        accordion.removeEventListener('transitionend', arguments.callee)
        accordion.classList.remove('is-active')
    })
}