import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import NumberFormat from "react-number-format";
import Select from "react-select";

// styling
import "react-datepicker/dist/react-datepicker.css"; // automatic styling for the date picker

// components
import Fortnight from "./calculation/Fortnight";
import Month from "./calculation/Month";
import Week from "./calculation/Week";

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

  // options for react select
  const options = [
    { value: 0, label: "Weekly" },
    { value: 1, label: "Fortnightly" },
    { value: 2, label: "Monthly" },
  ];

  const [data, setData] = useState({
    ReactDatePicker: getDate,
    NumberFormat: 0,
  }); // state for form data

  // state to choose which option is selected for rental payment, default is weekly
  const [selectedOption, setSelectedOption] = useState(options[0]);

  // submit function for form
  const onSubmit = (data) => {
    setData(data);
  };

  // renders component based on which option is selected
  const findRentDateAmount = (data, selectedOption) => {
    if (selectedOption.value === 1) {
      return (
        <div className="p-1">
          <h2>Fortnightly Rent amount and due date: </h2>
          <Fortnight amount={data.NumberFormat} date={data.ReactDatePicker} />
        </div>
      );
    } else if (selectedOption.value === 2) {
      return (
        <div className="p-1">
          <h2>Monthly Rent amount and due date: </h2>
          <Month amount={data.NumberFormat} date={data.ReactDatePicker} />
        </div>
      );
    } else {
      return (
        <div className="p-1">
          <h2>Weekly Rent amount and due date: </h2>
          <Week amount={data.NumberFormat} date={data.ReactDatePicker} />
        </div>
      );
    }
  };

  //   console.log("This is the data from the form ", selectedOption.value);
  return (
    <div className="font-Rubik place-items-center text-center">
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="p-1 ">
            <label>What is your rental payment?</label>
            {/* Controller for rent payment time - remove comment for production */}
            <Controller
              control={control}
              name="ReactSelect"
              render={() => (
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              )}
            />
          </section>
          <section className="cursor-pointer">
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
          <section className="p-1">
            <input
              className="border-2 border-black p-2 m-1 cursor-pointer rounded-md w-2/3 font-bold"
              type="submit"
            />
          </section>
        </form>
      </section>
      <section className="p-2">
        {findRentDateAmount(data, selectedOption)}
      </section>
    </div>
  );
}

export default Form;
