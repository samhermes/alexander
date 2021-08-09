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
        const expanded = this.getAttribute('aria-expanded');
        expanded === 'true' ? this.setAttribute('aria-expanded', 'false') : this.setAttribute('aria-expanded', 'true');

        if (expanded === 'true') {
            collapseSection(content)

            accordion.addEventListener('transitionend', function(e) {
                accordion.removeEventListener('transitionend', arguments.callee);
                accordion.classList.remove('is-active');
            });
        } else {
            expandSection(content)
            accordion.classList.add('is-active')
        }
    });
});

const collapseSection = (element) => {
    const sectionHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = '';

    requestAnimationFrame(function() {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        requestAnimationFrame(function() {
            element.style.height = 0 + 'px';
        });
    });
}

const expandSection = (element) => {
    const sectionHeight = element.scrollHeight;
    
    element.style.height = sectionHeight + 'px';
    element.addEventListener('transitionend', function(e) {
        element.removeEventListener('transitionend', arguments.callee);
        element.style.height = 'auto';
    });
}