
// Pass or Fail Program

let marks = 75;
let grade = "";

if (marks >= 80) {
    grade = "A+";                       // Your Grade: A+
}
else if (marks >= 70 && marks < 80) {
    grade = "A";                        // Your Grade: A
}
else if (marks >= 60 && marks < 70) {
    grade = "B";                        // Your Grade: B
}
else if (marks >= 50 && marks < 60) {
    grade = "C";                        // Your Grade: C
}
else {
    grade = "Fail";                     // Your Grade: Fail
}

console.log("Your Grade: " + grade);