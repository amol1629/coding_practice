/**
 * * Dates in JavaScript :
 */

// Creating a Date Object
const today = new Date(); // Current date and time

// Get Methods
console.log("Today's Date:", today);
console.log("Year:", today.getFullYear()); // Get the full year (e.g., 2024)
console.log("Month (0-indexed):", today.getMonth()); // 0 (January) to 11 (December)
console.log(
  "Month (Human-readable):",
  today.toLocaleString("en-US", { month: "long" })
);
console.log("Day of the Month:", today.getDate());
console.log("Day of the Week (0-Sunday):", today.getDay());
console.log("Hours (24-hour clock):", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());
console.log("Milliseconds:", today.getMilliseconds());
console.log("Time Zone Offset:", today.getTimezoneOffset());

// Set Methods
today.setFullYear(2025); // Set the year
today.setMonth(6); // Set the month (July)
today.setDate(15); // Set the day of the month
today.setHours(10); // Set the hours
today.setMinutes(30); // Set the minutes
today.setSeconds(0); // Set the seconds
console.log("Updated Date:", today);

// Other Useful Methods
console.log("Time in milliseconds since 1970-01-01:", today.getTime()); // Milliseconds since the Unix epoch
console.log("Date in ISO 8601 format:", today.toISOString());
console.log("Date as a string:", today.toString());
console.log("Formatted date:", today.toLocaleDateString());
console.log("Formatted date and time:", today.toLocaleString());
