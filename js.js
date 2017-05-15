// Задание 1
// Дано массив
// var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
// Выведите те элементы массива, которые меньше 35
// Выведите те элементы массива, которые больше 35
var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
var task1 = '';
var task11 = '';
for (var i = 0; i < a.length; i++) {
    // arr1[i] = 8;
    if (a[i]<35){
        task1 += a[i]+ ' ';
    }
    if (a[i]>35){
        task11 += a[i]+ ' ';
    }
}
document.getElementById('task1').innerHTML = task1;
document.getElementById('task11').innerHTML = task11;

// Задание 2.
// Дан массив
// var b = {
// 	{"name" : "Alex", "age": 17},
// 	{"name" : "Ivan", "age": 27},
// 	{"name" : "Sergey", "age": 28},
// 	{"name" : "Vitaliy", "age": 30},
// 	{"name" : "Olga", "age": 24},
// }
// Создайте input, куда пользователь может ввести возраст человека. При нажатии кнопки показываются имена тех людей, чей возраст равен или меньше указанного.
var b = {
    human1 : {"name" : "Alex", "age": 17},
    human2 : {"name" : "Ivan", "age": 27},
    human3 : {"name" : "Sergey", "age": 28},
    human4 : {"name" : "Vitaliy", "age": 30},
    human5 : {"name" : "Olga", "age": 24}
}

var age = document.getElementById('age');
out = '';

age.oninput = function () {

    var ageVal = age.value;
    console.log(ageVal);

    for(key in b) {
        if (b[key].age == ageVal) {
            out = b[key].name + '--' + b[key].age;
        }
    }
    document.getElementById('task2').innerHTML = out;

}
