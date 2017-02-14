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

    console.log(userData)
    // console.log(JSON.stringify(JSON.parse(body), null, 2))
  })
    // .on('response', function (response) {
      // console.log('body follows:', response.headers)

    // })
  console.log(requestURL)
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

