// components
import Fortnight from "./components/calculation/Fortnight";
import Month from "./components/calculation/Month";
import Week from "./components/calculation/Week";

function App() {
  // testing variables for week component, temporary
  const rent = 225;
  const getDate = new Date();

  return (
    <div className="App">
      This is weekly: <br />
      <Week amount={rent} date={getDate} />
      This is fortnightly: <br />
      <Fortnight amount={rent} date={getDate} />
      This is monthly: <br />
      <Month amount={rent} date={getDate} />
    </div>
  );
}

export default App;
