// components
import Fortnight from "./components/calculation/Fortnight";
import Month from "./components/calculation/month/Month";
import Week from "./components/calculation/Week";

function App() {
  // testing variables for week component, temporary
  const weeklyRent = 225;
  const fortnightlyRent = 450;
  const monthlyRent = 900;
  const getDate = new Date();

  return (
    <div className="App">
      This is weekly: <br />
      <Week amount={weeklyRent} date={getDate} />
      This is fortnightly: <br />
      <Fortnight amount={fortnightlyRent} date={getDate} />
      This is monthly: <br />
      <Month amount={monthlyRent} date={getDate} />
    </div>
  );
}

export default App;
