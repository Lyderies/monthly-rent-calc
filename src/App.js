// components
import Fortnight from "./components/calculation/Fortnight";
import Week from "./components/calculation/Week";

function App() {
  // testing variables for week component, temporary
  const rent = 225;
  const getDate = new Date();

  return (
    <div className="App">
      <Week amount={rent} date={getDate} />
      <Fortnight amount={rent} date={getDate} />
    </div>
  );
}

export default App;
