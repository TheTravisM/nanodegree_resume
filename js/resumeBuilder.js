
// # Main Section
var skills = ["awesomeness","programming","teaching","js"];
//$("#main").append(skills);
$("#main").append(skills.length);

// - [ Work ] -
var work = {
  "jobs": [
    {
      "employer" : "JB Hunt",
      "title" : "Senior Software Programming Specialist",
      "location" :"Rogers, Ar",
      "dates" :"2016-2017",
      "description" : "Job Description"
    },
    {
      "employer" : "Cengage Learning",
      "title" : "Senior Web Developer",
      "location" : "Cincinnati, Ohio",
      "dates" : "2012-2016",
      "description" : "Job Description"
    }
  ]
};

// - [ Projects ] -
var projects = {
    "projects" : [
      {
        "title" : "Project 1",
        "dates" : "2001",
        "description" : "Project 1 Description",
        "images" : [
          "https://placehold.it/350x150",
          "https://placehold.it/350x150",
          "https://placehold.it/350x150"
        ]
      },
      {
        "title" : "Project 2",
        "dates" : "2001",
        "description" : "Project 2 Description",
        "images" : [
          "https://placehold.it/350x150",
          "https://placehold.it/350x150",
          "https://placehold.it/350x150"
        ]
      },
      {
        "title" : "Project 3",
        "dates" : "2001",
        "description" : "Project 3 Description",
        "images" : [
          "https://placehold.it/350x150",
          "https://placehold.it/350x150",
          "https://placehold.it/350x150"
        ]
      }
    ]
};

// - [ Bio ] - //
var bio = {
  "name" : "Travis Mikolay",
  "role" : "Front End Web Developer",
  "contacts" : {
    "mobile" : "513 405 5183",
    "email" : "TraviseMikolay@gmail.com",
    "github" : "https://github.com/TheTravisM",
    /// add linkedIn with a hyperlink
    "linkedIn": "#",
    "twitter" : "",
    "location" : "Rogers, AR"
  },
  "welcomeMessage" : "WelcomeMessage",
  "skills" : [
    "awesomeness",
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "JQuery",
    "Angular",
    "UI/UX"
  ],
  "biopic" : "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/11258133_704864350469_3452514736886572123_n.jpg?oh=55a803fe009ea6b6d08acdb4322563a6&oe=5917AA5B"
  // Add Display function
};

// - [ Education ] -
var education = {
  "schools": [
    {
      "name" : "Mount Saint Joseph",
      "location" : "Cincinnati, OH",
      "degree": "BFA",
      "dates": '1998',
      "url": "",
      "majors": ["Fine Arts Graphic Design"],
      "minors": ["Illustration", "iDesign"]
    },
    {
      "name" : "University Cincinnati",
      "location" : "Cincinnati, OH",
      "degree": "BFA",
      "majors": ["Fine Arts Graphic Design"],
      "minors": ["Illustration", "iDesign"]
    }
  ],
  "onlineCources" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "UDacity",
      "dates": 2017,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title" : "How to Use Git and GitHub",
      "school" : "UDacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title" : "Angular 2 Essential Training",
      "school" : "Lynda.com",
      "dates": 2016,
      "url": "https://www.lynda.com/AngularJS-tutorials/Angular-2-Essential-Training/540347-2.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3aangular%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2"
    },
    {
      "title" : "Learn AngularJS 2: The Basics",
      "school" : "Lynda.com",
      "dates": 2016,
      "url": "https://www.lynda.com/AngularJS-tutorials/Learn-AngularJS-2-Basics/428058-2.html?srchtrk=index%3a13%0alinktypeid%3a2%0aq%3aangular%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2"
    },
    {
      "title" : "Building a Mobile App with AngularJS 1 and Ionic",
      "school" : "Lynda.com",
      "dates": 2016,
      "url": "https://www.lynda.com/AngularJS-tutorials/Building-Mobile-App-AngularJS-1-Ionic/368920-2.html?srchtrk=index%3a16%0alinktypeid%3a2%0aq%3aangular%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2"
    },
    {
      "title" : "Sass Essential Training",
      "school" : "Lynda.com",
      "dates": 2015,
      "url": "https://www.lynda.com/Sass-tutorials/Sass-Essential-Training/375925-2.html"
    },
    {
      "title" : "Bootstrap 3 Essential Training",
      "school" : "Lynda.com",
      "dates": 2015,
      "url": "https://www.lynda.com/Bootstrap-tutorials/Bootstrap-3-Essential-Training/417641-2.html"
    },
    {
      "title" : "Up and Running with Git and GitHub",
      "school" : "Lynda.com",
      "dates": 2015,
      "url": "https://www.lynda.com/Git-tutorials/Up-Running-Git-GitHub/409275-2.html"
    },
    {
      "title" : "Building a Mobile App with AngularJS 1 and Ionic",
      "school" : "Lynda.com",
      "dates": 2015,
      "url": "https://www.lynda.com/AngularJS-tutorials/Building-Mobile-App-AngularJS-1-Ionic/368920-2.html"
    },
    {
      "title" : "Web Project Workflows with Gulp.js, Git, and Browserify",
      "school" : "Lynda.com",
      "dates": 2014,
      "url": "https://www.lynda.com/Web-Design-tutorials/Web-Project-Workflows-Gulp-js-Git-Browserify/154416-2.html"
    }
  ]
  // Add Display function
};

// # Header
 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


// Contacts
var formattedHTMLmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedHTMLmobile);
var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedHTMLemail);
//var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
//$("#topContacts").append(formattedHTMLtwitter);
var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedHTMLgithub);
//var formattedHTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);
//$("#topContacts").append(formattedHTMLblog);
var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedHTMLlocation);

// Bio Pic
var formattedHTMLbioPic = HTMLbioPic.replace("%data%",bio.biopic);
$("#topContacts").after(formattedHTMLbioPic);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#topContacts").after(formattedHTMLwelcomeMsg);

// Bio SKILLS If Statement
$("#header").append(HTMLskillsStart);
for (var skill in bio.skills) {
  formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
  $("#skills").append(formattedSkill);
}

// WORK: For-In Loop
function displayWork() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedWorkDescription);
  });
}
displayWork();

// - [ Projects
var displayProjects = function() {
  // code
};

projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);
    if (project.images.length > 0 ) {
      project.images.forEach(function(image){
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  });
};
projects.display();

// - [ Education - "School"s
var displayEducation = function() {
  // code
};

education.display = function() {
  education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    $(".education-entry:last").append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedLocation);
    if(school.majors.length > 0 ){
      school.majors.forEach(function(major){
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedMajor);
      });
    }
    if(school.minors.length > 0 ){
      school.minors.forEach(function(minor){
        var formattedMinor = HTMLschoolMinor.replace("%data%", minor);
        $(".education-entry:last").append(formattedMinor);
      });
    }
  });
  education.onlineCources.forEach(function(course){

  });
};
education.display();

// internationalizeButton
function inName(name){
  name = name.trim().split(" ");
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = newName[1].toUppercase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// You want to see a map?
$("#mapDiv").append(googleMap);
