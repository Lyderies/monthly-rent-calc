// variable for total monthly rent amount
export let monthAmount = 0;

// function to find if the months amount needs to be kept at 4 weeks or increased to 5 weeks
const FindMonthAmount = (monthlyRent, theDay) => {
  if (theDay === "friday") {
    monthAmount = monthlyRent;
    console.log("It did land on a Friday");
  } else {
    monthAmount = monthlyRent * 5;
    console.log("It did not land on a Friday, monthAmount x 5");
  }
};

export default FindMonthAmount;
