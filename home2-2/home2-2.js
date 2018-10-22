let userName = prompt('Введіть імя');
if (userName == 'Імя') {
    let pass = prompt('Введіть пароль');
    if (pass == 'ЛОГОС') {
        alert('Ласкаво просимо')
    } 
    else if (pass == null) {
        alert('Вхід скасовано')
    } 
    else {
    alert('Пароль невірний')
    }    
} 
else if (userName == null) {
    alert('Вхід скасовано')
} 
else {
    alert('Я вас незнаю')
}
