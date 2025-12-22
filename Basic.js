// ===============================
// JavaScript Basics Practical
// ===============================

// ----- Variable Declarations -----
var studentName = "Roshani Sonar";   // var (old way)
let course = "IT";                  // let (recommended)
const college = "Tapi Diploma Engineering College"; // const (fixed value)

// ----- Data Types Examples -----

// 1. String
let language = "JavaScript";

// 2. Number
let semester = 3;

// 3. Boolean
let isStudent = true;

// 4. Undefined
let projectStatus;

// 5. Null
let internship = null;

// 6. Object
let studentDetails = {
    name: "Roshani",
    branch: "IT",
    skills: ["HTML", "CSS", "JavaScript"]
};

// 7. Array
let technologies = ["HTML", "CSS", "JavaScript"];

// ----- Template Literal Example -----
let message = `Hello, my name is ${studentName}.
I am studying ${course}.
I am learning ${language} for web development.`;

// ----- Output -----
console.log("Student Name:", studentName);
console.log("College:", college);
console.log("Is Student:", isStudent);
console.log("Project Status:", projectStatus);
console.log("Internship:", internship);
console.log("Student Details:", studentDetails);
console.log("Technologies:", technologies);
console.log("Message:", message);
