
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

// - [ Bio ] -
var bio = {
  "name" : "Travis Mikolay",
  "role" : "Front End Web Developer",
  "welcomeMessage" : "WelcomeMessage",
  "biopic" : "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/11258133_704864350469_3452514736886572123_n.jpg?oh=55a803fe009ea6b6d08acdb4322563a6&oe=5917AA5B",
  "contacts" : {
    "mobile" : "513 405 5183",
    "email" : "TraviseMikolay@gmail.com",
    "github" : "https://github.com/TheTravisM",
    // add linkedIn with a hyperlink
    "linkedIn": "#",
    "twitter" : "",
    "location" : "Rogers, AR"
  },
  "skills" : [
    "awesomeness",
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "JQuery",
    "Angular",
    "UI/UX"
  ]
};

// - [ Education ] -
var education = {
  "schools": [
    {
      "name" : "Mount Saint Joseph",
      "location" : "Cincinnati, OH",
      "degree": "BFA",
      "dates": 1998,
      "url": "",
      "major": ["Fine Arts Graphic Design"],
      "minor": ["Illustration", "iDesign"]
    },
    {
      "name" : "University Cincinnati",
      "city" : "Cincinnati, OH",
      "degree": "BFA",
      "major": ["Fine Arts Graphic Design"],
      "minor": ["Illustration", "iDesign"]
    }
  ],
  "onlineCources" : [
    {
      "title" : " ",
      "school" : " ",
      "dates": 1990,
      "url": " "
    }
  ]
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

//WORK: For-In Loop
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

// internationalizeButton
function inName(name){
  name = name.trim().split(" ");
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = newName[1].toUppercase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// Projects
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

// You want to see a map?
$("#mapDiv").append(googleMap);
