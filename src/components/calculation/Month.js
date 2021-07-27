import React from "react";
import addDays from "date-fns/addDays";
import { format } from "date-fns";

// month component will need to work out if next rent payment is under 4 weeks add 1 more week,
// above scenario -- if rent goes out on fridays, in 4 weeks it lands on a day that is not a friday add
// enough days to make it go to nex friday
// functionality for calculation for added months -- future code!

const Month = (props) => {
  const { date, amount } = props;

  // converts rent amount into variable
  const weekAmount = amount * 4;
  // adds 7 days to passed in date
  const newDate = addDays(date, 28);
  // formats date for easier reading
  const formattedDate = format(newDate, "dd/MM/yyyy");

  return (
    <div>
      <section>
        <p>Your rent amount is: ${weekAmount}</p>
        <p>Your next rent payment is: {formattedDate}</p>
      </section>
    </div>
  );
};

export default Month;
