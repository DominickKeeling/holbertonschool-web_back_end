/*
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade
It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.
newGrades is an array of objects with this format:
*/
import getListStudents from './1-get_list_students';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    } else {
      return { ...student, grade: 'N/A' };
    }
  });

  return updatedStudents;
}
