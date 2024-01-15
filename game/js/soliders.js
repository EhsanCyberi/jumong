let $ = document;
let person = $.querySelector('.person-all');
let gold = $.querySelector('.gold-all');
let copy = $.querySelector('.copy');
let none = $.querySelector('.dis-none');
// ---------------------------------------------------------
let swords = $.querySelector('.swords')
let bows = $.querySelector('.bows')
let neyzes = $.querySelector('.neyzes')
let savares = $.querySelector('.savares')
let samuraeis = $.querySelector('.samuraeis')
let crusbows = $.querySelector('.crusbows')
let arabes = $.querySelector('.arabes')
let knights = $.querySelector('.knights')
// ---------------------------------------------------------
let swordLVL = $.querySelector('.sword-lvl');
let bowLVL = $.querySelector('.bow-lvl');
let neyzeLVL = $.querySelector('.neyze-lvl');
let savareLVL = $.querySelector('.savare-lvl');
let samuraeiLVL = $.querySelector('.samuraei-lvl');
let crusbowLVL = $.querySelector('.crusbow-lvl');
let arabeLVL = $.querySelector('.arabe-lvl');
let knightLVL = $.querySelector('.knight-lvl');
// -----------------------------------------------------------------------
let swordButton = $.querySelector('.button-sword');
let bowButton = $.querySelector('.button-bow');
let neyzeButton = $.querySelector('.button-neyze');
let savareButton = $.querySelector('.button-savare');
let samuraeiButton = $.querySelector('.button-samuraei');
let crusbowButton = $.querySelector('.button-crusbow');
let arabeButton = $.querySelector('.button-arabe');
let knightButton = $.querySelector('.button-knight');
let buy = $.querySelector('.buy');
// ------------------------------------------------------------------------------------

let soliders = {
    sword: {gold: 10, people: 1},
    bow: {gold: 15, people: 1},
    neyze: {gold: 20, people: 1},
    savare: {gold: 25, people: 2},
    samuraei: {gold: 40, people: 1},
    crusbow: {gold: 50, people: 1},
    arabe: {gold: 60, people: 3},
    knight: {gold: 60, people: 2},
}

// ------------------------------------------------------------------------------------

function sword () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    swordLVL.innerHTML = input
}
function bow () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    bowLVL.innerHTML = input
}
function neyze () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    neyzeLVL.innerHTML = input
}
function savare () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    savareLVL.innerHTML = input
}
function samuraei () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    samuraeiLVL.innerHTML = input
}
function crusbow () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    crusbowLVL.innerHTML = input
}
function arabe () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    arabeLVL.innerHTML = input
}
function knight () {
    let input = +prompt("تعداد سرباز هایی که میخواهید خریداری کنید را وارد کنید :  ")
    knightLVL.innerHTML = input
}

function buys() {
    let resultGold = (swordLVL.innerHTML * soliders.sword.gold) + (bowLVL.innerHTML * soliders.bow.gold) + (savareLVL.innerHTML * soliders.savare.gold) + (samuraeiLVL.innerHTML * soliders.samuraei.gold) + (neyzeLVL.innerHTML * soliders.neyze.gold) + (crusbowLVL.innerHTML * soliders.crusbow.gold) + (arabeLVL.innerHTML * soliders.arabe.gold) + (knightLVL.innerHTML * soliders.knight.gold);
    let resultPeople = (swordLVL.innerHTML * soliders.sword.people) + (bowLVL.innerHTML * soliders.bow.people) + (savareLVL.innerHTML * soliders.savare.people) + (samuraeiLVL.innerHTML * soliders.samuraei.people) + (neyzeLVL.innerHTML * soliders.neyze.people) + (crusbowLVL.innerHTML * soliders.crusbow.people) + (arabeLVL.innerHTML * soliders.arabe.people) + (knightLVL.innerHTML * soliders.knight.people);
    person.innerHTML = resultPeople;
    gold.innerHTML = resultGold;
    none.style.display = 'block';
}

function copys() {
    let vaidCopy = "💰 " + gold.innerHTML + "\n👤 " + person.innerHTML;
    navigator.clipboard.writeText("قیمت کل سربازها : " + "\n \n" + vaidCopy)
    alert("کپی شد\n حالا میتونی خریداتو بفرستی برای گاد!")
}

swordButton.addEventListener('click', sword);
bowButton.addEventListener('click', bow);
neyzeButton.addEventListener('click', neyze);
savareButton.addEventListener('click', savare);
arabeButton.addEventListener('click', arabe);
knightButton.addEventListener('click', knight);
crusbowButton.addEventListener('click', crusbow);
samuraeiButton.addEventListener('click', samuraei);
buy.addEventListener('click', buys)
copy.addEventListener('click', copys)