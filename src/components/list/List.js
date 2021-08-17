// list to be created from how many times a user chooses for the function to run
// List will add in dates 1, 3, 6, 9 and 12 times
// list will be printed out in an easy to read format
// list will have dates and rent amount
// list of dates will be an array and rent/amount will also be an array together in the list

// first build 3 months, can only be chosen with fortnight/month?

import React from "react";

const List = () => {
  const testList = [
    {
      key: 0,
      amount: 450,
      date: "24/09/2021",
    },
    {
      key: 1,
      amount: 450,
      date: "08/10/2021",
    },
    {
      key: 2,
      amount: 450,
      date: "22/10/2021",
    },
  ];

  const listItems = testList.map((month) => {
    return (
      <div className="p-1 m-1 border-2 border-black rounded-md">
        <ul>
          <li>Rent Payment: {month.key + 1}</li>
          <li>Amount: {month.amount}</li>
          <li>Date: {month.date}</li>
        </ul>
      </div>
    );
  });

  return (
    <div className="font-Rubik place-items-center text-center flex flex-wrap">
      {listItems}
    </div>
  );
};

export default List;
