const clientChoice = {
    design: 'Дизайна',
    adaptive: 'Адаптивности',
    ['type of site']: 'Типа сайта'
};

alert('Варианты выбора для: \n Дизайна: 1) 2) 3) \n Адаптивности: 1) 2) 3) \n Типа сайта: 1) 2) 3)');

for (let key in clientChoice) {
    clientChoice[key] = prompt(`Выберите от 1 до 3 ${clientChoice[key]}`);
};

coastOfDesign = [2000, 3000, 5000];
coastOfAdaptive = [1000, 5000, 10000];
coastOfType = [5000, 15000, 30000];

timeForDesign = [2, 3, 5];
timeForAdaptive = [1, 5, 10];
timeForType = [5, 15, 30];

let calcTotalCoast = (design, adaptive, type) => {
    let sum = 0;
    sum += coastOfDesign[design - 1];
    sum += coastOfAdaptive[adaptive - 1];
    sum += coastOfType[type - 1];
    return sum;
}

let calcDeadLine = (design, adaptive, type) => {
    let days = 0;
    days += timeForDesign[design - 1];
    days += timeForAdaptive[adaptive - 1];
    days += timeForType[type - 1];
    return days;
}

alert('Итоговая цена за работу: ' + calcTotalCoast(clientChoice.design, clientChoice.adaptive, clientChoice["type of site"]) + 'руб\n\n' + 'Срок выполнения в днях: ' + calcDeadLine(clientChoice.design, clientChoice.adaptive, clientChoice["type of site"]));