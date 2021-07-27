import React from "react";
import addDays from "date-fns/addDays";

const Week = (props) => {
  const { date, amount } = props;

  console.log("The rent amount is: ", amount, "The date is: ", date);

  let newDate = addDays(date, 7);
  console.log(newDate);

  return (
    <>
      <section>
        <p></p>
      </section>
    </>
  );
};

export default Week;
