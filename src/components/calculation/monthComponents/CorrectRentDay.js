import addDays from "date-fns/addDays";

// var to be set once function has found the next Friday for rent payment
export let properDate;

// function to find the correct date for rent to always be a Friday
const CorrectRentDay = (newDay, newDate) => {
  switch (newDay) {
    case 0:
      properDate = addDays(newDate, 5);
      // console.log("This day is Sunday: ", properDate);
      break;
    case 1:
      properDate = addDays(newDate, 4);
      // console.log("This day is Monday: ", properDate);
      break;
    case 2:
      properDate = addDays(newDate, 3);
      // console.log("This day is Tuesday: ", properDate);
      break;
    case 3:
      properDate = addDays(newDate, 2);
      // console.log("This day is Wednesday: ", properDate);
      break;
    case 4:
      properDate = addDays(newDate, 1);
      // console.log("This day is Thursday: ", properDate);
      break;
    case 6:
      properDate = addDays(newDate, 6);
      // console.log("This day is Saturday: ", properDate);
      break;
    default:
      properDate = newDate;
    // console.log("This day should be a friday always: ", properDate);
  }
};

export default CorrectRentDay;
