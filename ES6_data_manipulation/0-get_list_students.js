/*
create a function named getListStudents that returns an array of objects.
each object should have three attrsibutes:id (Number), fistName(String), and location(String).
The array contains the following students in order.
Guillaume, id:1, in San Fransisco
James, id:2, in Columbia
Serena, id:5, in San Francisco
*/

export default function getListStudents() {
  const students = [
    {id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    {id: 2, FirstName: 'James', location: 'Columbia' },
    {id: 5, FirstName: 'Serena', location: 'San Francisco' },
  ];
  return students;
}
