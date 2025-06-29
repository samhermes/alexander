/**
 * Component Name: Tabs
 * Version: 1.0.4
 *
 * Divide content areas into tabbed interface.
 *
 * @param {string} selector Class name or ID of tab elements.
 */

export const Tabs = (selector = '.tabs') => {
    // Get all tabs on page, using custom selector or default.
    const tabs = document.querySelectorAll(selector)

    // If no tabs are found, return.
    if ( !tabs ) {
        return
    }

    tabs.forEach((tabContainer) => {
        const tabs = tabContainer.querySelectorAll('[role="tab"]')

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
    })
}