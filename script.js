// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// currentDay div
let currentDay = document.querySelector("#currentDay");

// stores timestamp
let unix = dayjs().unix();

// converts unix timestamp to mm/dd/yyyy format
let unixFormt = dayjs.unix(unix).format("dddd, MMMM");

// stores day of month
let day = dayjs.unix(unix).format("D");

// stores ordinals to add at end of day
let ordinals = ["st", "nd", "rd", "th"];

// gets current hour to set color onto hour elements
let currentHour = Number(dayjs.unix(unix).format("H"));

let hour9El = document.querySelector("#hour-9");
let hour10El = document.querySelector("#hour-10");
let hour11El = document.querySelector("#hour-11");
let hour12El = document.querySelector("#hour-12");
let hour1El = document.querySelector("#hour-1");
let hour2El = document.querySelector("#hour-2");
let hour3El = document.querySelector("#hour-3");
let hour4El = document.querySelector("#hour-4");
let hour5El = document.querySelector("#hour-5");

let textHour9El = document.querySelector("#textHour-9");
let textHour10El = document.querySelector("#textHour-10");
let textHour11El = document.querySelector("#textHour-11");
let textHour12El = document.querySelector("#textHour-12");
let textHour1El = document.querySelector("#textHour-1");
let textHour2El = document.querySelector("#textHour-2");
let textHour3El = document.querySelector("#textHour-3");
let textHour4El = document.querySelector("#textHour-4");
let textHour5El = document.querySelector("#textHour-5");

let saveBtn9El = document.querySelector("#saveBtn-9");
let saveBtn10El = document.querySelector("#saveBtn-10");
let saveBtn11El = document.querySelector("#saveBtn-11");
let saveBtn12El = document.querySelector("#saveBtn-12");
let saveBtn1El = document.querySelector("#saveBtn-1");
let saveBtn2El = document.querySelector("#saveBtn-2");
let saveBtn3El = document.querySelector("#saveBtn-3");
let saveBtn4El = document.querySelector("#saveBtn-4");
let saveBtn5El = document.querySelector("#saveBtn-5");

let hours = [
  {
    hour: 9,
    element: hour9El,
    textArea: textHour9El,
    button: saveBtn9El,
    keyName: "hour9",
  },
  {
    hour: 10,
    element: hour10El,
    textArea: textHour10El,
    button: saveBtn10El,
    keyName: "hour10",
  },
  {
    hour: 11,
    element: hour11El,
    textArea: textHour11El,
    button: saveBtn11El,
    keyName: "hour11",
  },
  {
    hour: 12,
    element: hour12El,
    textArea: textHour12El,
    button: saveBtn12El,
    keyName: "hour12",
  },
  {
    hour: 13,
    element: hour1El,
    textArea: textHour1El,
    button: saveBtn1El,
    keyName: "hour1",
  },
  {
    hour: 14,
    element: hour2El,
    textArea: textHour2El,
    button: saveBtn2El,
    keyName: "hour2",
  },
  {
    hour: 15,
    element: hour3El,
    textArea: textHour3El,
    button: saveBtn3El,
    keyName: "hour3",
  },
  {
    hour: 16,
    element: hour4El,
    textArea: textHour4El,
    button: saveBtn4El,
    keyName: "hour4",
  },
  {
    hour: 17,
    element: hour5El,
    textArea: textHour5El,
    button: saveBtn5El,
    keyName: "hour5",
  },
];

// adds ordinal to end of current day
// displays current date
function displayDate() {
  if (day[day.length - 1] === "1") {
    day += ordinals[0];
  } else if (day[day.length - 1] === "2") {
    day += ordinals[1];
  } else if (day[day.length - 1] === "3") {
    day += ordinals[2];
  } else {
    day += ordinals[3];
  }

  currentDay.textContent = `${unixFormt} ${day}`;
}

// checks if schedule stored events in localStorage
// if so, automatically populates
// if not, it creates localStorage with keyName
function populate(hour) {
  if (localStorage.getItem(hour.keyName) === null) {
    localStorage.setItem(hour.keyName, JSON.stringify(""));
  } else {
    let localStorageStr = JSON.parse(localStorage.getItem(hour.keyName));
    hour.textArea.textContent = localStorageStr;
  }
}

// adds listener to save buttons
function addListener(hour) {
  hour.button.addEventListener("click", function () {
    localStorage.setItem(hour.keyName, JSON.stringify(hour.textArea.value));
  });
}

// color schedule
function colorSchedule(hours) {
  if (hours.hour === currentHour) {
    hours.element.setAttribute("class", "row time-block present");
  } else if (hours.hour > currentHour) {
    hours.element.setAttribute("class", "row time-block future");
  } else if (hours.hour < currentHour) {
    hours.element.setAttribute("class", "row time-block past");
  }
}

$(function () {
  displayDate();
  for (let i = 0; i < hours.length; i++) {
    colorSchedule(hours[i]);
    populate(hours[i]);
    addListener(hours[i]);
  }
});
