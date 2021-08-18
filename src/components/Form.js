import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import NumberFormat from "react-number-format";
import Select from "react-select";

// styling
import "react-datepicker/dist/react-datepicker.css"; // automatic styling for the date picker

// components
// import Fortnight from "./calculation/Fortnight";
// import Month from "./calculation/Month";
// import Week from "./calculation/Week";
import CreateList from "./list/CreateList";

// will set the default value for date picker to users current date
const getDate = new Date();

// sets default values for the form
const defaultValues = {
  ReactDatePicker: getDate,
  NumberFormat: 0,
};

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues }); // implements react hook form

  // options for react select payment
  const paymentOptions = [
    { value: 0, label: "Weekly" },
    { value: 1, label: "Fortnightly" },
    { value: 2, label: "Monthly" },
  ];

  // options for react select functions
  const functionOptions = [
    { value: 1, label: "1" },
    { value: 3, label: "3" },
    { value: 6, label: "6" },
    { value: 9, label: "9" },
    { value: 12, label: "12" },
  ];

  // state to choose which option is selected for rental payment, default is weekly
  const [paymentSelectedOption, setPaymentSelectedOption] = useState(
    paymentOptions[0]
  );

  // state to choose which option is selected for rental payments being worked out in the CreateList function, default is 1
  const [functionSelectedOption, setFunctionSelectedOption] = useState(
    functionOptions[0]
  );

  const [data, setData] = useState({
    ReactDatePicker: getDate,
    NumberFormat: 0,
  }); // state for form data

  // submit function for form, will send data to CreateList
  const onSubmit = (data) => {
    setData(data);
    console.log("Submit button has been clicked");
    CreateList(data, paymentSelectedOption, functionSelectedOption);
  };

  console.log("Form Data is: ", data);

  // // renders component based on which option is selected
  // const findRentDateAmount = (data, paymentSelectedOption) => {
  //   if (paymentSelectedOption.value === 1) {
  //     return (
  //       <div className="p-1">
  //         <h2 className="font-bold font-xl">
  //           Fortnightly Rent amount and due date:{" "}
  //         </h2>
  //         <Fortnight amount={data.NumberFormat} date={data.ReactDatePicker} />
  //       </div>
  //     );
  //   } else if (paymentSelectedOption.value === 2) {
  //     return (
  //       <div className="p-1">
  //         <h2 className="font-bold font-xl">
  //           Monthly Rent amount and due date:{" "}
  //         </h2>
  //         <Month amount={data.NumberFormat} date={data.ReactDatePicker} />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="p-1">
  //         <h2 className="font-bold font-xl">
  //           Weekly Rent amount and due date:{" "}
  //         </h2>
  //         <Week amount={data.NumberFormat} date={data.ReactDatePicker} />
  //       </div>
  //     );
  //   }
  // };

  //   console.log("This is the data from the form ", paymentSelectedOption.value);
  return (
    <div className="font-Rubik place-items-center text-center">
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="p-1 ">
            <label>What is your rental payment?</label>
            {/* Controller for rent payment time - remove comment for production */}
            <Controller
              control={control}
              name="ReactSelectPayment"
              render={() => (
                <Select
                  defaultValue={paymentSelectedOption}
                  onChange={setPaymentSelectedOption}
                  options={paymentOptions}
                />
              )}
            />
          </section>
          <section className="">
            <label>Please insert your next rent payment</label>
            {/* Controller for dates - remove comment for production */}
            <Controller
              control={control}
              name="ReactDatePicker"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value, ref } }) => (
                <ReactDatePicker
                  className="border-4 border-black text-center p-2 rounded-md m-2 cursor-pointer"
                  dateFormat="dd/MM/yyyy"
                  onChange={onChange}
                  selected={value}
                />
              )}
            />
            {errors.ReactDatePicker === "required" && (
              <p className="">This is required</p>
            )}
          </section>
          <section className="p-1">
            <label>Please enter your weekly rent payment</label>
            {/* Controller for rent money amount - remove comment for production */}
            <Controller
              control={control}
              name="NumberFormat"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <NumberFormat
                  className="border-4 border-black text-center p-2 rounded-md m-2"
                  thousandSeparator={false}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {errors.NumberFormat === "required" && (
              <p className="">This is required</p>
            )}
          </section>
          <section className="p-1 ">
            <label>How many rental payments would you like worked out?</label>
            {/* Controller for CreateList function - remove comment for production */}
            <Controller
              control={control}
              name="ReactSelectFunction"
              render={() => (
                <Select
                  defaultValue={functionSelectedOption}
                  onChange={setFunctionSelectedOption}
                  options={functionOptions}
                />
              )}
            />
          </section>
          <section className="p-1">
            <input
              className="border-2 border-black p-2 m-1 cursor-pointer rounded-md w-2/3 font-bold"
              type="submit"
              value="Submit"
            />
          </section>
        </form>
      </section>
      {/* <section>
        {findRentDateAmount(data, paymentSelectedOption)}
      </section> */}
    </div>
  );
}

export default Form;
