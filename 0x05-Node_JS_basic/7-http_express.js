const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;
const database = process.argv[2];

async function countStudents(path) {
  try {
    // Read file asynchronously using promises
    const data = await fs.readFile(path, 'utf8');
    // Split data into lines, ignoring empty lines
    const lines = data.split('\n').filter(Boolean);

    // First line is a header, so we process the rest
    const studentData = lines.slice(1);
    const fieldMap = {};

    studentData.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      // Initialize the fieldMap if it doesn't exist for the given field
      if (!fieldMap[field]) {
        fieldMap[field] = {
          count: 0,
          names: [],
        };
      }

      // Update fieldMap
      fieldMap[field].count += 1;
      fieldMap[field].names.push(firstname);
    });

    // Prepare the result output
    let result = `Number of students: ${studentData.length}\n`;

    // Append the number of students in each field and the list of names
    for (const [field, value] of Object.entries(fieldMap)) {
      result += `Number of students in ${field}: ${value.count}. List: ${value.names.join(', ')}`;
    }
    return result;
    // Resolve the promise with the result
  } catch (error) {
    // Reject the promise in case of error
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}); 

app.get('/students', async (req, res) => {
  const text = 'This is the list of our students\n';
  try {
    const students = await countStudents(database);
    res.send(`${text}${students}`);
  } catch (err) {
    res.send('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
