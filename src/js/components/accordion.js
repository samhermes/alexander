const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion, index) => {
    const heading = accordion.querySelector('.accordion-heading')
    const content = accordion.querySelector('.accordion-content')
    const headingChildren = accordion.querySelector('.accordion-heading > *');

    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('aria-controls', 'accordion-' + index)
    button.setAttribute('aria-expanded', 'false')
    button.appendChild(headingChildren)

    heading.appendChild(button)
    
    content.setAttribute('aria-controlledby', 'accordion-' + index)

    button.addEventListener('click', function() {
        accordion.classList.toggle('is-active')
        this.setAttribute('aria-expanded', 'true')
    });
});