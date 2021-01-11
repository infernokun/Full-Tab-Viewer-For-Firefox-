// begin tab query
let query = browser.tabs.query({currentWindow: true});
query.then(getTabs);

const tabs_element = document.querySelector(".tabs");
const tab_num = document.getElementById("tab_num");
const tab_element = document.querySelector(".tab");

let total = 0;

// gets all tabs and creates/adds li element
function getTabs(tabs) {
    for (let tab of tabs) {
        let title = `<xmp>${tab.title}</xmp>`;

        const tab_li = `<li class="tab">
                            <img class="close" id="${tab.id}" src="close.png">
                            <p>${title}</p>
                        </li>`;
        tabs_element.insertAdjacentHTML("beforeend", tab_li);
        
        total++;
    }
    tab_num.innerText = "Total tabs: " + total;
}

// close tab functionality
tabs_element.addEventListener("click", function(event) {
    const element = event.target;
    const elementID = element.attributes.id.value;

    if (elementID) {
        browser.tabs.remove(Number(elementID));

        element.parentNode.parentNode.removeChild(element.parentNode);

        total--;
        tab_num.innerText = "Total tabs: " + total;
    }
});