// bank desposit
document.getElementById("desp_btn").addEventListener("click", function () {
  const input_dep_value = inputData("input_dep");
  const desposit_val = inputByTagsData("dep_value");
  const total = inputByTagsData("the_total");
  if (isNaN(input_dep_value) === true) {
    alert("Please provide a number");
  } else {
    const desposit = desposit_val + input_dep_value;
    adddToFeild("dep_value", desposit);
    //the total dep
    const totaldep = total + input_dep_value;
    adddToFeild("the_total", totaldep);
  }
});

//bank withdraw
document.getElementById("withdraw_btn").addEventListener("click", function () {
  const input_withdraw_value = inputData("input_withdraw");
  const withdrw_val = inputByTagsData("withdrw_value");
  const total = inputByTagsData("the_total");
  if (isNaN(input_withdraw_value) === true) {
    alert("Please provide a number");
  } else if (input_withdraw_value > total) {
    alert("Please withdraw the amount you have");
  } else if (input_withdraw_value == 0) {
    alert("Please write the amount more than zero");
  } else {
    const withdraw = withdrw_val + input_withdraw_value;
    adddToFeild("withdrw_value", withdraw);
    //the total dep
    const totalwithdrw = total - input_withdraw_value;
    adddToFeild("the_total", totalwithdrw);
  }
});
