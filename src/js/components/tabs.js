tabs = document.querySelectorAll('.tabs');

tabs.forEach((tab, index) => {
    const tabs = tab.querySelectorAll('[role="tab"]');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tabPanelID = tab.getAttribute('aria-controls');
            const tabPanel = document.querySelector('#' + tabPanelID.toString());

            const allTabs = document.querySelectorAll('[role="tabpanel"]');
            allTabs.forEach((tab) => {
                tab.setAttribute('aria-hidden', 'true');
            })
            tabPanel.setAttribute('aria-hidden', 'false');
        })
    })
    // const heading = accordion.querySelector('.accordion-heading')
    // const content = accordion.querySelector('.accordion-content')
    // const headingChildren = accordion.querySelector('.accordion-heading > *');

    // const button = document.createElement('button')
    // button.setAttribute('type', 'button')
    // button.setAttribute('aria-controls', 'accordion-' + index)
    // button.setAttribute('aria-expanded', 'false')
    // button.appendChild(headingChildren)

    // heading.appendChild(button)
    
    // content.setAttribute('aria-controlledby', 'accordion-' + index)

    // button.addEventListener('click', function() {
    //     accordion.classList.toggle('is-active')
    //     this.setAttribute('aria-expanded', 'true')
    // });
});