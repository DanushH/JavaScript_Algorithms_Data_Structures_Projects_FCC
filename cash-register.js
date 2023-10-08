//floating point imprecision
const NOTES = {
  "ONE HUNDRED": 10000,
  "TWENTY": 2000,
  "TEN": 1000,
  "FIVE": 500,
  "ONE": 100,
  "QUARTER": 25,
  "DIME": 10,
  "NICKEL": 5,
  "PENNY": 1,
}

function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let cid_total = 0;
  
  for (let value of cid) {
    cid_total += value[1] * 100;
  }
  
  if (change > cid_total) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else if (change === cid_total) {
    return {status: "CLOSED", change: cid};
  }
  else {
    let result = [];
    cid = cid.reverse();
    
    for (let value of cid) {
      //init holder array
      let holder = [value[0], 0];
      
      value[1] = Math.ceil(value[1] * 100);
      
      while (change >= NOTES[value[0]] && value[1] > 0) {
        change -= NOTES[value[0]];
        value[1] -= NOTES[value[0]];
        holder[1] += NOTES[value[0]] / 100;
      }
      
      if (holder[1] > 0) {
        result.push(holder);
      }
    } //for
    
    if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    return {status: "OPEN", change: result};
  } //else
  
} //function

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);