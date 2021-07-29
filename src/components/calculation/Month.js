import React from "react";
import addDays from "date-fns/addDays";
import { format } from "date-fns";
import WhatDay, { theDay } from "./monthComponents/WhatDay";
import FindMonthAmount, {
  monthAmount,
} from "./monthComponents/FindMonthAmount";
import CorrectRentDay, { properDate } from "./monthComponents/CorrectRentDay";

// month component will need to work out if next rent payment is under 4 weeks add 1 more week,
// above scenario -- if rent goes out on fridays, in 4 weeks it lands on a day that is not a friday add
// enough days to make it go to nex friday
// functionality for calculation for added months -- future code!

const Month = (props) => {
  const { date, amount } = props;

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
  const formattedDate = format(properDate, "dd/MM/yyyy");

  return (
    <div>
      <section>
        <p>Your rent amount is: ${monthAmount.toFixed(2)}</p>
        <p>Your next rent payment is: {formattedDate}</p>
      </section>
    </div>
  );
};

export default Month;
