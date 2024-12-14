function isEnoughCapacity(products, containerSize) {
  let totalSize = 0;              // створюємо змінну для загального об'єму продуктів
  for(const key in products) {    // перебераємо об'єкт циклом по ключах
    totalSize += products[key];   // зчитуємо значення в комірці ключа та додаємо до загального об'єму
  }
  return totalSize <= containerSize ? true : false; // перевіряємо чи почітиться об'єм продуктів в контейнер
}

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false