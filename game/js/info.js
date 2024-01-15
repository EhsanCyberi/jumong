let $ = document;
let none = $.querySelector('.NON');
let btn = $.querySelector('.button');
let input = $.getElementById('inputUserName');
let username = localStorage.getItem('newLord');

btn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(username);
    if (input.value === username) {
        window.location.href = "index.html";
    } else {
        alert("نام لرد اشتباه است!")
    }    
})