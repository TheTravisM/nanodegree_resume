/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
// Header
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<p>%data%</p><ul id="topContacts" class="list-unstyled"></ul>';

// Contacts
//var HTMLcontactStart = '';
var HTMLcontactGeneric = '<li class="flex-item">%contact% <span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item mobile"><i class="fa fa-phone" aria-hidden="true"></i>mobile: <a href="tel:%data%"></a></li>';
var HTMLemail = '<li class="flex-item email"><i class="fa fa-envelope" aria-hidden="true"></i>email: <a href="mailto: %data%"></a>';
var HTMLtwitter = '<li class="flex-item twitter"><i class="fa fa-twitter" aria-hidden="true"></i>twitter: <a href="%data%"></a></li>';
var HTMLgithub = '<li class="flex-item github"><i class="fa fa-github" aria-hidden="true"></i>github: <a href="%data%"></a></li>';
var HTMLlinkedin = '<li class="flex-item linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i>linkedin: <a href="%data%"></a></li>';
var HTMLblog = '<li class="flex-item blog"><i class="fa fa-globe" aria-hidden="true"></i>blog: <span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item location"><i class="fa fa-globe" aria-hidden="true"></i>location: <span>%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic img-responsive img-circle">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

// Skills
var HTMLskillsStart = '<h3 id="skills-h3"><i class="fa fa-rocket" aria-hidden="true"></i>Skills at a Glance</h3><ul id="skills" class="list-unstyled"></ul>';
var HTMLskills = '<li>%data%</li>';

// Work
var HTMLworkStart = '<div class="row work-entry">' +
    '<div class="col-sm-2 column-1"></div>' +
    '<div class="col-sm-10 column-2"></div>' +
    '</div>';
var HTMLworkLogo = '<img src="%data%" class="img-responsive center-block">';
var HTMLworkTitle = '<h3>%data%</h3>';
var HTMLworkURL = '<h4><a class="work-link" href="%data%"></a></h4>';
var HTMLworkEmployer = '%data%';
var HTMLworkDates = '<small class="date-text">%data%</small>';
var HTMLworkLocation = '<p class="location-text">%data%</p>';
var HTMLworkDescription = '<p>%data%</p>';

// Projects
var HTMLprojectStart = '<div class="row project-entry"></div>';
var HTMLprojectUrl = '<div class="col-md-12"><h3 class="project-title"><a href="%data%"></a></h3></div>';
var HTMLprojectTitle = '%data% ';
var HTMLprojectDates = '<small class="date-text"> - %data%</small>';
var HTMLprojectImage = '<div class="project-img col-md-4 col-sm-6 col-xs-12"><img src="%data%"></div>';
var HTMLprojectDescription = '<div class="project-description col-md-12 col-xs-12"><p>%data%</p></div>';
var HTMLprojectGitHub = '<a href="%data%" class="github-link">GitHub Link</a>';

// Education
var HTMLschoolStart = '<div class="education-entry col-md-12"></div>';
var HTMLschoolName = '<h3><a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a></h3>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLschoolMinor = '<em><br>Minor: %data%</em>';

// Online Classes
var HTMLonlineClasses = '<h3 class="page-header"><i class="fa fa-wifi" aria-hidden="true"></i>Online Classes</h3>';
var HTMLonlineURL = '<h4 class="online-title"><a href="%data%"></a></h4>';
var HTMLonlineTitle = '%data%';
var HTMLonlineSchool = '<p>%data%</p>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';


var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // For the map to be displayed, the googleMap var must be appended to #mapDiv in resumeBuilder.js.

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // TM Added Code from video
      infoWindow.open(map, marker);
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
