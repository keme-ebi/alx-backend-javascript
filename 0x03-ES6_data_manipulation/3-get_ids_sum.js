export default function getStudentIdsSum(students) {
  const ids = students.map((obj) => obj.id);
  const totalIds = ids.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return totalIds;
}
