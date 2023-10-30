//Input Date + Fetch Day
function getDayName(dateStr) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const date = new Date(dateStr);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }
  
  function isValidDateFormat(dateStr) {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return dateRegex.test(dateStr);
  }
  
  function isValidNumberOfDates(num) {
    return !isNaN(num) && num > 0;
  }
  
  function getDayOfTheWeek() {
    let numDates;
    do {
      numDates = parseInt(prompt("Enter the number of dates to check:"));
      if (!isValidNumberOfDates(numDates)) {
        alert("Invalid number. Please enter a positive integer.");
      }
    } while (!isValidNumberOfDates(numDates));
  
    for (let i = 0; i < numDates; i++) {
      let dateStr;
      do {
        dateStr = prompt("Enter a date in MM/DD/YYYY format:");
        if (!isValidDateFormat(dateStr)) {
          alert("Invalid date format. Please use MM/DD/YYYY format.");
        }
      } while (!isValidDateFormat(dateStr));
  
      const dayName = getDayName(dateStr);
      console.log("The day of the week for " + dateStr + " is " + dayName);
    }
  }
  
  
  getDayOfTheWeek();
  