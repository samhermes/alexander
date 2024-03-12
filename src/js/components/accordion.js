/**
 * Component Name: Accordion
 * Version: 1.0.4
 * 
 * Collapse a content area under a heading.
 * 
 * @param {string} selector Class name or ID of accordion elements.
 */

const Accordion = (selector = '.accordion') => {
    // Get all accordions on page, using custom selector or default.
    const accordions = document.querySelectorAll(selector)

    // If no accordions are found, return.
    if ( !accordions ) {
        return
    }

    // Start up function.
    const init = () => {
        accordions.forEach((accordion, index) => {
            const elements = {
                heading: accordion.querySelector('.accordion-heading > *'),
                content: accordion.querySelector('.accordion-content'),
                headingChildren: accordion.querySelector('.accordion-heading > *').innerHTML
            }
        
            const button = document.createElement('button')
            button.setAttribute('type', 'button')
            button.setAttribute('aria-controls', 'accordion-content-' + index)
            button.setAttribute('id', 'accordion-button-' + index)
            button.setAttribute('aria-expanded', 'false')
            button.innerHTML = elements.headingChildren
            elements.heading.innerHTML = ''
            elements.heading.appendChild(button)
            
            elements.content.setAttribute('id', 'accordion-content-' + index)
            elements.content.setAttribute('aria-labelledby', 'accordion-button-' + index)
            elements.content.setAttribute('role', 'region')
        
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
    }

    // Open the accordion, update heading and content.
    const openAccordion = (accordion, elements) => {
        const contentHeight = elements.content.scrollHeight
        
        elements.content.style.height = contentHeight + 'px'
        elements.content.addEventListener('transitionend', function() {
            elements.content.style.height = 'auto'
        }, { once: true })
    
        accordion.classList.add('is-active')
    }
    
    // Close the accordion, update heading and content.
    const closeAccordion = (accordion, elements) => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
        const contentHeight = elements.content.scrollHeight
        const elementTransition = elements.content.style.transition
        elements.content.style.transition = ''
    
        requestAnimationFrame(() => {
            elements.content.style.height = contentHeight + 'px'
            elements.content.style.transition = elementTransition
            requestAnimationFrame(() => {
                elements.content.style.height = 0 + 'px'
            })
        })
    
        if ( reducedMotion.matches ) {
            // Remove class immediately.
            accordion.classList.remove('is-active')
        } else {
            // Remove class after the transition is over.
            accordion.addEventListener('transitionend', function() {
                accordion.classList.remove('is-active')
            }, { once: true })
        }
    }

    // Start the component.
    init()
}

export default Accordion