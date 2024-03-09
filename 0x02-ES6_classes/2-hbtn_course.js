export default class HolbertonCourse {
  constructor(name, length, students) {
    this.setAttributeName(name);
    this.setAttributeLength(length);
    this.setAttributeStudents(students);
  }

  // getter and setter for name attribute
  getAttributeName() {
    return this.name;
  }
  setAttributeName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.name = name;
  }

  // getter and setter for length attribute
  getAttributeLength() {
    return this.length;
  }
  setAttributeLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.length = length;
  }

  // getter and setter for name attribute
  getAttributeStudents() {
    return this.students;
  }
  setAttributeStudents(students) {
    if (
      !Array.isArray(students) ||
      !students.every((item) => typeof item === 'string')
    ) {
      throw new TypeError('Students must be an array of string');
    }
    this.students = students;
  }
}
