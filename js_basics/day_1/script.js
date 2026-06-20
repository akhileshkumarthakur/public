const YOUR_SPREADSHEET_ID = "1-MP54jIxsxXZnlJFfz8QyqHA4TJXCSyJ_6pyND0gG5o"
const YOUR_SHEET_NAME= "SN_Juhu"
const YOUR_API_KEY = "AIzaSyDH7xQaFrwZKJ1uiBCWSnLLzBqs0JDW5Hc"





async function getSheetData() {
  const spreadsheetId = "YOUR_SPREADSHEET_ID";
  const apiKey = "YOUR_API_KEY";
  const sheetName = YOUR_SHEET_NAME;

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.values);
  } catch (error) {
    console.error(error);
  }
}

getSheetData();