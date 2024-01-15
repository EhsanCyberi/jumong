let $ = document
let none = $.querySelector('.dis-none')
let copy = $.querySelector('.copy');

let resultName = $.querySelector('#result-name')
let goldAll = $.querySelector('.gold-all')
let woodAll = $.querySelector('.wood-all')
let personAll = $.querySelector('.person-all')
let stoneAll = $.querySelector('.stone-all')
let wheatAll = $.querySelector('.wheat-all')
let ironAll = $.querySelector('.iron-all')
let namakAll = $.querySelector('.namak-all')

let allNums = $.querySelectorAll('.number')
let upgrade = $.querySelector('.upgrade')
let sell = $.querySelector('.sell')

let btnJade = $.querySelector('.button-jade')
let btnKarvan = $.querySelector('.button-karvan')
let btnWooder = $.querySelector('.button-wooder')
let btnFarm = $.querySelector('.button-farm')
let btnPeople = $.querySelector('.button-people')
let btnMadan = $.querySelector('.button-madan');
let btnNamak = $.querySelector('.button-namak');
let btnIron = $.querySelector('.button-iron');


let levelJade = $.querySelector('.jade-lvl')
let levelKarvan = $.querySelector('.karvan-lvl')
let levelwooder = $.querySelector('.wooder-lvl')
let levelFarm = $.querySelector('.farm-lvl')
let levelPeople = $.querySelector('.people-lvl')
let levelMadan = $.querySelector('.madan-lvl');
let levelNamak = $.querySelector('.namak-lvl');
let levelIron = $.querySelector('.iron-lvl');

let structures = {
    jade: {gold: 2000, wood: 0, person: 50, stone: 100},
    karvan: {gold: 1000, wood: 50, person: 20, stone: 0},
    wooder: {gold: 1500, wood: 0, person: 20, stone: 50},
    people: {gold: 2000, wood: 100, person: 0, stone: 100},
    madan: {gold: 1500, wood: 50, person: 20, stone: 0},
    farm: {gold: 1000, wood: 0, person: 25, stone: 0},
    namak: {gold: 2000, wood: 100, person: 30, stone: 100},
    iron: {gold: 2000, wood: 200, person: 50, stone: 200},
}
let result = {
    jade: {gold: 1000},
    karvan: {gold: 500},
    wooder: {wood: 50},
    people: {person: 50},
    madan: {stone: 50},
    farm: {wheat: 50},
    namak: {namak: 50},
    iron: {iron: 25},

}

function jade() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelJade.innerHTML = input
}


function karvan() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelKarvan.innerHTML = input 
}

function wooder() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelwooder.innerHTML = input
}

function farm() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelFarm.innerHTML = input
}

function people() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelPeople.innerHTML = input
}

function madan() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelMadan.innerHTML = input
}

function basteNamak() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelNamak.innerHTML = input
}

function ahan() {
    let input = +prompt('لول ساختمان را وارد کنید');
    levelIron.innerHTML = input
}

function upgred(){
    var goldResJade = levelJade.innerHTML * result.jade.gold
    var goldResKarvan = levelKarvan.innerHTML * result.karvan.gold
    var woodResWooder = levelwooder.innerHTML * result.wooder.wood
    var stoneResMadan = levelMadan.innerHTML * result.madan.stone
    var personResPeople = levelPeople.innerHTML * result.people.person
    var wheatResFarm = levelFarm.innerHTML * result.farm.wheat
    var namakResult = levelNamak.innerHTML * result.namak.namak
    var ironResult = levelIron.innerHTML * result.iron.iron
    goldAll.innerHTML = goldResJade + goldResKarvan
    woodAll.innerHTML = woodResWooder
    stoneAll.innerHTML = stoneResMadan
    personAll.innerHTML = personResPeople
    wheatAll.innerHTML = wheatResFarm
    namakAll.innerHTML = namakResult
    ironAll.innerHTML = ironResult
    resultName.innerHTML = 'بازدهی کل:'
    none.style.display = 'block';
}

function sellPrice() {
    var goldResultSell = (levelJade.innerHTML * structures.jade.gold) + (levelKarvan.innerHTML * structures.karvan.gold) + (levelNamak.innerHTML * structures.namak.gold) + (levelwooder.innerHTML * structures.wooder.gold) + (levelFarm.innerHTML * structures.farm.gold) + (levelIron.innerHTML * structures.iron.gold) + (levelPeople.innerHTML * structures.people.gold) + (levelMadan.innerHTML * structures.madan.gold)
    var woodResultSell = (levelJade.innerHTML * structures.jade.wood) + (levelKarvan.innerHTML * structures.karvan.wood) + (levelNamak.innerHTML * structures.namak.wood) + (levelwooder.innerHTML * structures.wooder.wood) + (levelFarm.innerHTML * structures.farm.wood) + (levelIron.innerHTML * structures.iron.wood) + (levelPeople.innerHTML * structures.people.wood) + (levelMadan.innerHTML * structures.madan.wood)
    var personResultSell = (levelJade.innerHTML * structures.jade.person) + (levelKarvan.innerHTML * structures.karvan.person) + (levelNamak.innerHTML * structures.namak.person) + (levelwooder.innerHTML * structures.wooder.person) + (levelFarm.innerHTML * structures.farm.person) + (levelIron.innerHTML * structures.iron.person) + (levelPeople.innerHTML * structures.people.person) + (levelMadan.innerHTML * structures.madan.person)
    var stoneResultSell = (levelJade.innerHTML * structures.jade.stone) + (levelKarvan.innerHTML * structures.karvan.stone) + (levelNamak.innerHTML * structures.namak.stone) + (levelwooder.innerHTML * structures.wooder.stone) + (levelFarm.innerHTML * structures.farm.stone) + (levelIron.innerHTML * structures.iron.stone) + (levelPeople.innerHTML * structures.people.stone) + (levelMadan.innerHTML * structures.madan.stone)
    goldAll.innerHTML = goldResultSell
    woodAll.innerHTML = woodResultSell
    personAll.innerHTML = personResultSell
    stoneAll.innerHTML = stoneResultSell
    wheatAll.innerHTML = 0
    namakAll.innerHTML = 0
    ironAll.innerHTML = 0
    resultName.innerHTML = 'قیمت خرید ها:'
    none.style.display = 'block';

}

function coped () {
    let vaidCopy = "💰 " + goldAll.innerHTML + "\n🪵 " + woodAll.innerHTML + "\n👤 " + personAll.innerHTML + "\n🪨 " + stoneAll.innerHTML + "\n🌾 " + wheatAll.innerHTML + "\n🗻 " + namakAll.innerHTML + "\n⚓️ " + ironAll.innerHTML ;
    navigator.clipboard.writeText(resultName.innerHTML + "\n \n" + vaidCopy)
    alert("کپی شد\n حالا میتونی خریداتو بفرستی برای گاد!")
}

btnJade.addEventListener('click', jade)
btnKarvan.addEventListener('click', karvan)
btnFarm.addEventListener('click', farm)
btnPeople.addEventListener('click', people)
btnWooder.addEventListener('click', wooder)
btnMadan.addEventListener('click', madan)
btnNamak.addEventListener('click', basteNamak)
btnIron.addEventListener('click', ahan)
upgrade.addEventListener('click', upgred)
sell.addEventListener('click', sellPrice)
copy.addEventListener('click', coped)

