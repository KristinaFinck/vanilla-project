 let userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
};
userObj['table'] = 'brown';
console.log(userObj);
let users = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
Object.keys(users); //Показывает ключи в виде массива
Object.values(users); // Показывает значения в виде массива
 users[12] = 12; // если передаём число, оно запишется как строка
 users[null] = 'acaca'; // просто будет свойство  null
 users[{}] = 'hello'; // получится [object Object]: 'hello' из-за приведения типов
 users[{name: 'Dimych'}];
 // получится всё равно 'hello' => {0: 'Dimych', 1: 'Natasha', 2: 'Valera', 3: 'Katya', 12: 12, null: 'acaca', [object Object]: 'hello'}
 users[{name: 'Dimych', toString(){return 'blabla'}}] = 'value of blabla'; // Вот как нужно перезатереть свойство
 //{0: 'Dimych', 1: 'Natasha', 2: 'Valera', 3: 'Katya', 12: 12, null: 'acaca', [object Object]: 'hello', blabla: 'value of blabla'}

 // Добавляем объект, и храним id в виде ключей
 type UserType = {
     [key: string]: { id: string, name: string }
 }

 export const users:UserType = {
     '1': {id: '10', name: 'Cristian'},
     '2': {id: '20', name: 'david'},
     '3': {id: '30', name: 'joe'},
     '4': {id: '40', name: 'tom'},
     '5': {id: '50', name: 'qwe'},
     '6': {id: '60', name: 'op'},
     '7': {id: '70', name: 'name'},
     '8': {id: '80', name: 'guy'},
 }

 let newUser = {id: '100', name: 'new user'}; // добавляем нового юзера
 users[newUser.id] = newUser;
 // delete users[user.id]
 users[ newUser.id].name = 'hello world';
 users[newUser.id].name = 'updated name'; // обновляем юзера
 delete users[newUser.id]; // удалили юзера по ключу


 export const userArray = [ // это обычный массив
     {id: '10', name: 'Cristian'},
     {id: '20', name: 'david'},
     {id: '30', name: 'joe'},
     {id: '40', name: 'tom'},
     {id: '50', name: 'qwe'},
     {id: '60', name: 'op'},
     {id: '70', name: 'name'},
     {id: '80', name: 'guy'},
 ];
 userArray.find (user => user.id === '10'); // Если ищем в массиве, то приходится пробегать по всему массиву, пока не найдём
 userArray.filter(user => user.id === '10');
 userArray.push(newUser); //  добавляем пользователя в массив
 let userCopy = userArray.some(user => user.id === newUser.id) ? [...userArray] : [...userArray, newUser]; // добавляем нового юзера, предварительно проверив на дублирование
 var usersArray = usersArray.filter(u => u.id !== newUser.id) // удаляем пользователя по id


