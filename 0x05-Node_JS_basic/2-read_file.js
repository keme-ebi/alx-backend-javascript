const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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

module.exports = countStudents;
