const form = document.querySelector("form");
const bill = document.querySelector("#bill");
const customTip = document.querySelector("#customInput");
const people = document.querySelector("#people");
const tipAmountPerPerson = document.querySelector(".tipAmount");
const totalBillPerPerson = document.querySelector(".total");
const buttons = document.querySelectorAll(".tip");
form.addEventListener("input", (event)=> {
    event.preventDefault();
    const billInput = Number(bill.value);   
    console.log(billInput);
    buttons.forEach(button => {
    button.addEventListener("click" , (event)=> {
        event.preventDefault();
        const value = Number(event.target.value);
    });
  });
  const customTipInput = Number(customTip.value);
  console.log(customTipInput);
  const peopleInput = Number(people.value);
  console.log(peopleInput);
});

