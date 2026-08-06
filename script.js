let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let checkin = document.getElementById("checkin");
let checkout = document.getElementById("checkout");
let guests = document.getElementById("guests");
let room = document.getElementById("room");
let bed = document.getElementById("bed");
let terms = document.getElementById("terms");


// Full Name
fullname.addEventListener("input",()=>{
    if(fullname.value.length < 8){
        fullname.style.border="4px solid red";
    }
    else{
        fullname.style.border="4px solid green";
    }
});


// Email
email.addEventListener("input",()=>{
    if(!email.value.includes("@")){
        email.style.border="4px solid red";
    }
    else{
        email.style.border="4px solid green";
    }
});


// Phone Number
phone.addEventListener("input",()=>{
    if(phone.value.length != 12){
        phone.style.border="4px solid red";
    }
    else{
        phone.style.border="4px solid green";
    }
});


// Check-in Date
checkin.addEventListener("input",()=>{
    if(checkin.value==""){
        checkin.style.border="4px solid red";
    }
    else{
        checkin.style.border="4px solid green";
    }
});


// Check-out Date
checkout.addEventListener("input",()=>{

    if(checkout.value=="" || checkout.value <= checkin.value){
        checkout.style.border="2px solid red";
    }
    else{
        checkout.style.border="2px solid green";
    }

});


// Guests
guests.addEventListener("change",()=>{

    if(guests.value==""){
        guests.style.border="2px solid red";
    }
    else{
        guests.style.border="2px solid green";
    }

});


// Room Type
room.addEventListener("change",()=>{

    if(room.value==""){
        room.style.border="2px solid red";
    }
    else{
        room.style.border="2px solid green";
    }

});


// Bed Preference
bed.addEventListener("change",()=>{

    if(bed.value==""){
        bed.style.border="2px solid red";
    }
    else{
        bed.style.border="2px solid green";
    }

});


// Terms checkbox
terms.addEventListener("change",()=>{

    if(terms.checked){
        terms.style.outline="2px solid green";
    }
    else{
        terms.style.outline="2px solid red";
    }

});


// Form Submit Validation
document.querySelector(".booking-form").addEventListener("submit",(e)=>{

    if(!terms.checked){
        alert("Please accept Terms & Conditions");
        e.preventDefault();
    }
    else{
        alert("Booking Successful!");
    }

});