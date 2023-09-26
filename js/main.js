const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabsPanel = document.querySelectorAll(".tabspanels__item");

const elsAccordionItemToggler = document.querySelectorAll(".accordion__item--toggler");
const elsAccordionItem = document.querySelectorAll(".accordion__item");



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

function closeAccordionItems () {
    elsAccordionItem.forEach(function (elAccordionItem) {
        elAccordionItem.classList.remove("accordion__item--open")
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
});

elsAccordionItemToggler.forEach(function (elAccordionItemTogggler) {
    elAccordionItemTogggler.addEventListener("click", function () {
        closeAccordionItems();

        elAccordionItemTogggler.closest('.accordion__item').classList.add("accordion__item--open");
    })
})