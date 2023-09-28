const modifiers = {
    tabItemActive: "tabs__item--active",
    tabPanelItemActive: "tabspanels__item--active",
    accordionItemOpen: "accordion__item--open"
}


const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabsPanel = document.querySelectorAll(".tabspanels__item");

const elsAccordionItemToggler = document.querySelectorAll(".accordion__item--toggler");
const elsAccordionItem = document.querySelectorAll(".accordion__item");



function deactivateTabsItem () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove(modifiers.tabItemActive);
    });
}

function deactivateTabsPanel () {
    elsTabsPanel.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove(modifiers.tabPanelItemActive);
    });
}

function closeAccordionItems () {
    elsAccordionItem.forEach(function (elAccordionItem) {
        elAccordionItem.classList.remove(modifiers.accordionItemOpen)
    });
}

elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener("click", function (evt) {
        // Prevent site move
        evt.preventDefault();

        // Remove active class from tabs__item elements
        deactivateTabsItem();


        // Add active class to current tabs__item
        elTabLink.parentElement.classList.add(modifiers.tabItemActive);


        // Remove active class from tabs__panel elements
        deactivateTabsPanel();

        // Show active tab panel
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add(modifiers.tabPanelItemActive);
        
    });
});

elsAccordionItemToggler.forEach(function (elAccordionItemTogggler) {
    elAccordionItemTogggler.addEventListener("click", function () {
        closeAccordionItems();

        elAccordionItemTogggler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen);
    })
})