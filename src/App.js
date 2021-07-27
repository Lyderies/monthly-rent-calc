// import addDays from "date-fns/addDays"; // for testing only
import { useForm } from "react-hook-form";

// components
// import Fortnight from "./components/calculation/Fortnight";
// import Month from "./components/calculation/Month";
// import Week from "./components/calculation/Week";

function App() {
  // testing variables for week component, temporary
  // const weeklyRent = 225;
  // const fortnightlyRent = 450;
  // const monthlyRent = 900;
  // const getDate = new Date();
  // const testDate = addDays(getDate, 10); // test date for month

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>Rent Calculator</h1>
      <p>Welcome to the rent calculator</p>'
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </div>
      {/* This is weekly: <br />
      <Week amount={weeklyRent} date={getDate} />
      This is fortnightly: <br />
      <Fortnight amount={fortnightlyRent} date={getDate} />
      This is monthly: <br />
      <Month amount={monthlyRent} date={getDate} /> */}
    </div>
  );
}

export default App;
