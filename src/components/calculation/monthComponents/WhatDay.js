// var to be set from function whatDay, exported to parent function Month
export let theDay;

// after days are added, find which day the new date is and turn it into a string
// exported to parent function Month
const WhatDay = (newDay) => {
  // turn newDay into a string
  switch (newDay) {
    case 0:
      theDay = "Sunday";
      break;
    case 1:
      theDay = "monday";
      break;
    case 2:
      theDay = "tuesday";
      break;
    case 3:
      theDay = "wednesday";
      break;
    case 4:
      theDay = "thursday";
      break;
    case 5:
      theDay = "friday";
      break;
    case 6:
      theDay = "saturday";
      break;
    default:
      console.log(
        "Ooops, something broke in WhatDay function, an incorrect date was added to the app"
      );
  }
};

export default WhatDay;
