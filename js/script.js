"use strict";

// const result = confirm('Are you here')
// console.log(result)
//     // prompt('Hello');

// const answer = prompt('Вам есть 18?', '18')

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = confirm('Сасать будешь?');

document.write(answers);