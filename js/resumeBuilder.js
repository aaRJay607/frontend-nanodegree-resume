/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Rahul");

 // var awesomeThoughts = "I am Rahul and I am awesome";
 // console.log(awesomeThoughts);
 // var funThoughts = awesomeThoughts.replace("awesome","fun");
 // $("#main").append(funThoughts);

// var name = "Rahul Joshi";
//
// var role = "Web developer";
// var myRole = HTMLheaderRole.replace("%data%",role);
//
// $("#header").prepend(myRole);

var bio = {
  "name" : "Rahul Joshi",
  "role" : "Web developer",
  "contact" : {
    "email" : "rahuljoshi6070@gmail.com",
    "mobile" : "9769204585",
    "location" : "Mumbai",
    "github" : "aaRJay607",
    // "linkedin" : "https://in.linkedin.com/in/rahul-joshi-526226126"
  },
  "bioPic" : "images\\me.jpg",
  "welcomeMessage" : "Hello focks!",
  "skills" : ["Front-end developer", "C++", "Python", "Java"]
};

var myName = HTMLheaderName.replace("%data%",bio.name);
var myRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(myRole);
$("#header").prepend(myName);

var myMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
// var myLinkedin = HTMLlinkedin.replace("%data%",bio.contact.linkedin);
var myGithub = HTMLgithub.replace("%data%",bio.contact.github);
var myEmail = HTMLemail.replace("%data%",bio.contact.email);
var myLocation = HTMLlocation.replace("%data%",bio.contact.location);

$("#topContacts").append(myMobile);
$("#topContacts").append(myEmail);
$("#topContacts").append(myGithub);
// $("#topContacts").append(myLinkedin);
$("#topContacts").append(myLocation);

var myBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
var myMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").append(myBiopic);
$("#header").append(myMsg);

$("#header").append(HTMLskillsStart);
for(i in bio.skills) {
  var mySkills = HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(mySkills);
}

// if (bio.skills.length > 0) {
//   $("#header").append(HTMLskillsStart);
//
//   var mySkills = HTMLskills.replace("%data%",bio.skills[0]);
//   $("#skills").append(mySkills);
//   mySkills = HTMLskills.replace("%data%",bio.skills[1]);
//   $("#skills").append(mySkills);
//   mySkills = HTMLskills.replace("%data%",bio.skills[2]);
//   $("#skills").append(mySkills);
//   mySkills = HTMLskills.replace("%data%",bio.skills[3]);
//   $("#skills").append(mySkills);
// }

var work = {
  "jobs" : [{
  "employer" : "Infosys",
  "title" : "Senior Web developer",
  "location" : "Pune",
  "dates" : "2016-in progress",
  "description" : "Currently a team leader of 15 people"
  }, {
  "employer" : "Amdocs",
  "title" : "Associate Web developer",
  "location" : "Pune",
  "dates" : "2015-2016",
  "description" : "An associate developer roped into many web app projects"
  }]
};

for (i in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var myTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
  var myEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
  var employerTitle = myEmployer + myTitle;
  var myLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
  var myDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
  var myDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

  $(".work-entry:last").append(employerTitle);
  $(".work-entry:last").append(myLocation);
  $(".work-entry:last").append(myDates);
  $(".work-entry:last").append(myDescription);

}
// var education = {};
// education["schoolName"] = "SKN";
// education["years"] = "4";
// education["city"] = "Pune";

// $("#main").append(work["position"]);
// $("#main").append(education.schoolName);

var educate = {
  "school" : [{
    "name" : "St. Lawrence High School",
    "city" : "Mumbai",
    "degree" : "SSC"
  }, {
    "name" : "SVIS jr. college",
    "city" : "Mumbai",
    "degree" : "HSC"
  }, {
    "name" : "Sinhgad Institutes",
    "city" : "Pune",
    "degree" : "BE"
  }],
  "online" : {
    "name" : "Udacity",
    "degree" : "Front-end Web Development"
  }
};

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name) {
  name=name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

  return name[0]+" "+name[1];
}

$("#mapDiv").append(googleMap);
