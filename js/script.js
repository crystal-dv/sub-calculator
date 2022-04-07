var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
  //console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
  //console.log(subDuration);
});

var updateSubscriptionDiv = function () {
  var monthlyCost = Number(5);
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = Number(subDuration * monthlyCost).toFixed(2);
  result.innerText =
    "You have selected the " +
    subDuration +
    " month " +
    subType +
    " subscription for a total of $" +
    total +
    ".";
};
