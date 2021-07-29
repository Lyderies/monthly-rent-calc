// import addDays from "date-fns/addDays"; // for testing only
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// components
// import Fortnight from "./components/calculation/Fortnight";
// import Month from "./components/calculation/Month";
// import Week from "./components/calculation/Week";

const defaultValues = {
  ReactDatepicker: new Date(),
};

function App() {
  // testing variables for week component, temporary
  // const weeklyRent = 225;
  // const getDate = new Date();
  // const testDate = addDays(getDate, 10); // test date for month

  const { handleSubmit, control, setValue } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  const onSubmit = (data) => setData(data);

  console.log("This is the data from the form ", data);

  return (
    <div className="App">
      <section>
        <h1>Rent Calculator</h1>
        <p>Welcome to the rent calculator</p>
      </section>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="ReactDatepicker"
            render={({ field: { onChange, value, ref } }) => (
              <ReactDatePicker
                className="border-4 border-black"
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                selected={value}
              />
            )}
          />
          <input type="submit" />
        </form>
      </section>
      {/* This is weekly: <br />
      <Week amount={weeklyRent} date={getDate} />
      This is fortnightly: <br />
      <Fortnight amount={weeklyRent} date={getDate} />
      This is monthly: <br />
      <Month amount={weeklyRent} date={getDate} /> */}
    </div>
  );
}

export default App;
