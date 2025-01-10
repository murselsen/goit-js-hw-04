console.log('~~~~~~~~~ Task 2: ~~~~~~~~~');

const calcAverageCalories = days => {
  let totalCalories = 0;
  days.forEach(day => {
    const dayTitle = day.day;
    const caloriesValue = day.calories;
    // console.log(dayTitle, caloriesValue);
    totalCalories += caloriesValue;
  });

  console.log('Total Calories:', totalCalories);
  if (days.length > 0) {
    return totalCalories / days.length;
  }
  return totalCalories;
};

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
