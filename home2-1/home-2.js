//задання 1
let rezultat = 0;
let ask1 = prompt('Валюта України?');
if(ask1.toLowerCase()=='гривня'){
    rezultat++;
}
let ask2 = prompt('Скільки є пір року?');
if(ask2.toLowerCase()=='чотири'){
    rezultat++;
}
let ask3 = prompt('Як звати Шевченка (письменника)? ');
if(ask3.toLowerCase()=='тарас'){
    rezultat++;
}
let ask4 = prompt('Прізвище теперішнього президента України?');
if(ask4.toLowerCase()=='порошенко'){
    rezultat++;
}
let ask5 = prompt('2+2*2= буде?(у письмовій формі)');
if(ask5.toLowerCase()=='шість'){
    rezultat++;
}
let ask6 = prompt('Яке колесо у машині не крутиться при розвороті?');
if(ask6.toLowerCase()=='запасне'){
    rezultat++;
}
let ask7 = prompt('Якою хворобою не хворіть на суші?');
if(ask7.toLowerCase()=='морською'){
    rezultat++;
}
let ask8 = prompt('Установа по відправці людей на небо?)');
if(ask8.toLowerCase()=='аеропорт'){
    rezultat++;
}
let ask9 = prompt('Хто ходить сидячи?');
if(ask9.toLowerCase()=='шахматіст'){
    rezultat++;
}
let ask10 = prompt('Що легше 1 кг вати або 1 кг заліза?');
if(ask10.toLowerCase()=='однаково'){
    rezultat++;
}
alert(`Кількість правильних відповідей = ${rezultat}`)
