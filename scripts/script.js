$(document).ready(function() {
	console.log("ready!");
  
	console.log(devProfile);
  
	$.each(devProfile, function(key,valueObj){
		console.log(key + ": " + valueObj );
		
		$('#dev-profile').append('<strong>'+key +'</strong>'+ ": " + valueObj +'<br>');
	});
});


var devProfile = {
	"name": ["Houston",	"Passarella"],
	"GitHubUsername": ["Houston37F"],
	"GitHubURL": ["https://github.com/Houston37F"],
	"pic": ["https://imgur.com/5rJmGns"],
	"Major": ["Computer Information Systems"],
	"Minor": ["Management"],
	"Graduation Year":["Will hopefully be able to graduate by the end of 2022!"],
	"Experience":["For the past 3 years I've been working overseas for the DoD creating databases for tracking facility maintenance and inspection forms and documentation. I don't have much experience in website developement at the moment, but hopefully this class will fix that haha." ],
	"Interests": ["I enjoy playing video games, hiking outdoors, and fishing."],
	"Side Projects": ["With my current employment schedule I don't really have time for any side projects. haha"]
};