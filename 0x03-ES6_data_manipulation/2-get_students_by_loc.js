export default function getStudentsByLocation(students, city) {
  const studentsArray = students;
  const locationArray = studentsArray.filter((obj) => obj.location === city);

  return locationArray;
}
