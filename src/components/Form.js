// import addDays from "date-fns/addDays"; // for testing only
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import NumberFormat from "react-number-format";

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

  const [data, setData] = useState({
    ReactDatePicker: getDate,
    NumberFormat: 0,
  }); // state for form data

  const onSubmit = (data) => setData(data);

  console.log("This is the data from the form ", data);

  return (
    <div className="">
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
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
                  className="border-4 border-black text-center p-2 rounded-md m-2"
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
          <section>
            <label>Please enter your weekly rent payment</label>
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
          <section>
            <input className="" type="submit" />
          </section>
        </form>
      </section>
      This is weekly: <br />
      <Week amount={data.NumberFormat} date={data.ReactDatePicker} />
      This is fortnightly: <br />
      <Fortnight amount={data.NumberFormat} date={data.ReactDatePicker} />
      This is monthly: <br />
      <Month amount={data.NumberFormat} date={data.ReactDatePicker} />
    </div>
  );
}

export default Form;
