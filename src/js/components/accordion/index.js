/**
 * Component Name: Accordion
 * Version: 1.1.0
 *
 * Collapse a content area under a heading.
 */

export class Accordion extends HTMLElement {
    constructor() {
        super();
    }

    // Open the accordion, update heading and content.
    open(accordion, elements) {
        const contentHeight = elements.content.scrollHeight;

        elements.content.style.height = contentHeight + 'px';
        elements.content.addEventListener('transitionend', function () {
            elements.content.style.height = 'auto';
        }, { once: true });

        accordion.classList.add('is-active');
    }

    // Close the accordion, update heading and content.
    close(accordion, elements) {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const contentHeight = elements.content.scrollHeight;
        const elementTransition = elements.content.style.transition;
        elements.content.style.transition = '';

        requestAnimationFrame(() => {
            elements.content.style.height = contentHeight + 'px';
            elements.content.style.transition = elementTransition;
            requestAnimationFrame(() => {
                elements.content.style.height = 0 + 'px';
            })
        })

        if (reducedMotion.matches) {
            // Remove class immediately.
            accordion.classList.remove('is-active');
        } else {
            // Remove class after the transition is over.
            accordion.addEventListener('transitionend', function () {
                accordion.classList.remove('is-active');
            }, { once: true });
        }
    }

    connectedCallback() {
        const elements = {
            heading: this.querySelector('.accordion-heading > *'),
            content: this.querySelector('.accordion-content'),
            headingChildren: this.querySelector('.accordion-heading > *').innerHTML
        };

        // Set active class so that we can apply styles if JavaScript is running
        this.classList.add('is-accordion');

        const button = document.createElement('button');
        let index = Math.random().toString(16).slice(2);
        button.setAttribute('type', 'button');
        button.setAttribute('aria-controls', 'accordion-content-' + index);
        button.setAttribute('id', 'accordion-button-' + index);
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = elements.headingChildren;
        elements.heading.innerHTML = '';
        elements.heading.appendChild(button);

        elements.content.setAttribute('id', 'accordion-content-' + index);
        elements.content.setAttribute('aria-labelledby', 'accordion-button-' + index);
        elements.content.setAttribute('role', 'region');

        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded');
            expanded === 'true' ? button.setAttribute('aria-expanded', 'false') : button.setAttribute('aria-expanded', 'true');

            if (expanded === 'true') {
                this.close(this, elements);
            } else {
                this.open(this, elements);
            }
        });
    }
}

customElements.define('alexander-accordion', Accordion);