import React from "react";
import addDays from "date-fns/addDays";
import { format } from "date-fns";

const Week = (props) => {
  const { date, amount } = props;

  // converts rent amount into variable
  const weekAmount = amount * 1;
  // adds 7 days to passed in date
  const newDate = addDays(date, 7);
  // formats date for easier reading
  const formattedDate = format(newDate, "dd/MM/yyyy");

  console.log("Weekly rent is ", weekAmount);

  return (
    <div>
      <section>
        <p>Your rent amount is: ${weekAmount}</p>
        <p>Your next rent payment is: {formattedDate}</p>
      </section>
    </div>
  );
};

export default Week;
