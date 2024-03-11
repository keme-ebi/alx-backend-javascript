export default function getStudentIdsSum(students) {
  const idSum = students.reduce(
    (accumulator, students) => accumulator + students.id,
    0
  );

  return idSum;
}
