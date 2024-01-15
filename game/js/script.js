let $ = document;
let buttonEdit = $.querySelector('.button-edit');
let nameLord = $.querySelector('#nameLord');
const nameCountry = $.getElementById('nameCountry');
const nameCity = $.getElementById('nameCity');
const nameID = $.getElementById('nameID');

buttonEdit.addEventListener('click', function () {
    localStorage.clear();
    var randomNumber = Math.floor(Math.random() * 28);
    let inputName = prompt('نام جدید لرد خود را وارد کنید:');
    let inputCountry = prompt('نام جدید کشور خود را وارد کنید:');
    let inputCity = prompt('نام جدید شهر خود را وارد کنید:');
    localStorage.setItem('newLord', inputName);
    localStorage.setItem('newCountry', inputCountry);
    localStorage.setItem('newCity', inputCity);
    localStorage.setItem('random', randomNumber);
    nameLord.innerHTML = localStorage.getItem("newLord");
    nameCountry.innerHTML = localStorage.getItem("newCountry");
    nameCity.innerHTML = localStorage.getItem("newCity");
    nameID.innerHTML = localStorage.getItem("random");
})
nameLord.innerHTML = localStorage.getItem("newLord");
nameCountry.innerHTML = localStorage.getItem("newCountry");
nameCity.innerHTML = localStorage.getItem("newCity");
nameID.innerHTML = localStorage.getItem("random");