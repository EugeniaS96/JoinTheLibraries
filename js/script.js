brthdate.onblur = function () {
  const date = new Date();
  let age = document.getElementById("brthdate").value;
  const diff = dateFns.differenceInYears(date, age);
  console.log(diff);
  if (diff >= 18) {
    alert(`You can register`);
  } else {
    alert(`You are too young`);
  }
};
