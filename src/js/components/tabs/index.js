/**
 * Component Name: Tabs
 * Version: 1.1.0
 *
 * Divide content areas into tabbed interface.
 */

export class Tabs extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const tabs = this.querySelectorAll('[role="tab"]')

        tabs.forEach((tab) => {
            tab.addEventListener('click', (e) => {
                e.preventDefault()

                tabs.forEach((tab) => {
                    tab.setAttribute('aria-selected', 'false')
                })
                tab.setAttribute('aria-selected', 'true')

                const tabPanelID = tab.getAttribute('aria-controls')
                const tabPanel = tabContainer.querySelector('#' + tabPanelID.toString())
                const allTabPanels = tabContainer.querySelectorAll('[role="tabpanel"]')

                allTabPanels.forEach((tab) => {
                    tab.setAttribute('aria-hidden', 'true')
                })
                tabPanel.setAttribute('aria-hidden', 'false')
            })
        })
    }
}

customElements.define('alexander-tabs', Tabs);