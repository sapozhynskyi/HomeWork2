
//Условные операторы 
//Задание 1

const getMultorSum=(a, b) => {
let result; result = (a % 2 == 0 ? a * b : a + b); 
return result;
}

//Задание 2 

const Quarter = (x, y) => {
  let result;
  var message = (x < 0) && (y > 0) ? result = 1 : (x > 0) && (y > 0) ? result = 2 : (x < 0) && (y < 0) ? result = 3 : (x > 0) && (y < 0) ? result = 4 : result = 0;
  return result;
}

// Задание 3 
const SumPozitiv = (a, b, c) => {
  let result = 0;
  if(a >= 0)
  result += a
  if(b >= 0)
  result += b
  if(c >= 0)
  result += c
  return result;
}

// Задание 4
const CalcExpression = (a, b, c) => {
  let result = ((a * b * c)>(a + b + c) ? (a * b * c) : (a + b + c) + 3);
  return result;
}

// Задание 5
const getRatingStud = (raiting) => {
  let result;
  var message = (raiting > 0) && (raiting < 20) ? result = 'F' : (raiting > 19) && (raiting < 40) ? result = 'E' : (raiting > 39) && (raiting < 60) ? result = 'D' : (raiting > 59) && (raiting < 75) ? result = 'C' : (raiting > 74) && (raiting < 90) ? result = 'B' : (raiting > 89) && (raiting < 101) ? result = 'A' : result = 'ERROR';
  return result;
}

//Циклы

// Задание 1
const CountEvenNum = () => {
  let k = 0;
  let sum = 0;
  for (let i = 1; i < 100; i++){
     if(i%2==0){
       k++;
       sum += i;
     }}
  return [k, sum];
}

//Задание 2
const chekNum = num => {
  let prostoe = true;
  for (let i = 2; i < num; i++){
  if(num%i === 0)
    prostoe = false}
result = (prostoe? 'простое' : 'сложное');
return result;
}

//Задание 3

const getRoot= num =>{
  let result = 0;
  for(let i = 1; i < num; i++){
  if((num/i) === i)
   result = i;
   } 
  return result;
 }

//Задание 4
const getFactorial = (n) => {
  for (let i = n; --i; ){
  n *= i;}
  return n;
}

// Задание 5
const sumRest = num =>{
  let sum=0;
  let ost;
  while(num){
    ost = num % 10;
    num = (num - ost) / 10;
    sum += ost;} 
  return sum;
  }

//Задание 6
const getMirrorNumber = num =>{
  let x = 0;
  while (num > 0) {
    x = x * 10 + num % 10;
    num = parseInt(num / 10);
    }
  return x;
}

//Массивы

// Задание 1
const minElement = array =>{
  if (array.length == 0){
    return -1;
  }
  var min=array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i];}}
  return min;
}
//Задание 2
const maxElement = array =>{
  if (array.length == 0){
    return -1;
  }
  var max=array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i];}}
  return max;
}
//Задание 3
const getMaxIndex = array =>{
  if (array.length == 0){
    return -1;
    }
  var max=array[0];
  let mx;
  for(let i = 0; i < array.length; i++){
    if(array[i] >= max){
      max = array[i];
      mx=i;
      }
      }
  return mx;
}

//Задание 4
const getMinIndex = array =>{
  if (array.length == 0){
    return -1;
  }
  var min=array[0];
  let mn;
  for(let i = 0; i < array.length; i++){
    if(array[i] <= min){
      min = array[i];
      mn=i}
      }
  return mn;
}
//Задание 5
const getSumOddIndexElement = array => {
  if (array.length == 0){
    return -1;
  }
  let sum=0;
  let result;
  for (let i=0; i<array.length; i++){
    if(i%2 != 0){
    sum+=array[i]
    }
    result=sum;}
  return result;
}

//Задание 6
const reverseArray = array =>{
  if (array.length == 0){
    return -1;
  }
  var b = [];
  let j = 0;
  for (let i = array.length-1; i >= 0; i--)
  { 
    b[j] = array[i];
    j++; 
  }
return b;
}
//Задание 7
const getQuantityOddElement = array => {
  if (array.length == 0){
    return -1;
  }
  let k=null;
  for (let i = 0; i < array.length; i++){
    if(array[i]%2 !== 0)
    {
      k++
    }
    }
  return k;
}

//Задание 8
const swapHalf = array => {
  if (array.length == 0){
    return -1;
  }
  let result ;
  result=(array.slice(array.length/2, array.length).concat(array.slice(0, array.length/2)));
  return result;
}

//Задание 9
var a=[1,3,6,2,4,8,9,15,7]; // общий массив для 3 сортировок

//Bubble
const bubbleSort = array => {
  if (array.length == 0){
    return -1;
  }
  for( let i = 0; i < array.length; i++){
     for (let j = 0; j < array.length-1; j++){
       if(array[j+1] > array[j])
       {
        const t = array[j+1];
        array[j+1] = array[j];
        array[j] = t;
      }
    }
  }
  return array;
}
//Select
const selectSort = array =>{
  if (array.length == 0){
    return -1;
  }
  for ( let i=0; i<array.length; i++){
    let b=array[i]; j=i-1;
    while((j>=0)&&(array[j]<b)){
      array[j+1]=array[j]; j--;
      }
    array[j+1]=b;
  }
  return array;
}
//Insert
const insertSort = array =>{
  if (array.length == 0){
    return -1;
  }
  for( let i = 0; i<array.length-1;i++)
  { let min = i;
    for(let j = i+1; j < array.length; j++)
    {
     if(array[j] > array[min])
      {
       min = j;
      }
    }
     const t = array[min];
     array[min] = array[i];
     array[i] = t;
  }
return array;
}
//Функции //Задание 1
const getDay = number => {
  var str = '';
  switch(number) {
    case 1:
    str = 'Понедельник';
    break;
    case 2:
    str = 'Вторник;'
    break;
    case 3:
    str = 'Среда';
    break;
    case 4:
    str = 'Четверг';
    break;
    case 5:
    str = 'Пятница';
    break;
    case 6:
    str = 'Суббота';
    break;
    case 7:
    str = 'Воскресенье';
    break;
    default: 
    str='Неверный номер';
  }
return str;
}

// Задание 2
const distanceBetweenPoint = (x1, x2, y1, y2) => {
  let result;
  result = (((x2 - x1)**2 + (y2 - y1)**2) ** 0.5);
  return result;
}  