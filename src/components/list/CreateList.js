import addDays from "date-fns/addDays";
import { format } from "date-fns";

// Components
import WhatDay, { theDay } from "../calculation/monthComponents/WhatDay";
import FindMonthAmount, {
  monthAmount,
} from "../calculation/monthComponents/FindMonthAmount";
import CorrectRentDay, {
  properDate,
} from "../calculation/monthComponents/CorrectRentDay";

// List of dates for calculator
export let List = [];

// create list will do the below:
// set date and amount
// push date and amount into list
// set next date and amount
// push until run through enough times
const CreateList = (data, paymentSelectedOption, functionSelectedOption) => {
  // console.log("This is being called from CreateList for Data: ", data);
  // console.log(
  //   "This is being called from CreateList for payment Selected Option: ",
  //   paymentSelectedOption.value
  // );
  // console.log(
  //   "This is being called from CreateList for function Selected Option: ",
  //   functionSelectedOption.value
  // );

  // variables for getDate function
  let date = data.ReactDatePicker;
  let amount = data.NumberFormat;
  let finalDate = date;
  let finalAmount = amount;

  // function gets the dates and puts them into List, this will run set amount of times from teh form
  const getDate = (data, functionSelectedOption, paymentSelectedOption) => {
    // loop will add dates to list to be printed onto the screen
    for (let i = 0; i < functionSelectedOption.value; i++) {
      // console.log("What is the paymentSelectedOption: ", paymentSelectedOption);
      const key = i;

      // console.log("Get data has started");
      // console.log("for statement has started");

      if (paymentSelectedOption.value === 1) {
        // statement for fortnight choice from form
        // console.log("Fortnightly if statement is called");
        // converts rent amount into variable
        finalAmount = amount * 2;
        // adds 7 days to passed in date
        const newDate = addDays(date, 14);
        // formats date for easier reading
        date = newDate;
        finalDate = format(newDate, "dd/MM/yyyy");
      } else if (paymentSelectedOption.value === 2) {
        // statement for monthly choice from form
        // console.log("Monthly if statement is called");
        // variable from input, rent cost for the month
        const monthlyRent = amount;

        // adds 28 days to passed date -- new date now used to find out true date
        const newDate = addDays(date, 28);

        // gets day from new date
        const newDay = newDate.getDay();
        // find which day newDay is and turn it into a string
        WhatDay(newDay, theDay);

        // find the months rent amount
        FindMonthAmount(monthlyRent, monthAmount);

        // find the correct rent payment date
        CorrectRentDay(newDay, newDate, properDate);

        // formats date for easier reading -- will format true date
        finalDate = format(properDate, "dd/MM/yyyy");
        date = properDate;
        finalAmount = monthAmount;
      } else {
        // statement for weekly choice from form
        // console.log("else statement is being called");
        finalAmount = amount * 1;
        // adds 7 days to passed in date
        const newDate = addDays(date, 7);
        // formats date for easier reading
        date = newDate;
        finalDate = format(newDate, "dd/MM/yyyy");
      }
      // console.log("if statement has finished");

      List.push({ key, finalDate, finalAmount });
      //   console.log("This is from getData, Data is: ", data);
      //   console.log("This is from getData, i is: ", i);
      //   console.log(
      //     "This is from getData, function value is: ",
      //     functionSelectedOption.value
      //   );
    }
  };
  getDate(data, functionSelectedOption, paymentSelectedOption);
  // console.log("This is the List from CreateList: ", List);

  return List;
};

export default CreateList;
