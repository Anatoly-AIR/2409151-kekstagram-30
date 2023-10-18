/* Функция для проверки длины строки.
Если строка, которую передали в функцию (первый параметр - str) меньше или равна указанной длине (второй параметр - maxLength),
то функция вернёт true. Если строка длиннее, то функция вернёт false.
*/
const checkLengthString = function (str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
};

//const checkLengthString = (str, maxLength) => str.length <= maxLength;

checkLengthString('Строка для проверки', 20);

checkLengthString('Строка для проверки', 19);

checkLengthString('Строка для проверки', 10);


const checkStringIsPalindrom = function (str) {
  const string = str.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = string.length - 1; i >= 0; i --) {
    newString += string[i];
  }
  return newString === string;
};

checkStringIsPalindrom('Т о п о p');
checkStringIsPalindrom('Т о п о т');
checkStringIsPalindrom('Лёша на полке клопа нашёл');
checkStringIsPalindrom('Кучук');
checkStringIsPalindrom('ДОВОД');
checkStringIsPalindrom('Повод');

