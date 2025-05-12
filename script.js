function analyzeGrades() {
  let english = parseFloat(document.getElementById('english').value);
  let science = parseFloat(document.getElementById('science').value);
  let social = parseFloat(document.getElementById('social').value);

  if (isNaN(english) || isNaN(science) || isNaN(social)) {
    document.getElementById('result').innerHTML = "<span class='text-danger'>Please enter all grades correctly.</span>";
    return;
  }

  let average = Math.round(((english + science + social) / 3) * 100) / 100;

  let rating = "";
  if (average >= 94 && average <= 100) {
    rating = "Excellent";
  } else if (average >= 87 && average < 94) {
    rating = "Above Satisfactory";
  } else if (average >= 80 && average < 87) {
    rating = "Satisfactory";
  } else if (average >= 75 && average < 80) {
    rating = "Needs Improvement";
  } else if (average >= 70 && average < 75) {
    rating = "Poor";
  } else {
    rating = "Failing";
  }

  document.getElementById('result').innerHTML = 
    `Average Grade: <strong>${average}</strong><br>Rating: <strong>${rating}</strong>`;
}