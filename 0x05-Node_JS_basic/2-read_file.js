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
	  firstNames: []
      };
    }
    fields[field].count += 1;
    fields[field].firstNames.push(firstname);
    });

    console.log(`Number of students: ${students.length}`);

    for (const [field, student] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${student.count}. List: ${student.firstNames.join(', ')}`);
     }
  } catch (err) {
      throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
