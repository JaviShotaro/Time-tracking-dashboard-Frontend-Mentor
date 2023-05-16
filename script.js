// Variables
const weekly = document.getElementById("weekly-header");
const monthly = document.getElementById("monthly-header");
const daily = document.getElementById("daily-header");

let workHours = document.getElementById("work-hours");
let lastWork = document.getElementById("last-work");
let playHours = document.getElementById("play-hours");
let lastPlay = document.getElementById("last-play");
let studyHours = document.getElementById("study-hours");
let lastStudy = document.getElementById("last-study");
let exerciseHours = document.getElementById("exercise-hours");
let lastExercise = document.getElementById("last-exercise");
let socialHours = document.getElementById("social-hours");
let lastSocial = document.getElementById("last-social");
let selfCareHours = document.getElementById("selfCare-hours");
let lastSelfCare = document.getElementById("last-selfCare");

// Functions

daily.addEventListener('click',() => {
    
    workHours.innerHTML = "5hrs";
    lastWork.innerHTML = "Last Daily - 7hrs";
    playHours.innerHTML = "1hrs";
    lastPlay.innerHTML = "Last Daily - 2hrs";
    studyHours.innerHTML = "0hrs";
    lastStudy.innerHTML = "Last Daily - 1hrs";
    exerciseHours.innerHTML = "1hrs";
    lastExercise.innerHTML = "Last Daily - 1hrs";
    socialHours.innerHTML = "1hrs";
    lastSocial.innerHTML = "Last Daily - 3hrs";
    selfCareHours.innerHTML = "0hrs";
    lastSelfCare.innerHTML = "Last Daily - 1hrs";

})

weekly.addEventListener('click',() => {
    
    workHours.innerHTML = "32hrs";
    lastWork.innerHTML = "Last Daily - 36hrs";
    playHours.innerHTML = "10hrs";
    lastPlay.innerHTML = "Last Daily - 8hrs";
    studyHours.innerHTML = "4hrs";
    lastStudy.innerHTML = "Last Daily - 7hrs";
    exerciseHours.innerHTML = "4hrs";
    lastExercise.innerHTML = "Last Daily - 5hrs";
    socialHours.innerHTML = "5hrs";
    lastSocial.innerHTML = "Last Daily - 10hrs";
    selfCareHours.innerHTML = "2hrs";
    lastSelfCare.innerHTML = "Last Daily - 2hrs";

})

monthly.addEventListener('click',() => {

    workHours.innerHTML = "103hrs";
    lastWork.innerHTML = "Last Daily - 128hrs";
    playHours.innerHTML = "23hrs";
    lastPlay.innerHTML = "Last Daily - 29hrs";
    studyHours.innerHTML = "13hrs";
    lastStudy.innerHTML = "Last Daily - 19hrs";
    exerciseHours.innerHTML = "11hrs";
    lastExercise.innerHTML = "Last Daily - 18hrs";
    socialHours.innerHTML = "21hrs";
    lastSocial.innerHTML = "Last Daily - 23hrs";
    selfCareHours.innerHTML = "7hrs";
    lastSelfCare.innerHTML = "Last Daily - 11hrs";
})