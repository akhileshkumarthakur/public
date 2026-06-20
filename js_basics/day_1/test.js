const SHEET_ID = '1-MP54jIxsxXZnlJFfz8QyqHA4TJXCSyJ_6pyND0gG5o';
const TAB_NAME = 'SN_Juhu'; // Change to your actual tab name
const API_KEY = 'AIzaSyDH7xQaFrwZKJ1uiBCWSnLLzBqs0JDW5Hc';

// We fetch the entire A to Z columns for that tab
const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(TAB_NAME)}!A:Z?key=${API_KEY}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.table(data.values); // Use console.table for a nice layout!
  })
  .catch(error => {
    console.error("Something stopped the fetch:", error.message);
  });


//   const firstColumn = data.values.map(row => row[0])
//   .then(data => {
//     console.log("Here is your data:");
//     console.table(data.values);
//     const firstColumn = data.values.map(row => row[0]);
//     console.log("First column:", firstColumn);
//   })


