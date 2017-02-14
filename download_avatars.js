var request = require('request');
var GITHUB_USER = 'mackybeltran'
var GITHUB_TOKEN = '8a9997eb1f27395b4a83591908df938dbce044ae'


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN +'@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {"User-Agent": "Student Project"}
  }
  request(options, function (error, response, body) {
    var userData = JSON.parse(body)
    var output = []
      for (var i = 0; i < userData.length; i++) {
        output.push(userData[i]['avatar_url'])


      // console.log(userData[0]['avatar_url'])
    } console.log(output)
    console.log(userData[0]['avatar_url'])

  })


}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});



