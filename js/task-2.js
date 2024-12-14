function  calcAverageCalories(days) {
    let totalDays = 0;              // змінна для підрахунку загальної кількості днів
    let totalCal = 0;               // змінна для підрахунку загальної суми калорій
    for(const key of days){         // перебираємо об'єкт
        totalDays++;                // рахуєм кількість днів
        totalCal += key.calories;   // рахуем загальну кількість калорій    
    }
    return totalCal/totalDays;      // розраховуєм результат середньої кількості калорій на добу
}

console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); // 3180
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); // 2270