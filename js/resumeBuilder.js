var bio = {
  "name" : "Rahul Joshi",
  "role" : "Web developer",
  "contacts" : {
    "email" : "rahuljoshi6070@gmail.com",
    "mobile" : "9769204585",
    "location" : "Mumbai",
    "github" : "aaRJay607",
    "twitter" : "@rahul",
    "linkedin" : "https://in.linkedin.com/in/"
  },
  "bioPic" : "images/fry.jpg",
  "welcomeMessage" : "Hello focks!",
  "skills" : ["HTML", "CSS", "JavaScript", "Frameworks such as Bootstrap", "Libraries such as jQuery"]
};
bio.display = function() {
  var myName = HTMLheaderName.replace("%data%",bio.name);
  var myRole = HTMLheaderRole.replace("%data%",bio.role);

  $("#header").prepend(myRole);
  $("#header").prepend(myName);

  var myMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var myLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
  var myGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var myEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var myLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var myTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter)

  $("#topContacts").append(myMobile);
  $("#topContacts").append(myEmail);
  $("#topContacts").append(myGithub);
  $("#topContacts").append(myTwitter);
  $("#topContacts").append(myLinkedin);
  $("#topContacts").append(myLocation);

  var myBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
  var myMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

  $("#header").append(myBiopic);
  $("#header").append(myMsg);

  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    var mySkills = HTMLskills.replace("%data%",skill);
    $("#skills").append(mySkills);
  })

  $("#footerContacts").append(myMobile);
  $("#footerContacts").append(myEmail);
  $("#footerContacts").append(myGithub);
  $("#footerContacts").append(myTwitter);
  $("#footerContacts").append(myLinkedin);
  $("#footerContacts").append(myLocation);
}
bio.display();

var project = {
  "project" : [{
  "title" : "Data Streaming Application Using RTP/RTSP in a Local Area Network",
  "dates" : "2015-2016",
  "description" : "An application with live data-streaming platform that allows a user to broadcast audio-visual content from a server in a Local Area Network and clients to view the content live on their devices.",
  "image" : ["images/project1.png","images/project2.png"]
  },{
  "title" : "Making a porfolio site using HTML, CSS, Bootstrap",
  "dates" : "September 2016 - October 2016",
  "description" : "The design was done in HTML and CSS. A responsive website that displays images, descriptions and links to each of the portfolio projects completed throughout the course of the Front-End Web Developer Nanodegree.",
  "image" : ["images/portfolio1.jpg","images/portfolio2.jpg"]
  }]
};
project.display = function() {
  this.project.forEach(function(proj){
    $("#projects").append(HTMLprojectStart);
    var myTitle = HTMLprojectTitle.replace("%data%",proj.title);
    var myDates = HTMLprojectDates.replace("%data%",proj.dates);
    var myDescription = HTMLprojectDescription.replace("%data%",proj.description);
    var myImage = HTMLprojectImage.replace("%data%",proj.image);

    $(".project-entry:last").append(myTitle);
    $(".project-entry:last").append(myDates);
    $(".project-entry:last").append(myDescription);
    // $(".project-entry:last").append(myImage);
  })
}
project.display();

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
  "location" : "Delhi",
  "dates" : "2015-2016",
  "description" : "An associate developer roped into many web app projects"
  }]
};
work.display = function() {
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var myTitle = HTMLworkTitle.replace("%data%",job.title);
    var myEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var employerTitle = myEmployer + myTitle;
    var myLocation = HTMLworkLocation.replace("%data%",job.location);
    var myDates = HTMLworkDates.replace("%data%",job.dates);
    var myDescription = HTMLworkDescription.replace("%data%",job.description);

    $(".work-entry:last").append(employerTitle);
    $(".work-entry:last").append(myLocation);
    $(".work-entry:last").append(myDates);
    $(".work-entry:last").append(myDescription);
  })
}
work.display();

var education = {
  "schools" : [{
    "name" : "St. Lawrence High School",
    "location" : "Mumbai",
    "degree" : "SSC",
    "majors" : "Maths, Science",
    "dates" : "June 2000 - May 2010",
    "url" : "Link"
  }, {
    "name" : "SVIS jr. college",
    "location" : "Mumbai",
    "degree" : "HSC",
    "majors" : "IT, Physics",
    "dates" : "June 2010 - March 2012",
    "url" : "Link"
  }, {
    "name" : "Sinhgad Institutes",
    "location" : "Pune",
    "degree" : "BE",
    "majors" : "Computer",
    "dates" : "Aug 2012 - June 2016",
    "url" : "Link"
  }],
  "onlineCourses" : [{
    "school" : "Udacity",
    "title" : "Front-end Web Development",
    "dates" : "September 2016 - In progress",
    "url" : "Link"
  }, {
    "school" : "Udacity",
    "title" : "Intro to Computer Programming",
    "dates" : "July 2016 - Aug 2016",
    "url" : "Link"
  }]
};
education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var myName = HTMLschoolName.replace("%data%",school.name);
    var myDegree = HTMLschoolDegree.replace("%data%",school.degree);
    var nameDegree = myName + myDegree;
    var myMajors = HTMLschoolMajor.replace("%data%",school.majors);
    var myLocation = HTMLschoolLocation.replace("%data%",school.location);
    var myDates = HTMLschoolDates.replace("%data%",school.dates);
    // var myURL = HTMLschoolURL.replace("%data%",school.url);
    $(".education-entry:last").append(nameDegree);
    $(".education-entry:last").append(myDates);
    $(".education-entry:last").append(myLocation);
    $(".education-entry:last").append(myMajors);
    // $(".education-entry:last").append(myURL);
  })
  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(online){
    $("#education").append(HTMLonlineStart);
    var myTitle = HTMLonlineTitle.replace("%data%",online.title);
    var mySchool = HTMLonlineSchool.replace("%data%",online.school);
    var titleSchool = myTitle + mySchool;
    var myDates = HTMLonlineDates.replace("%data%",online.dates);
    var myURL = HTMLonlineURL.replace("%data%",online.url);
    $(".education-entry:last").append(titleSchool);
    $(".education-entry:last").append(myDates);
    $(".education-entry:last").append(myURL);
  })
}
education.display();


$("#mapDiv").append(googleMap);

/*
CLICK LOGGING CODE
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
*/

/*
INTERNATIONALIZE BUTTON CODE
$("#main").append(internationalizeButton);

function inName(name) {
  name=name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

  return name[0]+" "+name[1];
}
*/
