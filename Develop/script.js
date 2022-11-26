// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// stores timestamp
let unix = dayjs().unix();

// converts unix timestamp to mm/dd/yyyy format
let unixFormt = dayjs.unix(unix).format("dddd, MMMM");

// todo: delete later (testing purposes)
// console.log(unix);
// console.log(unixFormt);

let ordinals = ["st", "nd", "rd", "th"];
let day = dayjs.unix(unix).format("D");
if (day[day.length - 1] === "1") {
  day += ordinals[0];
} else if (day[day.length - 1] === "2") {
  day += ordinals[1];
} else if (day[day.length - 1] === "3") {
  day += ordinals[2];
} else {
  day += ordinals[3];
}

let currentDay = document.querySelector("#currentDay");
currentDay.textContent = `${unixFormt} ${day}`;

// gets current hour to set color onto hour elements
let currentHour = Number(dayjs.unix(unix).format("H"));
// console.log(currentHour);

let hour9El = document.querySelector("#hour-9");
let hour10El = document.querySelector("#hour-10");
let hour11El = document.querySelector("#hour-11");
let hour12El = document.querySelector("#hour-12");
let hour1El = document.querySelector("#hour-1");
let hour2El = document.querySelector("#hour-2");
let hour3El = document.querySelector("#hour-3");
let hour4El = document.querySelector("#hour-4");
let hour5El = document.querySelector("#hour-5");

let hourEl = [
  {
    hour: 9,
    element: hour9El,
  },
  {
    hour: 10,
    element: hour10El,
  },
  {
    hour: 11,
    element: hour11El,
  },
  {
    hour: 12,
    element: hour12El,
  },
  {
    hour: 13,
    element: hour1El,
  },
  {
    hour: 14,
    element: hour2El,
  },
  {
    hour: 15,
    element: hour3El,
  },
  {
    hour: 16,
    element: hour4El,
  },
  {
    hour: 17,
    element: hour5El,
  },
];

// add class attribute: past, present, future accordingly- color hours
for (let i = 0; i < hourEl.length; i++) {
  if (hourEl[i].hour === currentHour) {
    hourEl[i].element.setAttribute("class", "row time-block present");
    // console.log(`${hourEl[i].hour} ${hourEl[i].meridiem}`);
  } else if (hourEl[i].hour > currentHour) {
    hourEl[i].element.setAttribute("class", "row time-block future");
    // console.log(`${hourEl[i].hour} ${hourEl[i].meridiem}`);
  } else if (hourEl[i].hour < currentHour) {
    hourEl[i].element.setAttribute("class", "row time-block past");
    // console.log(`${hourEl[i].hour} ${hourEl[i].meridiem}`);
  }
}

let textHour5 = document.querySelector("#textHour5");
let saveBtn5 = document.querySelector("#saveBtn5");
saveBtn5.addEventListener("click", function () {});

function init() {
  if (localStorage.getItem("hour5") === null) {
    localStorage.setItem("hour5", JSON.stringify());
  } else {
    let localStorageObj = JSON.parse(localStorage.getItem("hour5"));
    textHour5.textContent = localStorageObj;
  }
}

saveBtn5.addEventListener("click", function () {
  localStorage.setItem("hour5", JSON.stringify(textHour5.value));
});

// init();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
