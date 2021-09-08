const vocabulary = new Map([
  ['получить', 'obtain'],
  ['преимущество', 'advantage'],
  ['стул', 'chair'],
  ['наличка', 'cash'],
  ["цифробуквенный", 'alphanumerical'],
  ['переговоры', 'negotiacions'],
  ['значительный','significant'],
  ["кот",'cat'],
  ['собака', 'dog'],
  ['слон', 'elephant'],
  ["1", 'language']
]);

const stringToTranslate = 'слон значительный получить наличка собака кот цифробуквенный стул';


// const string = 'test|not|yet|hello|there';
// const arrFromStr = string.split('|');
// const reformedStr = arrFromStr.join('$');


function iWannaEat(str){
  
const strMas = str.split(' ');

let newMasStr = []

for(let i = 0; i < strMas.length; i++){
  newMasStr[i] = vocabulary.get(strMas[i]);
}

const newStr = newMasStr.join(' ')
  return newStr;
}
























// создать функцию которая принимает строку на руссокм
// и возвращает строку на английском

// function translate(str) {
//   const arrFromStr = str.split(' ');
//   const reformedStr = [];
//   for(let i = 0; i< arrFromStr.length; i++){
//     if(vocabulary.has(arrFromStr[i])){
//       reformedStr[i] = vocabulary.get(arrFromStr[i]); 
//     }
//     else (reformedStr[i] = arrFromStr[i]);
//   }
//   return Str = reformedStr.join(' ');
// }




// const u1 = {
//   id: 1,
//   name: 'John',
//   age: 20
// }

// const u2 = {
//   id: 2,
//   name: 'Jane',
//   age: 23
// }

// const johnMsg = [
//   'Hello',
//   'yes',
//   'no',
//   'test'
// ]

// const janeMsg = [
//   'Hi',
//   'abracadabra?',
//   'test',
//   'not test'
// ]

// // создайте функцию, которая будет принимать айдишник пользователя
// // и будет возвращать все его сообщения

// const msgToUsers = new Map();
// msgToUsers.set(u1.id, johnMsg);
// msgToUsers.set(u2.id, janeMsg);

// function getUserMSG({id}){
//   return msgToUsers.get(id)
// }