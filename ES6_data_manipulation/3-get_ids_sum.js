/*
Create a function getStudentIdsSum that returns the sum of all the students ids.
It should accept a list of students( from getListStudents) as a parameter.
You must use the reduce function on the array.
*/

import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const sumOfStudents = getListStudentIds(students);
  return sumOfStudents.reduce((sum, current) => sum + current, 0);
}
