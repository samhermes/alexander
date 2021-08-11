const tabs = document.querySelectorAll('.tabs')

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