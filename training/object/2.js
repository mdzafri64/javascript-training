let studentData = {
  studentName: "zafri",
  isMoniter: false,
  roll: 20,
  studentSubject: "science",
  class: "12th",
  deciplineType: "very good",
};
studentData.studentName = "md zafri";
studentData.class = "11th";
if (studentData.isMoniter == true) {
  studentData.deciplineType = "excelent";
}
console.log(studentData);
