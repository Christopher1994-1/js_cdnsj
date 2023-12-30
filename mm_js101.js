"use strict";
let links = document.getElementById('link-thing');
let links2 = document.getElementById('link-thing2');
let links3 = document.getElementById('link-thing3');
let links4 = document.getElementById('link-thing4');
let searchBox = document.getElementById('searchID');
let searchBoxContainer = document.getElementById('inputboxID');
let popup = document.getElementById("popup-element");
let secondBtn = document.getElementById('secondbtn');
let firstBtn = document.getElementById('firstBtn');
let isHovering = false;
let myDictionary = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    // ... other key-value pairs
};
// Function to add elements to the DOM
function addElementsToDOM(data) {
    // Get the container element
    var container = document.getElementById("popup-element");
    // Create the first set of elements
    var link1 = document.createElement("a");
    link1.href = "#";
    link1.textContent = "this";
    var small1 = document.createElement("small");
    small1.textContent = "- 500 posts";
    var hr1 = document.createElement("hr");
    // Append the first set of elements to the container
    container.appendChild(link1);
    container.appendChild(small1);
    container.appendChild(hr1);
    // Create the second set of elements
    var link2 = document.createElement("a");
    link2.href = "#";
    link2.textContent = "this";
    var small2 = document.createElement("small");
    small2.textContent = "- 10 posts";
    // Append the second set of elements to the container
    container.appendChild(link2);
    container.appendChild(small2);
}
;
function makeAjexRequest(input) {
    let data = input.toString();
    addElementsToDOM(data);
}
;
function open_dropwdown() {
    isHovering = true;
    popup.style.display = "block";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    let input = document.getElementById('searchID');
    let inputValue = input.value;
    if (inputValue == 'cp' || inputValue == 'CP') {
        window.alert('stop your shit');
    }
    makeAjexRequest(inputValue);
}
;
function hidePopup() {
    if (isHovering == false) {
        popup.style.display = "none";
    }
}
popup.addEventListener("mouseover", function () {
    open_dropwdown();
});
popup.addEventListener("mouseout", function () {
    isHovering = false;
    hidePopup();
});
function open_search() {
    links.style.display = 'none';
    links2.style.display = 'none';
    links3.style.display = 'none';
    links4.style.display = 'none';
    searchBox.style.display = 'block';
    searchBoxContainer.style.display = 'block';
    secondBtn.style.display = 'block';
    firstBtn.style.display = 'none';
}
function close_search() {
    if (isHovering == false) {
        links.style.display = 'block';
        links2.style.display = 'block';
        links3.style.display = 'block';
        links4.style.display = 'block';
        searchBox.style.display = 'none';
        searchBoxContainer.style.display = 'none';
        secondBtn.style.display = 'none';
        firstBtn.style.display = 'block';
    }
}
