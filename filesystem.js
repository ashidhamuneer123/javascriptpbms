const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the path to the file
const filePath = path.join(__dirname, 'output.txt');

// Counter to keep track of the number of writes
let writeCounter = 0;

// Middleware to write the current date and time to the file
app.use((req, res, next) => {
  // Check if the counter has reached 10
  if (writeCounter < 10) {
    // Get the current date and time
    const currentDate = new Date().toLocaleString();

    // Append the date and time to the file
    fs.appendFileSync(filePath, `${currentDate}\n`);

    // Increment the counter
    writeCounter++;

    // Log the write to the console
    console.log(`Write ${writeCounter}: ${currentDate}`);

    // Wait for 2 seconds before moving to the next write
    setTimeout(next, 2000);
  } else {
    // If 10 writes are completed, stop the server
    console.log('Writes completed. Server shutting down.');
    res.send('Writes completed. Server shutting down.');
    process.exit(0);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
