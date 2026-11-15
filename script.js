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
    const peopleInput = Number(people.value);
    const customTipInput = Number(customTip.value);  
    if(customTipInput !== 0){
        if(peopleInput === 0){
          const tipAmount = (billInput*customTipInput)/100;
          const totalAmount = billInput + tipAmount;
          tipAmountPerPerson.textContent = tipAmount;
          totalBillPerPerson.textContent = totalAmount;
        }else{
          const tipAmount = ((billInput*customTipInput)/100);
          const totalAmount = (billInput + tipAmount)/peopleInput;
          tipAmountPerPerson.textContent = tipAmount/peopleInput;
          totalBillPerPerson.textContent = totalAmount;
        }
    } else {
    buttons.forEach(button => {
    button.addEventListener("click" , (event)=> {
        event.preventDefault();
        const value = Number(event.target.value);
        if(peopleInput === 0){
          const tipAmount = (billInput*value)/100;
          const totalAmount = billInput + tipAmount;
          tipAmountPerPerson.textContent = tipAmount;
          totalBillPerPerson.textContent = totalAmount;
        }else{
          const tipAmount = ((billInput*value)/100);
          const totalAmount = (billInput + tipAmount)/peopleInput;
          tipAmountPerPerson.textContent = tipAmount/peopleInput;
          totalBillPerPerson.textContent = totalAmount;
        }
    });
  }); 
}
});

