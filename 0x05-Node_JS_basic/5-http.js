const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;
const database = process.argv[2];

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(Boolean);
    const students = lines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = {
          count: 0,
          names: [],
        };
      }
      fields[field].count += 1;
      fields[field].names.push(firstname);
    });

    console.log(`Number of students: ${students.length}`);

    for (const [field, value] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${value.count}. List: ${value.names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(database);
      res.end(students);
    } catch (err) {
        res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname);

module.exports = app;
