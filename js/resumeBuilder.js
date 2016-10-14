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
    "location" : "Mumbai"
  },
  "bioPic" : "images/me.jpg",
  "welcomeMessage" : "Hello focks!",
  "skills" : ["Front-end developer", "C++", "Python", "Java"]
};


var work = {};
work.position = "Senior Web developer";
work.employer = "Infosys";
work.years = "2 years";
work.city = "Pune";

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

var myName = HTMLheaderName.replace("%data%",bio.name);
var myRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(myRole);
$("#header").prepend(myName);
