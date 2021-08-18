import Fortnight from "./calculation/Fortnight";
import Month from "./calculation/Month";
import Week from "./calculation/Week";

// renders component based on which option is selected
const FindRentDateAmount = (data, paymentSelectedOption) => {
  if (paymentSelectedOption.value === 1) {
    return (
      <div className="p-1">
        <h2 className="font-bold font-xl">
          Fortnightly Rent amount and due date:{" "}
        </h2>
        <Fortnight amount={data.NumberFormat} date={data.ReactDatePicker} />
      </div>
    );
  } else if (paymentSelectedOption.value === 2) {
    return (
      <div className="p-1">
        <h2 className="font-bold font-xl">
          Monthly Rent amount and due date:{" "}
        </h2>
        <Month amount={data.NumberFormat} date={data.ReactDatePicker} />
      </div>
    );
  } else {
    return (
      <div className="p-1">
        <h2 className="font-bold font-xl">Weekly Rent amount and due date: </h2>
        <Week amount={data.NumberFormat} date={data.ReactDatePicker} />
      </div>
    );
  }
};

export default FindRentDateAmount;
