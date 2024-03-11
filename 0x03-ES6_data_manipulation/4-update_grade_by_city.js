export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const grading = newGrades.find((grade) => grade.studentId === obj.id);
      return {
        ...obj,
        grade: grading ? grading.grade : 'N/A',
      };
    });
}
