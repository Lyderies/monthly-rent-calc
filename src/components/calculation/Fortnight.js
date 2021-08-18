import addDays from "date-fns/addDays";
import { format } from "date-fns";

const Fortnight = (date, amount) => {
  // converts rent amount into variable
  const fortnightAmount = amount * 2;
  // adds 7 days to passed in date
  const newDate = addDays(date, 14);
  // formats date for easier reading
  const formattedDate = format(newDate, "dd/MM/yyyy");

  return (
    fortnightAmount, formattedDate
    // <div>
    //   <section>
    //     <p>Your rent amount is: ${fortnightAmount.toFixed(2)}</p>
    //     <p>Your next rent payment is: {formattedDate}</p>
    //   </section>
    // </div>
  );
};

export default Fortnight;
