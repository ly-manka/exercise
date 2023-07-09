"use strict";

//Task 1

//Hourly payment is 80$, working day is 5/2 5 hours. Order 40 hours.
//Vacation is planned in 11 days. Today is monday
//Output boolean variable to the console if you can take the order
//How much does the project cost?

const hourlyPayment = 80;
const workingHours = 5;
const orderHours = 40;
const leftDays = 9;

const daysForProjectCompletion = orderHours / workingHours;

if (leftDays >= daysForProjectCompletion) {
  console.log(
    true,
    `Can take the project, it takes ${daysForProjectCompletion} days to complete the order and I have ${leftDays} days left`
  );
  console.log(`It costs ${orderHours * hourlyPayment}`);
} else {
  console.log(
    false,
    `Can't finish the project, cause it takes ${daysForProjectCompletion} and I have only ${leftDays} days left`
  );
}
