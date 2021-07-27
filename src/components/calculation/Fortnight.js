import React from "react";
import addDays from "date-fns/addDays";
import { format } from "date-fns";

const Fortnight = (props) => {
  const { date, amount } = props;

  // converts rent amount into variable
  const fortnightAmount = amount;
  // adds 7 days to passed in date
  const newDate = addDays(date, 14);
  // formats date for easier reading
  const formattedDate = format(newDate, "dd/MM/yyyy");

  return (
    <div>
      <section>
        <p>Your rent amount is: ${fortnightAmount}</p>
        <p>Your next rent payment is: {formattedDate}</p>
      </section>
    </div>
  );
};

export default Fortnight;
