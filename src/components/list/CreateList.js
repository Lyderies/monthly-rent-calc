import React from "react";

const CreateList = (data, paymentSelectedOption, functionSelectedOption) => {
  // set date and amount
  // push date and amount into list
  // set next date and amount
  // push until run through enough times

  console.log("This is being called from CreateList for Data: ", data);
  console.log(
    "This is being called from CreateList for payment Selected Option: ",
    paymentSelectedOption.value
  );
  console.log(
    "This is being called from CreateList for function Selected Option: ",
    functionSelectedOption.value
  );

  const getData = (data, functionSelectedOption) => {
    for (let i = 0; i < functionSelectedOption.value; i++) {
      //   console.log("This is from getData, Data is: ", data);
      console.log("This is from getData, i is: ", i);
      console.log(
        "This is from getData, function value is: ",
        functionSelectedOption.value
      );
    }
  };
  getData(data, functionSelectedOption);

  return <div></div>;
};

export default CreateList;
