// This script handles dynamic task creation, state management for updating tasks, and event delegation.

const navbar = document.querySelector("#main-nav");
const openFormBtn = document.querySelector("#openFormBtn");
const themeToggleBtn = document.querySelector("#themeToggleBtn");
const scrollToConceptsBtn = document.querySelector("#scrollToConceptsBtn");
const taskCards = document.querySelector(".task-cards");
const taskFormPopUp = document.querySelector(".task-form-pop-up");
const closeFormBtn = document.querySelector("#closeFormBtn");
const taskForm = document.querySelector(".task-form");
const taskSubmitBtn = document.querySelector("#task-add-btn");
const enterTitleInputField = document.querySelector("#enter-title-inp");
const selectCategory = document.querySelector(".taskCategory");

// State variable used to toggle the form between Create Mode and Update Mode.
let cardBeingEdited = null;

// concept section selectors........
const conceptSectionButton = document.querySelector("#scrollToConceptsBtn");
const conceptsSection = document.querySelector(".concepts-section");
const grandParentBox = document.querySelector(".grandparent-box");
const parentBox = document.querySelector(".parent-box");
const childBox = document.querySelector(".child-box");
const initialValueInp = document.querySelector("#initial-text");
const checkValuesBtn = document.querySelector("#check-values");


themeToggleBtn.addEventListener('click', ()=>{
    if(document.body.dataset.theme === "light"){
        document.body.dataset.theme = "dark";
    }
    else{
        document.body.dataset.theme = "light";
    }
});

openFormBtn.addEventListener('click', ()=>{
    taskFormPopUp.classList.add("show-modal");
})

closeFormBtn.addEventListener('click', ()=>{
    taskFormPopUp.classList.remove("show-modal");
})

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let titleFieldValue = enterTitleInputField.value;
    let taskCategoryFieldValue = selectCategory.value;

    if(titleFieldValue.trim() === "" || taskCategoryFieldValue.trim() === ""){
        alert("The Inputs fields cannot be empty");
        return;
    }

   
    if (cardBeingEdited !== null){
        // 1. Grab the specific h3 and p inside THIS exact card
        let titleElement = cardBeingEdited.querySelector("h3");
        let categoryElement = cardBeingEdited.querySelector("p");

        // 2. Update their text with your brand new input values
        titleElement.textContent = titleFieldValue;
        categoryElement.textContent = taskCategoryFieldValue;

        // Update the custom data attribute.
        cardBeingEdited.setAttribute("data-category", taskCategoryFieldValue);

        // 3.Reset the state so the form goes back to Create Mode
        cardBeingEdited = null;
    }

    else{
        let newCard = document.createElement("div");
        newCard.classList.add("card");

        let uniqueId = Date.now();
        newCard.setAttribute("data-id", uniqueId);
        newCard.setAttribute("data-status", "pending");
        newCard.setAttribute("data-category", taskCategoryFieldValue);

        let cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");

        let checkBoxInp = document.createElement("input");
        checkBoxInp.setAttribute("type","checkbox");
        checkBoxInp.setAttribute("id", `checkbox-${uniqueId}`);
        


        let checkBoxLabel = document.createElement("label");

        let title = document.createElement("h3");
        let category = document.createElement("p");
        let actionBtnDiv = document.createElement("div");
        actionBtnDiv.classList.add("actions-btns");
        let updateBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        checkBoxLabel.textContent = "Complete";
        checkBoxLabel.setAttribute("for", `checkbox-${uniqueId}`);

        title.textContent = titleFieldValue;
        category.textContent = taskCategoryFieldValue;
        updateBtn.textContent = "Update";
        deleteBtn.textContent = "Delete";

        cardHeader.appendChild(checkBoxInp);
        cardHeader.appendChild(checkBoxLabel);
        cardHeader.appendChild(title);
        cardHeader.appendChild(category);

        actionBtnDiv.appendChild(updateBtn);
        actionBtnDiv.appendChild(deleteBtn);

        newCard.appendChild(cardHeader);
        newCard.appendChild(actionBtnDiv);

        taskCards.appendChild(newCard);
    }

    taskFormPopUp.classList.remove("show-modal");
    taskForm.reset();
});

// Using Event Delegation on the container to handle clicks for dynamically created buttons and checkboxes without memory leaks.
taskCards.addEventListener('click', (e)=>{
    if(e.target.textContent === "Delete"){
        let clickedCard = e.target.closest('.card');
        clickedCard.remove();
    }
    else if(e.target.type === "checkbox"){
        let clickedCard = e.target.closest('.card');
        let labelElement = e.target.nextElementSibling;

        clickedCard.classList.toggle("completed-task");
        if(clickedCard.getAttribute("data-status") === "pending"){
            clickedCard.setAttribute("data-status", "completed");
            labelElement.textContent = "Completed!";
        }
        else{
            clickedCard.setAttribute("data-status", "pending");
            labelElement.textContent = "Complete";
        }
    }

    else if(e.target.textContent === "Update"){
        let clickedCard = e.target.closest('.card');
        cardBeingEdited = clickedCard;
        let title = clickedCard.querySelector("h3");
        let category = clickedCard.querySelector("p");
        enterTitleInputField.value = title.textContent;
        selectCategory.value = category.textContent;
        taskFormPopUp.classList.add("show-modal");
    }
})

// concepts section code
conceptSectionButton.addEventListener('click', ()=>{
    conceptsSection.classList.toggle("show-concepts");
    // 2. Check if it just opened or closed
    if (conceptsSection.classList.contains("show-concepts")) {
        // It's open! Scroll down and hide the Create Task button
        conceptsSection.scrollIntoView({ behavior: 'smooth' });
        openFormBtn.style.display = "none"; 
    } else {
        // It's closed! Bring the Create Task button back
        openFormBtn.style.display = ""; 
    }
})

grandParentBox.addEventListener('click', ()=>{
    alert("GrandParent Box Clicked");
}, { capture: true })

parentBox.addEventListener('click', ()=>{
    alert("Parent Box Clicked");
}, { capture: true })

childBox.addEventListener('click', ()=>{
    alert("Child Box Clicked");
}, { capture: true })

checkValuesBtn.addEventListener('click', ()=>{
    // KEY JAVASCRIPT CONCEPT: Property vs. Attribute

    // .value (Property): Captures the live, current state of the DOM as the user interacts with it.
    let inpFieldValue = initialValueInp.value;

    // .getAttribute (Attribute): Captures the static, hardcoded HTML state from when the page first loaded.
    let intialInpValue = initialValueInp.getAttribute("value");


    alert(`Live Property: ${inpFieldValue}\nOriginal HTML Attribute: ${intialInpValue}`);
})
