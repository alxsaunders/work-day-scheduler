$(document).ready(function() {

$("#currentDay").text(moment().format("MMMM Do YYYY")); 


let description = $(".description");
let saveButton = $(".saveBtn");
let currentHour = moment().hours()


console.log(currentHour);
console.log(typeof currentHour);

description.each(function() {
    let timeBlock = parseInt($(this).attr('id'))
//added if else statments to check the current time and to remove or class classes based on results
    if(timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    
    }
    else if (timeBlock < currentHour) {
        $(this).addClass("past")
        $(this).removeClass("future")
        $(this).removeClass("present")
    }else {
        $(this).addClass("future")
        $(this).removeClass("past")
        $(this).removeClass("present")
    }

    description.each(function() {
//for loop to store all data in text area 
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

})

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