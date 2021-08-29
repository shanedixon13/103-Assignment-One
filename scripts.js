var myName = "Shane";
var isStudent = true;
var myAge = 26;
var myEmail = "shanedixon13@gmail.com";
var myPassword = "PasswordExample";
var myCareer = "Software Engineer";
var isVeteran = true;
var serviceBranch="Marine Corps"
var monthlySal = 3000;
var annualSal = monthlySal * 12;
var isMarried = true;
var spouseName = "Meghan";
var spouseAge = "29";
var hasChild = true;
var childName = "Patton";
var childAge = "5";
var myCountry = "USA";
var myState = "Arkansas";
var myCounty = "Lonoke County";
var myCity = "Lonoke";

var allInfo = `
<p>Name: ${myName}</p>
<p>Student: ${isStudent}</p>
<p>Age: ${myAge}</p>
<p>Email: ${myEmail}</p>
<p>Password: ${myPassword}</p>
<p>Career: ${myCareer}</p>
<p>Veteran: ${isVeteran}</p>
<p>Branch of Service: ${serviceBranch}</p>
<p>Gross Monthly Income: $${monthlySal}</p>
<p>Gross Annual Income: $${annualSal}</p>
<p>Married: ${isMarried}</p>
<p>Spouse Name: ${spouseName}</p>
<p>Spouse Age: ${spouseAge}</p>
<p>Children: ${hasChild}</p>
<p>Child Name: ${childName}</p>
<p>Child Age: ${childAge}</p>
<p>Country: ${myCountry}</p>
<p>State: ${myState}</p>
<p>County: ${myCounty}</p>
<p>City: ${myCity}</p>
`;

document.write(allInfo);