import './index.js';
import '../../../scss/components/_accordion.scss';

export default {
    component: 'alexander-accordion',
    render: ({ heading, content }) => (
        `<alexander-accordion>
            <div class="accordion-heading"><h2>${heading}</h2></div>
            <div class="accordion-content">${content}</div>
        </alexander-accordion>`
    ),
    title: 'Accordion',
};

export const Default = {
    args: {
        heading: 'Test Accordion Heading',
        content: '<p>Test accordion content.</p>'
    }
};