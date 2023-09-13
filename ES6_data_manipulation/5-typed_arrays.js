/*
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.
It should accept three arguments: length (Number), position (Number), and value (Number).
If adding the value is not possible the error Position outside range should be thrown.
*/

export default function updateStudentGradeByCity(studentsList, city, newGrades) {
    const studentsFromCity = studentsList.filter((student) => student.location === city);
  
    const studentsWithNewGrade = studentsFromCity.map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
  
      let grade;
      if (newGrade) {
        grade = newGrade.grade;
      } else {
        grade = 'N/A';
      }
  
      return { ...student, grade };
    });
    return studentsWithNewGrade;
  }
  