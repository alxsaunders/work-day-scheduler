$(document).ready(function() {

$("#currentDay").text(moment().format("MMMM Do YYYY")); 


let description = $(".description");
let saveButton = $(".saveBtn");
let currentHour = moment().hours();


console.log(currentHour);
console.log(typeof currentHour);
//Color coding the time blocks using each and comparing the moment current time (currentHour) to the id attribute assigned to the textarea.
description.each(function () {
    let timeBlock = parseInt($(this).attr("id"));

    if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});

    description.each(function() {
//for loop to store all data in text area in local storage 
        for (let i = 0; i < localStorage.length; i++) {
            let objectKey = localStorage.key(i)
            let taskValue = localStorage.getItem(objectKey)
            let rowHour = $(this).siblings(".hour").text()


        console.log(rowHour);
        console.log(objectKey);
        console.log(taskValue);
        

        if(objectKey === rowHour) {
            $(this).val(taskValue);
        }
        }

    })


    //Function to save task input once the save button is clicked. 
function saveTasks() {
    
    let rowHour = $(this).siblings(".hour").text();
    let task = $(this).siblings(".description").val();

    console.log(rowHour);
    console.log(task);

    if (task === "") {
        localStorage.setItem(rowHour, "")
}
else {
    localStorage.setItem(rowHour, task);
    
}}

saveButton.on('click', saveTasks)

})