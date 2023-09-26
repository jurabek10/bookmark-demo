const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabsPanel = document.querySelectorAll(".tabspanels__item");


function deactivateTabsItem () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove("tabs__item--active");
    });
}

function deactivateTabsPanel () {
    elsTabsPanel.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove("tabspanels__item--active");
    });
}

elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener("click", function (evt) {
        // Prevent site move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactivateTabsItem();


        // Add active class to current tabs__item
        elTabLink.parentElement.classList.add("tabs__item--active");


        // Remove active class from tabs__panel elements
        deactivateTabsPanel();

        // Show active tab panel
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add("tabspanels__item--active");
        
    });
})